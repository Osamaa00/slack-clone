import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from "../../context/StateProvider";


function Header() {

  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for loggedin users */}
        <Avatar
          className={ user?.displayName }
          alt={ user?.photoURL }
          src=""
        />
        {/* Time icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* Search icon */}
        <SearchIcon />
        {/* input */}
        <input type="text" placeholder="Search Developers Den" />
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
