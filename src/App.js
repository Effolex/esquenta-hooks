import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List';
import Header from './Header';
import Filters from './Filters';

const App = () => {
  const [state, setState] = useState({
    people: [],
    filters: {
      name: '',
      craft: '',
    }
  });

  const setFilter = (filter, value) => {
    setState((prevState) => ({
      ...prevState,
      filters: {...prevState.filters, [filter]: value } }
    ));
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('http://api.open-notify.org/astros.json');
      const { people } = await response.json();
      setState((prevState) => ({ ...prevState, people }));
    })()
  }, []);

  return (
    <div className='App'>
      <Header { ...state } />
      <Filters {...state } setFilter={setFilter} />
      <List {...state } />
    </div>
  );
}

export default App;
