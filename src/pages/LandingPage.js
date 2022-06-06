import React, { useState } from "react";
import HeaderStyled from "../styled/HeaderStyled";
import MainStyled from "../styled/MainStyled";
import SectionHeroStyled from "../styled/SectionHeroStyled";
import { ReactComponent as AppStoreSvg } from "../assets/app-store-logo.svg";
import { ReactComponent as GooglePlaySvg } from "../assets/google-play-logo.svg";
import { ReactComponent as BtnRight } from "../assets/btnRight.svg";
import { ReactComponent as BtnLeft } from "../assets/btnLeft.svg";
import SectionSupportStyled from "../styled/SectionSupportStyled";
import SectionAboutStyled from "../styled/SectionAboutStyled";
import Cards from "../components/Cards";
import SectionFeatureStyled from "../styled/SectionFeatureStyled";
import SectionTestimoniStyled from "../styled/SectionTestimoniStyled";
import SectionFooterStyled from "../styled/SectionFooterStyled";
import CarousData from "./CarousData";

const LandingPage = () => {
  const [current, setCurrent] = useState(1);
  const carousLength = CarousData.length;

  const nextSlide = () => {
    setCurrent(current === carousLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? carousLength - 1 : current - 1);
  };

  return (
    <MainStyled>
      {/* SECTION HERO */}
      <div className="hero">
        <HeaderStyled>
          <img
            src={require("../assets/squid.png")}
            alt="company-logo"
            className="header__logo"
          />
          <div className="header__nav">
            <a className="btn__link" href="/">
              Login
            </a>
            <a className="btn__link" href="/">
              Sign Up
            </a>
          </div>
        </HeaderStyled>
        <SectionHeroStyled>
          <div className="hero-box-img">
            <img
              src={require("../assets/phone.png")}
              alt="phone img"
              className="hero-box-img__img"
            />
          </div>
          <div className="hero-box-text">
            <h1 className="hero-box-text__title">
              Awesome App For <span className="highlight">Saving Time</span>.
            </h1>
            <p className="hero-box-text__sub">
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </p>
            <a className="btn__link" href="/">
              Try it Free
            </a>
            <p className="hero-box-text__sub">Available on :</p>
            <div className="store">
              <GooglePlaySvg className="store__icon" />
              <span className="store__text"> Google Play Store </span>
              <AppStoreSvg className="store__icon" />
              <span className="store__text"> App Store </span>
            </div>
          </div>
        </SectionHeroStyled>
      </div>

      {/* SECTION SUPPORT */}
      <SectionSupportStyled>
        <img
          className="support__img"
          src={require("../assets/supports.png")}
          alt="company supports"
        />
      </SectionSupportStyled>

      {/* SECTION ABOUT */}
      <SectionAboutStyled>
        <h2 className="about__title">
          <span className="highlight">About </span>The Application
        </h2>
        <p className="about__sub">
          We have some great features from the application <br />
          and it's totally free to use by all users around the world
        </p>
        <Cards />
      </SectionAboutStyled>

      {/* SECTION FEATURES */}
      <section className="section-feature" style={{ backgroundColor: "#ddd" }}>
        <SectionFeatureStyled>
          <div className="feature-box-img">
            <img
              src={require("../assets/phone2.png")}
              alt="phone img 2"
              className="feature-box-img__img"
            />
          </div>
          <div className="feature-box-text">
            <h2 className="feature-box-text__title">
              All the <span className="highlight">Great</span> Sicumi Features.
            </h2>
            <figure className="feature-cards">
              <div className="feature-cards__title">1. Small Fee</div>
              <div className="feature-cards__sub">
                We only charge 5% of every success transaction done in Sicumi
                App.
              </div>
            </figure>
            <figure className="feature-cards">
              <div className="feature-cards__title">2. Data Secured</div>
              <div className="feature-cards__sub">
                All your data is secured properly in our system and it's
                encrypted.
              </div>
            </figure>
            <figure className="feature-cards">
              <div className="feature-cards__title">3. User Friendly</div>
              <div className="feature-cards__sub">
                Sicumi come up with modern and sleek design and not complicated.
              </div>
            </figure>
          </div>
        </SectionFeatureStyled>
      </section>

      {/* SECTION TESTIMONI */}
      <SectionTestimoniStyled>
        <h2 className="testimoni__title">
          What Founders are
          <span className="highlight"> Saying</span>
        </h2>
        <p className="testimoni__sub">
          We have some great features from the application <br />
          and it's totally free to use by all users around the world
        </p>
        <div className="carousels">
          {CarousData.map((data, index) => {
            return (
              <figure
                className="carous"
                style={{ transform: `translateX(${(index - current) * 100}%)` }}
                key={index}
              >
                <img
                  className="carous__img"
                  src={require(`../assets/${data.images}`)}
                  alt="testimonial"
                />
                <div className="carous__name">{data.name}</div>
                <div className="carous__job">{data.job}</div>
                <blockquote className="carous__testi">{data.testi}</blockquote>
              </figure>
            );
          })}

          <BtnRight onClick={nextSlide} />
          <BtnLeft onClick={prevSlide} />
        </div>
      </SectionTestimoniStyled>

      {/* SECTION FOOTER */}
      <SectionFooterStyled>
        <div className="footer__box">
          <div className="footer__box-title">Sicumi</div>
          <div className="footer__box-desc">
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </div>
        </div>
        <div className="footer__copy">
          <div className="footer__copy-text">
            2022 &copy; All Right Reserved
          </div>
          <div className="footer__copy-contact">sicumi@bca.com</div>
        </div>
      </SectionFooterStyled>
    </MainStyled>
  );
};

export default LandingPage;
