import React, { useContext } from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
        <Button type="menu-button" style={styles.trash} onClick={clearConsole}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
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
