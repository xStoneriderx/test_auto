import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Dropdown from './components/Dropdown';
import './App.css';

const App = ({ history }) => {
  const updateFilter = (name, value) => {
    history.push(`/${name}-${value}/`);
  };
  return (
    <div className="App">
      <h2>The story of 3 dropdowns</h2>
      <Dropdown name="s" label="Услуги" url="" onFilterChange={updateFilter} />
      <Dropdown name="b" label="Бренды" url="" onFilterChange={updateFilter} />
      <Dropdown name="st" label="Стили" url="" onFilterChange={updateFilter} />
    </div>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(App);
