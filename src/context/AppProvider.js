import React, { useEffect, useState } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {
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

  const context = {
    ...state,
    setFilter,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  )
};

export default AppProvider;
