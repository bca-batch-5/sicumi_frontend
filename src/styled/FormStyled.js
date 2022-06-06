import styledComponents from "styled-components";

const FormStyled = styledComponents.form`
display: flex;
flex-direction: column;
opacity: ${(props) => (props.isActive ? "1" : "0.4")};
transition: all 0.5s;

.reset__pass {
  align-self: flex-end;
  font-size: 1.4rem;
  margin-bottom: 3rem;
  cursor: pointer;
  text-decoration: underline;
}

.alert {
  visibility: hidden;
  align-self: center;
  font-size: 1.4rem;
}
`;

export default FormStyled;
