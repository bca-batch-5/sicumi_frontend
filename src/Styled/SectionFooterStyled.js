import styledComponents from "styled-components";

const SectionFooterStyled = styledComponents.footer`
font-size: 1.4rem;
  background-color: #7950f2;
  color: #fff;
  padding: 1rem 10rem;
  opacity: 0.7;

  .footer__box {
    width: 30rem;
    margin-bottom: 2rem;
  }
  .footer__box-title {
    font-size: 3rem;
    font-weight: 700;
  }
  .footer__copy {
    border-top: 1px solid #aaa;
    display: flex;
    justify-content: space-between;
  }
`;
export default SectionFooterStyled;
