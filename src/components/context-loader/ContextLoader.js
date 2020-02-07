import React, { useState } from 'react';
import { consoleContext, codeContext } from '../../contexts';
const ContextLoader = ({ children }) => {
  const [logs, setLogs] = useState({
    logs: [],
    newLog: newLogLine =>
      setLogs(logs => ({ ...logs, logs: logs.logs.concat(newLogLine) })),
    cleanLogs: () => setLogs(logs => ({ ...logs, logs: [] }))
  });
  const [code, setCode] = useState({
    code: '',
    dataset: [],
    defaultArgs: [],
    updateCode: updatedCode =>
      setCode(code => ({ ...code, code: updatedCode })),
    setDataset: newDataset =>
      setCode(code => ({ ...code, dataset: newDataset })),
    setDefaultArgs: newDefaultArgs =>
      setCode(code => ({ ...code, defaultArgs: newDefaultArgs }))
  });
  return (
    <consoleContext.Provider value={logs}>
      <codeContext.Provider value={code}>{children}</codeContext.Provider>
    </consoleContext.Provider>
  );
};

export default ContextLoader;
