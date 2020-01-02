import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, value, onChange }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const handleOnChange = e => {
    setCurrentValue(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  return (
    <input
      type={type}
      value={currentValue}
      placeholder={placeholder}
      className={styles.input}
      onChange={handleOnChange}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  onChange: () => {}
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
