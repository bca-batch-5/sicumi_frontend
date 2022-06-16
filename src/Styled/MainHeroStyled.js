import styledComponents from "styled-components";

const MainHeroStyled = styledComponents.main`
flex: 1;
padding: 4rem 6rem;
font-size: 1.6rem;

.cta {
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;
}
.icon__success {
  width: 10rem;
  display: flex;
  margin: 5rem auto;
}
`;
export default MainHeroStyled;
