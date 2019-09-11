import React from 'react';
import Dropdown from './components/Dropdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>The story of 3 dropdowns</h2>
      <Dropdown label="Услуги" items={[]} />
      <Dropdown label="Бренды" items={[]} />
      <Dropdown label="Стили" items={[]} />
    </div>
  );
}

export default App;
