import React, { useState } from 'react';
import FiltersContext from './/FiltersContext';

const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({ name: '', craft: '' });

  const handleFilters = (filter, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
  };

  const filtersContext = {
    filters,
    handleFilters,
  };

  return (
    <FiltersContext.Provider value={ filtersContext }>
      { children }
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
