import React, { useContext } from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { consoleContext } from '../../contexts';
const Console = ({ title }) => {
  const { logs } = useContext(consoleContext);

  return (
    <div className={styles.console}>
      <div className={styles.title}>
        console <div className={styles.subtitle}>-{title}</div>
      </div>
      <div className={styles.body}>
        {logs.map((output, i) => {
          return (
            <div key={i} className={styles.out}>
              {output.line && (
                <div className={styles.line}>line {output.line}:</div>
              )}
              {output.time && (
                <div className={styles.response}>{output.time}:</div>
              )}
              <div className={styles.output}>{output.output}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
Console.defaultProps = {
  title: ''
};
Console.propTypes = {
  title: PropTypes.string
};
export default Console;
