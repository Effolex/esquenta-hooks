import React, { useContext } from "react";

import PeopleContext from "./context/PeopleContext";
import FiltersContext from "./context/FiltersContext";

const List = () => {
  const { people } = useContext(PeopleContext);
  const { filters: { name, craft} } = useContext(FiltersContext);

  const filteredPeople = people.filter((person) => 
    person.name.includes(name)
      && (person.craft.includes(craft) || craft === 'All')
  );

  return (
    <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Craft</th>
        </tr>
      </thead>
      <tbody>
        {
          filteredPeople.map((person) => (
            <tr key={ person.name }>
              <td>{person.name}</td>
              <td>{person.craft}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default List;