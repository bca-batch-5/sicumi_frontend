import styledComponents from "styled-components";

const HeaderStyled = styledComponents.header`
max-width: 80%;
margin: 0 auto;
height: 7rem;
display: flex;
justify-content: space-between;
align-items: center;

.header__logo {
width: 6rem;
}

.header__nav {
list-style: none;
display: flex;
}

.btn__link:link,
.btn__link:visited {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 4rem;
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  background-color: #7950f2;
  border-radius: 10px;
  border: 1px solid #5f3dc4;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
}

.btn__link:link:first-child,
.btn__link:visited:first-child {
  margin-right: 2rem;
  color: #7950f2;
  background-color: #fff;
}

.btn__link:hover,
.btn__link:active {
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  color: #7950f2;
  background-color: #fff;
}

.btn__link:hover:first-child,
.btn__link:active:first-child {
  color: #fff;
  background-color: #7950f2;
}
`;

export default HeaderStyled;
