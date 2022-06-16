import styledComponents from "styled-components";

const SectionHeroStyled = styledComponents.section`
width: 80%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;


.hero-box-img {
  flex: 0 0 50%;
  display: flex;
  justify-content: center;
  position: relative;
}
.hero-box-img__img {
  width: 60%;
  z-index: 100;
}
.hero-box-img::after {
  content: " ";
  height: 70%;
  width: 60%;
  z-index: 10;
  position: absolute;
  border-radius: 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(to bottom, #7950f2, #b197fc);
  opacity: 0.7;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}
.hero-box-img:hover::after {
  opacity: 1;
  width: 70%;
  height: 80%;
}

.hero-box-text {
  padding: 0rem 5rem;
}
.hero-box-text__title {
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  line-height: 1.2;
  letter-spacing: 1px;
}
.hero-box-text__sub {
  font-size: 2rem;
}
.hero-box-text .btn__link:link {
  width: 15rem;
  margin: 3rem 0rem;
}

.store {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  color: #7950f2;
}
.store__icon {
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}
.store__text {
  font-size: 1.8rem;
  margin-right: 2rem;
  opacity: 0.8;
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

export default SectionHeroStyled;
