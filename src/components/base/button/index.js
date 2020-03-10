import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Button = ({ value, onClick, type, children }) => {
  return (
    <div className={cx('button', type)} onClick={onClick}>
      {value}
      {children}
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button;
