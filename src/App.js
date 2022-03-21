import React from 'react';
import './App.css';

import Provider from './context/AppProvider';
import List from './List';
import Header from './Header';
import Filters from './Filters';

const App = () => (
  <Provider>
    <div className='App'>
      <Header />
      <Filters />
      <List />
    </div>
  </Provider>
);

export default App;
