import React, { useContext } from "react";

import PeopleContext from "./context/PeopleContext";

const Header = () => {
  const { people } = useContext(PeopleContext);

  return (
    <h2>{`There are ${people.length} people in space right now`}</h2>
  );
};

export default Header;