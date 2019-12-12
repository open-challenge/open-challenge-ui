import React, { useState } from 'react';
import { consoleContext, codeContext } from '../../contexts';
const ContextLoader = ({ children }) => {
  const [logs, setLogs] = useState({
    logs: [],
    newLog: newLogLine =>
      setLogs(logs => ({ ...logs, logs: logs.logs.concat(newLogLine) }))
  });
  const [code, setCode] = useState({
    code: '',
    updateCode: updatedCode => setCode(code => ({ ...code, code: updatedCode }))
  });
  return (
    <consoleContext.Provider value={logs}>
      <codeContext.Provider value={code}>{children}</codeContext.Provider>
    </consoleContext.Provider>
  );
};

export default ContextLoader;
