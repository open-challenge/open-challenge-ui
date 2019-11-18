import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Console = ({outputs}) => {
  return <div className={styles.console}>
    {outputs.map((output, i)=>{
      return (<div key={i} className={styles.out}>
                <div className={styles.line}>line {output.line}:</div>
                <div className={styles.output}>{output.output}</div>
            </div>)
    })}
  </div>;
};
Console.defaultProps = {
outputs: [],
};
Console.propTypes = {
  outputs: PropTypes.array,
}
export default Console;
