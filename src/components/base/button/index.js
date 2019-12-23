import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Button = ({ value, onClick }) => {
  return (
    <div className={cx('button')} onClick={onClick}>
      {value}
    </div>
  );
};

export default Button;
