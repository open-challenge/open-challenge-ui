import React, {useState} from 'react';
import styles from './App.module.scss';
import CodeEditor from './components/code-editor';
import Console from './components/console';
import Nav from './components/nav';
let code = `
function test(a, b){
  return Math.round((a+b) / 2);
}
`;
const response = [
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
];
const dataset = [3,6];
function App() {
  const [logs, setLogs] = useState([]);
  const [resp, setResp] = useState([]);
  const handleLog = (newLog) => {
      setLogs(logs.concat(newLog));
  };
  const handleEnd = (newLog) => {
      console.log('asd', logs.concat(newLog));
      setResp(resp.concat({output:newLog, time: new Date().toISOString()}));
  };
  return (
    <div className={styles.container}>
      <Nav/>
      <div className={styles['col-container']}>
        <div className={styles.column}>
          <CodeEditor code={code} log={handleLog} defaultArgs={dataset} onEnd={handleEnd} />
        </div>
        <div className={styles.column}>
            <div className={styles.area}>
              <Console title="console output" outputs={logs}></Console>
            </div>
            <div className={styles.area}>
              <Console title="response output" outputs={resp}></Console>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
