import React from "react";

import { FiLogIn } from "react-icons/fi";

import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="right">
          <img
            className="header__logo"
            src="https://fwcdn.pl/front/ogfx/fwm/oldbrowserlogo.1.png"
            alt="FilmWebLogo"
          />
          <div className="header__search">
            <form>
              <input
                type="text"
                placeholder="Szukaj filmów, seriali, gier itd."
              />
            </form>
          </div>
        </div>
        <div className="header__login">
          <h3>Zaloguj się</h3>
          <FiLogIn color="gray" size="1.5em" />
        </div>
      </header>
    </>
  );
}

export default Header;
