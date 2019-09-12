import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Dropdown from './components/Dropdown';
import './App.css';
import { pathnameToQuery, queryToPathname } from './helpers';

const dropdownsArray = [
  { id: 1, name: 's', label: 'Услуги', url: 'search/terms' },
  { id: 2, name: 'b', label: 'Бренды', url: 'search/brands_terms' },
  { id: 3, name: 'st', label: 'Стили', url: 'search/styles' }
];

const App = ({ history }) => {
  const query = pathnameToQuery(history.location.pathname);

  const updateFilter = (name, value) => {
    const preparedPathname = queryToPathname({ ...query, [name]: value });
    history.replace(`/${preparedPathname}/`);
  };
  return (
    <div className="App">
      <h2>The story of 3 dropdowns</h2>
      {dropdownsArray.map(i => (
        <Dropdown
          name={i.name}
          label={i.label}
          url={i.url}
          onFilterChange={updateFilter}
          query={query}
          key={i.id}
        />
      ))}
    </div>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(App);
