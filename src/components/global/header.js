import React from "react";

import { Link } from "gatsby";

import LabyrinthHeader from "../../images/headerLogo.png";

const Header = () => {
  return (
    <>
      <img src={LabyrinthHeader} />
      <Link to="../guides">Guides</Link>
    </>
  );
};

export default Header;
