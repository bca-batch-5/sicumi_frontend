import styledComponents from "styled-components";

const SectionFeatureStyled = styledComponents.div`
width: 80%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;

.feature-box-img {
  flex: 0 0 50%;
  display: flex;
  justify-content: center;
  position: relative;
}
.feature-box-img__img {
  width: 60%;
  z-index: 100;
}
.feature-box-img::after {
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
.feature-box-img:hover::after {
  opacity: 1;
  width: 70%;
  height: 80%;
}

.feature-box-text {
  display: flex;
  flex-direction: column;
}
.feature-box-text__title {
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: 1px;
}

.feature-cards {
  background-color: #eee;
  border-radius: 30px;
  padding: 1rem 2rem;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.4s;
}

.feature-cards:hover {
  background-color: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.feature-cards__title {
  font-size: 2rem;
  font-weight: 700;
  color: #5f3dc4;
}
.feature-cards__sub {
  font-size: 2rem;
}
.feature-cards:not(:last-child) {
  margin-bottom: 1rem;
}
`;

export default SectionFeatureStyled;
