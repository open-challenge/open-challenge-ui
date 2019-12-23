import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Card = ({ style, children }) => {
  return (
    <div className={styles.card} styles={style}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  style: {}
};

Card.propTypes = {
  style: PropTypes.object
};

export default Card;
