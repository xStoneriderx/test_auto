import React from 'react';
import Dropdown from './components/Dropdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>The story of 3 dropdowns</h2>
      <Dropdown label="Услуги" url="search/terms" />
      <Dropdown label="Бренды" url="" />
      <Dropdown label="Стили" url="" />
    </div>
  );
}

export default App;
