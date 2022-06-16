import styledComponents from "styled-components";

const InputStyled = styledComponents.div`
display: flex;
border-bottom: ${(props) =>
  props.isActive ? "1px solid #7950f2" : "1px solid rgba(0, 0, 0, 0.5)"};
padding: 1rem 0rem;
align-items: center;
margin-bottom: 2rem;

.input:not(:last-child) {
  margin-bottom: 2rem;
}

.input__icon {
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  stroke: ${(props) => (props.isActive ? "#7950f2" : "")};
  transition: all 0.4s;
}

.pass_visible {
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  margin-right: 0rem;
  align-self: flex-end;
}


`;

export default InputStyled;
