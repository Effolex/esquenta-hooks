import React from "react";

class Header extends React.Component {
  render() {
    const { people } = this.props;
    return (
      <h2>{`There are ${people.length} people in space right now`}</h2>
    )
  }
}

export default Header;