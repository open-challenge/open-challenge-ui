import React, { useState } from 'react';
import { consoleContext } from '../../contexts';
const ContextLoader = ({ children }) => {
  const [logs, setLogs] = useState({
    logs: [],
    newLog: newLogLine =>
      setLogs(logs => ({ ...logs, logs: logs.logs.concat(newLogLine) }))
  });
  return (
    <consoleContext.Provider value={logs}>{children}</consoleContext.Provider>
  );
};

export default ContextLoader;
