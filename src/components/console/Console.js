import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
const Console = ({outputs, title}) => {
  const logs = useSelector((state)=>state.logs.logs);
  console.log(logs);
  return <div className={styles.console}>
    <div className={styles.title}>
      console <div className={styles.subtitle}>-{title}</div>
    </div>
    <div className={styles.body}>
      {logs.map((output, i)=>{
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
