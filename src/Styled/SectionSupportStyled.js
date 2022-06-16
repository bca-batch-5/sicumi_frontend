import styledComponents from "styled-components";

const SectionSupportStyled = styledComponents.section`
background-color: #ddd;
display: flex;
align-items: center;
justify-content: center;

.support__img {
  width: 80%;
  opacity: 0.6;
  padding: 3rem 0rem;
  transition: all 0.4s;
}
.support__img:hover {
  opacity: 1;
}
`;

export default SectionSupportStyled;
