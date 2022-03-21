import React from 'react';

const List = ({ people, filters: { name, craft} }) => {
  const filteredPeople = people.filter((person) => (
    person.name.includes(name) && (person.craft.includes(craft) || craft === 'All')
  ));

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
