import React from "react";

class Filters extends React.Component {
  inputHandler = ({ target: { name, value } }) => this.props.setFilter(name, value);

  render() {
    const { people } = this.props;
    const crafts = people.reduce((acc, person) => {
      if ( !acc.includes(person.craft)) {
        return [...acc, person.craft];
      }
      return acc;
    }, ['All']);
    return (
      <div>
        <label htmlFor="person-filter">
          Person: 
        <input
          id="person-filter"
          type="text"
          name="name"
          onChange={this.inputHandler}
          />
        </label>
        <label htmlFor="craft-filter">
          Craft: 
          <select
          name="craft"
          id="craft-filter"
          onChange={this.inputHandler}
          >
            { crafts.length
            && crafts.map((craft) => (
            <option key={craft} value={craft}>
              {craft}
            </option>))
            }
          </select>
        </label>
      </div>
    )
  }
}

export default Filters;