import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/png;base64,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"
          alt=""
        ></img>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello Gopi</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
