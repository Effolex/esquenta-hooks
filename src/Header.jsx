import React, { useContext } from "react";

import AppContext from './context/AppContext';

const Header = () => {
  const { people } = useContext(AppContext);

  return (
    <h2>{`There are ${people.length} people in space right now`}</h2>
  );
}

export default Header;
