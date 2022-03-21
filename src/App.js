import React from 'react';
import './App.css';
import List from './List';
import Header from './Header';
import Filters from './Filters';

class App extends React.Component {
  state = {
    people: [],
    filters: {
      name: '',
      craft: '',
    }
  }

  setFilter = (filter, value) => {
    this.setState(({ filters }) => ({
      filters: {...filters, [filter]: value } }
    ));
  }

  componentDidMount() {
    (async () => {
      const response = await fetch('http://api.open-notify.org/astros.json');
      const { people } = await response.json();
      this.setState({ people })
    })()
  }

  render() {
    return (
      <div className='App'>
        <Header {...this.state} />
        <Filters {...this.state} setFilter={this.setFilter} />
        <List {...this.state} />
      </div>
    );
  }
}

export default App;
