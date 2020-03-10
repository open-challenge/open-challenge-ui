import React, { useState, useContext } from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { Button, NavArea } from '../base';
import { consoleContext } from '../../contexts';
const Console = ({ title }) => {
  const { logs, cleanLogs } = useContext(consoleContext);
  const clearConsole = () => {
    cleanLogs();
  };
  return (
    <div className={styles.console}>
      <NavArea title="Console" subtitle={title}>
        <Button
          type="menu-button"
          value="Clean console"
          style={styles.trash}
          onClick={clearConsole}
        />
      </NavArea>
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
