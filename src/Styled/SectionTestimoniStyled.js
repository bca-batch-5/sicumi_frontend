import styledComponents from "styled-components";

const SectionTestimoniStyled = styledComponents.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0rem;
  text-align: center;

  .testimoni__title {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .testimoni__sub {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  
  .carousels {
    position: relative;
    font-size: 2rem;
    width: 90rem;
    height: 40rem;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .carous {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40rem;
    margin: 0 auto;
    transition: transform 1s;
    padding: 2rem 2rem;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .carous__img {
    width: 12rem;
    height: 12rem;
    border-radius: 30px;
    margin-bottom: 2rem;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  }
  .carous__name {
    font-weight: 700;
    color: #5f3dc4;
    font-size: 2.2rem;
  }
  .carous__job {
    margin-bottom: 2rem;
    border-bottom: 1px solid #b197fc;
  }
  .carous__testi {
    font-style: italic;
  }
  
  .btn__left,
  .btn__right {
    width: 5rem;
    height: 5rem;
    position: absolute;
    transform: translate(0%, -50%);
    top: 50%;
    stroke: #5f3dc4;
    cursor: pointer;
  }
  
  .btn__left {
    left: 1%;
  }
  
  .btn__right {
    right: 1%;
  }
}

`;

export default SectionTestimoniStyled;
