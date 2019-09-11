import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { getRequestInstance } from '../../data/api';

const requestInstance = getRequestInstance();

export const fetchList = url => {
  return requestInstance
    .get(url)
    .then(({ data: { data } }) => data)
    .catch(error => Promise.reject(error));
};

const Dropdown = props => {
  const { label, url, name, onFilterChange } = props;

  const [items, setItems] = useState([
    {
      id: 1,
      slug: 'test',
      label: 'test'
    },
    {
      id: 2,
      slug: 'test2',
      label: 'test2'
    },
    {
      id: 3,
      slug: 'test3',
      label: 'test3'
    }
  ]);

  useEffect(() => {
    if (url) {
      fetchList(url)
        .then(res => setItems(res))
        .catch(error => Promise.reject(error));
    }
  }, []);

  return (
    <div>
      {label && <span className={styles.label}>{label}</span>}
      <select onChange={e => onFilterChange(name, e.target.value)}>
        {items.map(i => (
          <option key={i.id} value={i.slug}>
            {i.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {};

export default Dropdown;
