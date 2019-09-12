import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
  const { label, url, name, onFilterChange, query } = props;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url) {
      setLoading(true);
      fetchList(url)
        .then(res => {
          setItems(res);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          return Promise.reject(error);
        });
    }
  }, []);

  return (
    <div>
      {label && <span className={styles.label}>{label}</span>}
      <select
        disabled={loading}
        className={classNames(styles.select, { [styles.loading]: loading })}
        value={query[name]}
        onChange={e => onFilterChange(name, e.target.value)}
      >
        <option>Не выбрано</option>
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
  onFilterChange: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired
};

Dropdown.defaultProps = {};

export default Dropdown;
