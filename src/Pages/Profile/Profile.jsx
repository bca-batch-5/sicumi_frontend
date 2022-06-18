import React, { useState, useEffect } from "react";
import LayoutHome from "../../Layouts/Home/Home";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { Wrappers, DescAcc, PhoneAcc, NameAcc } from "./StyledProfile";
import ButtonwArrow from "../../Components/Button/ButtonwArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { getUserByIdAPI, loadFileAPI, uploadFileAPI } from "../../Services/Users";
import { MainContent } from "../ChangePhone/StyledChangePhone";

const Profile = () => {
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [photo, setPhoto] = useState(null);
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("");

  useEffect(() => {
    getUserById();
  }, []);

  useEffect(() => {
    getPhotoById(filename);
  }, [filename]);

  const getUserById = async (e) => {
    const res = await getUserByIdAPI();
    console.log("res get by id profiles: ", res);
    setPhone(res.data.phone);
    setFullname(res.data.fullname);
    setFilename(res.data.photo);
  };
  const getPhotoById = async (e) => {
    console.log("ini state filename", filename);
    const url = await loadFileAPI(filename);
    console.log("url by id: ", url);
    setPhoto(url);
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log("isi file ", file);
    const upload = await uploadFileAPI(file);
    console.log("ini respons upload", upload);
    setPhoto(upload.data.url);
  };

  const onChange = (e) => {
    console.log("filechanged", e.target.files);
    const [fileSelect] = e.target.files; //e.target.files adalah array yang isinya = [file] <- array length 1 index 0
    setFile(fileSelect);
    console.log("file ter isi ", fileSelect);
  };

  return (
    <LayoutHome>
      <MainContent>
        <Wrappers>
          <img // boolean ? true : false
            src={photo ? photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m5Cy4lXCbuyG54L0vuo3i5-ALavHe9KmhWA_wDM&s"}
            alt="profilepict"
            width={80}
            style={{
              display: "center",
              borderRadius: `10px`,
            }}
          />
          <DescAcc>
            <Link to="/Editimage" style={{ fontSize: 12, textDecoration: "none" }}>
              <FontAwesomeIcon icon={faPencil} style={{ paddingRight: 10 }} />
              Edit
            </Link>

            <NameAcc> {fullname}</NameAcc>
            <PhoneAcc>{phone}</PhoneAcc>
          </DescAcc>
          <Link to="/PersonalInformation" style={{ textDecoration: "none" }}>
            <ButtonwArrow Name="Personal information" />
          </Link>
          <Link to="/ChangePassword" style={{ textDecoration: "none" }}>
            <ButtonwArrow Name="Change Password" />
          </Link>
          <Link to="/ChangePin" style={{ textDecoration: "none" }}>
            <ButtonwArrow Name="Change Pin" />
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <Button Name="Log Out" />
          </Link>
        </Wrappers>
        <br />
      </MainContent>
    </LayoutHome>
  );
};

export default Profile;
