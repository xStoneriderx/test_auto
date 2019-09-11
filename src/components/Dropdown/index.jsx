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
  const { label, url } = props;

  const [items, setItems] = useState([]);

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
      <select>
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
  url: PropTypes.string
};

Dropdown.defaultProps = {};

export default Dropdown;
