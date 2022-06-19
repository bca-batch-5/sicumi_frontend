import styledComponents from "styled-components";

const CardsStyled = styledComponents.div`
display: flex;
justify-content: center;
gap: 3rem;

.card {
  flex: 0 0 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eee;
  padding: 2rem 4rem;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border: 1px solid #eee;
  transition: all 0.4s;
  border-radius: 40px;
}
.card__icon {
  width: 3rem;
  height: 3rem;
  border: 2px solid #7950f2;
  border-radius: 50%;
  padding: 1rem;
  box-sizing: content-box;
  background-color: #eee;
  stroke: #7950f2;
  margin: 1rem 0rem 1rem 0rem;
}
.card__title {
  font-size: 2.2rem;
  margin-bottom: 3rem;
  color: #7950f2;
}
.card__desc {
  font-size: 2rem;
}
.card:hover {
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid #b197fc;
  cursor: pointer;
}
`;

export default CardsStyled;
