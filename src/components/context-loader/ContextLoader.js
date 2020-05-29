import React, { useState } from 'react';
import { consoleContext, codeContext } from '../../contexts';
const ContextLoader = ({ children }) => {
  const [logs, setLogs] = useState({
    logs: [],
    newLog: newLogLine =>
      setLogs(logs => ({ ...logs, logs: logs.logs.concat(newLogLine) })),
    cleanLogs: () => setLogs(logs => ({ ...logs, logs: [] }))
  });
  const [code, setCode] = useState('');
  const [dataset, setDataset] = useState([]);
  const [defaultArgs, setDefaultArgs] = useState([]);
  const [exercise, setExercise] = useState('');

  const codeState = {
    code,
    dataset,
    defaultArgs,
    exercise,
    updateCode: setCode,
    setDataset,
    setDefaultArgs,
    setExercise,
  };
  return (
    <consoleContext.Provider value={logs}>
      <codeContext.Provider value={codeState}>{children}</codeContext.Provider>
    </consoleContext.Provider>
  );
};

export default ContextLoader;
