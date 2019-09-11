import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Dropdown = ({ label, items }) => (
  <div>
    {label && <span className={styles.label}>{label}</span>}
    <select>
      {items.map(i => (
        <option key={i.id} value={i.slug}>
          {i.label}
        </option>
      ))}
    </select>
  </div>
);

Dropdown.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array
};

Dropdown.defaultProps = {
  items: []
};

export default Dropdown;
