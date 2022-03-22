import React, { useState, useEffect } from 'react';

import PeopleContext from './PeopleContext';
import fetchAstronauts from '../services/fetchAstronauts';

const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async () => {
      const people = await fetchAstronauts();
      setPeople(people);
    })()
  }, []);

  const peopleContext = {
    people,
  };

  return (
    <PeopleContext.Provider value={ peopleContext }>
      { children }
    </PeopleContext.Provider>
  );
};

export default PeopleProvider;
