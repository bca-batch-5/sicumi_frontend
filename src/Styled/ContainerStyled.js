import styledComponents from "styled-components";

const ContainerStyled = styledComponents.div`
height: 100vh;
display: flex;

.side {
  flex: 0 0 60%;
  background: linear-gradient(0deg, #fff, #b197fc);
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  justify-content: space-between;
  color: #5f3dc4;
}
.side__title {
  color: #fff;
  font-weight: 700;
  position: relative;
  align-self: flex-start;
  padding: 0rem 2rem;
  transition: all 0.4s;
  cursor: pointer;
}
.side__title::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  border-radius: 30px;
  background-image: linear-gradient(120deg, #5f3dc4, #fff);
  box-shadow: 0px 2px 5px black;
}
.side__title:hover {
  color: #5f3dc4;
}
.side__title:hover::after {
  background-image: linear-gradient(120deg, #fff, #5f3dc4);
  box-shadow: 0px 3px 7px black;
}
.side__img {
  width: 75%;
  align-self: center;
}
.side__sub {
  font-weight: 500;
}
.side__desc {
  color: #5f3dc4;
  font-size: 1.6rem;
}

.highlight {
  color: #5f3dc4;
}
`;

export default ContainerStyled;
