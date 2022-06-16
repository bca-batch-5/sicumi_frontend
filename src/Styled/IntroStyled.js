import styledComponents from "styled-components";

const IntroStyled = styledComponents.div`
display: flex;
flex-direction: column;
align-items: center;

.intro__title {
  text-transform: capitalize;
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 1.8rem;
}
.intro__sub {
  margin-bottom: 4rem;
}
`;

export default IntroStyled;
