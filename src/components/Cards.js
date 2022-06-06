import React from "react";
import CardsStyled from "../styled/CardsStyled";
import { ReactComponent as LogoCard1 } from "../assets/card1.svg";
import { ReactComponent as LogoCard2 } from "../assets/card2.svg";
import { ReactComponent as LogoCard3 } from "../assets/card3.svg";

const Cards = () => {
  return (
    <CardsStyled>
      {/* <!-- CARD 1 --> */}
      <figure className="card">
        <LogoCard1 />
        <h3 className="card__title">24/7 Support</h3>
        <p className="card__desc">
          We have 24/7 contact support so you can contact us whenever you want
          and we will respond it.
        </p>
      </figure>

      {/* <!-- CARD 2 --> */}
      <figure className="card">
        <LogoCard2 />
        <h3 className="card__title">Data Privacy</h3>
        <p className="card__desc">
          We make sure your data is safe in our database and we will encrypt any
          data you submitted to us.
        </p>
      </figure>

      {/* <!-- CARD 3 --> */}
      <figure className="card">
        <LogoCard3 />
        <h3 className="card__title">Easy Download</h3>
        <p className="card__desc">
          Sicumi is 100% totally free to use it's now available on Google Play
          Store and App Store.
        </p>
      </figure>
    </CardsStyled>
  );
};

export default Cards;
