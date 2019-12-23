import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const PageContent = ({ children, center }) => {
  return <div className={cx('container', { center })}>{children}</div>;
};
PageContent.defaultProps = {
  center: false
};

PageContent.propTypes = {
  center: PropTypes.bool
};
export default PageContent;
