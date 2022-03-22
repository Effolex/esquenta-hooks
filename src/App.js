import React from 'react';
import './App.css';

import PeopleProvider from './context/PeopleProvider';
import FiltersProvider from './context/FiltersProvider';

import List from './List';
import Header from './Header';
import Filters from './Filters';

const App = () => {
  return (
    <PeopleProvider>
      <div className='App'>
        <Header />
        <FiltersProvider>
          <Filters />
          <List />
        </FiltersProvider>
      </div>
    </PeopleProvider>
  );
}

export default App;
