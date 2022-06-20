import React from "react";
import {
  addUserAPI,
  checkEmailAPI,
  findEmailAPI,
  getUserAPI,
  newPasswordAPI,
} from "../Services/User";
import FormStyled from "../Styled/FormStyled";
import { useNavigate, useParams } from "react-router-dom";

const Form = (props) => {
  let navigate = useNavigate();
  const params = useParams();
  const formAPI = async (e) => {
    e.preventDefault();
    let data = {};
    const btnId = e.target[e.target.length - 1].id;

    switch (btnId) {
      // LOGIN SERVICE
      case "signin":
        data = {};
        data = {
          email: e.target[0].value,
          password: e.target[1].value,
        };
        const respLogin = await getUserAPI(data);
        if (respLogin.data.status === 302) {
          window.localStorage.setItem(
            "dataUser",
            JSON.stringify({
              userId: respLogin.data.data.userId,
              email: respLogin.data.data.email,
              token: respLogin.data.data.token,
            })
          );
          navigate("/dashboard");
        } else if (respLogin.data.status === 404) {
          props.setAlert(respLogin.data.message);
        } else {
          props.setAlert("Form cannot be empty");
        }

        break;

      // REGIS SERVICE
      case "signup":
        data = {};
        const respRegis = await checkEmailAPI({ email: e.target[1].value });

        if (respRegis.data.status === 404) {
          props.setAlert(respRegis.data.message);
        } else if (respRegis.data.status === 400) {
          props.setAlert("Form cannot be empty");
        } else {
          data = {
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
          };
          window.localStorage.setItem("regisObject", JSON.stringify(data));
          navigate("/Regis/Pin");
        }
        break;

      // REGIS PIN SERVICE
      case "signpin":
        data = {};
        data = JSON.parse(window.localStorage.getItem("regisObject"));
        let pinNumber = "";
        for (let i = 0; i < e.target.length - 1; i++) {
          pinNumber += e.target[i].value;
        }
        if (pinNumber.length < 6) {
          props.setAlert("Pin cannot be empty");
        } else {
          data.pin = pinNumber;
          const respPin = await addUserAPI(data);
          console.log(respPin);
          if (respPin.data.status === 200) {
            navigate("/Regis/Pin/Success");
            setTimeout(() => {
              navigate("/Login");
            }, 5000);
          }
        }
        break;

      // CHECK EMAIL RESET SERVICE
      case "checkmail":
        const respFind = await findEmailAPI({ email: e.target[0].value });
        console.log(respFind);
        if (respFind.data.status === 404) {
          props.setAlert(respFind.data.message);
        } else if (respFind.data.status === 400) {
          props.setAlert("Invalid Email");
        } else {
          props.setAlert("Check your email for Verification");
        }
        break;

      // NEW PASSWORD SERVICE
      case "reset":
        data = {};

        const newPassword =
          e.target[0].value === e.target[1].value
            ? e.target[0].value
            : props.setAlert("Incorrect Password");

        const decodeEmail = atob(params.id);
        data = {
          email: decodeEmail,
          password: newPassword,
        };

        const respReset = await newPasswordAPI(data);
        if (respReset.data.status === 202) {
          props.setAlert("Password Changed");
          setTimeout(() => {
            navigate("/Login");
          }, 3000);
        }
        break;

      default:
        break;
    }
  };

  return (
    <FormStyled
      isActive={props.getFocus}
      onSubmit={formAPI}
      isAlert={props.alertStatus}
    >
      {props.children}
    </FormStyled>
  );
};

export default Form;
