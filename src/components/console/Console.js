import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Console = ({outputs, title}) => {
  return <div className={styles.console}>
    <div className={styles.title}>
      console <div className={styles.subtitle}>-{title}</div>
    </div>
    <div className={styles.body}>
      {outputs.map((output, i)=>{
        return (<div key={i} className={styles.out}>
                  {output.line &&
                    <div className={styles.line}>line {output.line}:</div>
                  }
                  {output.time &&
                    <div className={styles.response}>{output.time}:</div>
                  }
                  <div className={styles.output}>{output.output}</div>
              </div>)
        })}
    </div>
  </div>;
};
Console.defaultProps = {
  outputs: [],
  title: '',
};
Console.propTypes = {
  outputs: PropTypes.array,
  title: PropTypes.string,
}
export default Console;
