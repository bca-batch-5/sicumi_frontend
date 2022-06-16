import styledComponents from "styled-components";

const SectionAboutStyled = styledComponents.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem 0rem;

.about__title {
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 2rem;
}
.about__sub {
  font-size: 2rem;
  margin-bottom: 6rem;
}
`;
export default SectionAboutStyled;
