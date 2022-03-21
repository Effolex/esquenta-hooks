import React from "react";

const Filters = ({ people, setFilter }) => {
  const inputHandler = ({ target: { name, value } }) => setFilter(name, value);

  const crafts = people.reduce((acc, person) => {
    if (!acc.includes(person.craft)) {
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
        onChange={inputHandler}
        />
      </label>
      <label htmlFor="craft-filter">
        Craft: 
        <select
        name="craft"
        id="craft-filter"
        onChange={inputHandler}
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
  );
}

export default Filters;