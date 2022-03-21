import React from "react";

class List extends React.Component {
  render() {
    const { people, filters: { name, craft} } = this.props;
    console.log(people);
    const filteredPeople = people.filter((person) => 
    person.name.includes(name)
      && (person.craft.includes(craft) || craft === 'All')
  )
    return (
      <table style={{ display: 'flex',flexDirection: 'column',alignItems: 'center' }}>
        <thead>
          <th>Name</th>
          <th>Craft</th>
        </thead>
        <tbody>
          <td>
            {filteredPeople.map((person) => (<tr>{person.name}</tr>))}
          </td>
          <td>
            {filteredPeople.map((person) => (<tr>{person.craft}</tr>))}
          </td>
        </tbody>
      </table>
    )
  }
}

export default List;