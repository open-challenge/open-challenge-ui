import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './prism.scss';
import styles from './styles.module.scss';
import { cleanCode } from './util';
import { consoleContext, codeContext } from '../../contexts';
import { getChallenge, updateChallenge } from '../../services/challenge';

let timeout;
const CodeEditor = ({ id }) => {
  const { newLog } = useContext(consoleContext);
  const { code, defaultArgs, updateCode, setDefaultArgs } = useContext(
    codeContext
  );
  const [currentCode, setCurrentCode] = useState(code);
  const sendLog = (line, ...data) => {
    let baseLog = '';
    if (line) {
      baseLog = `line: ${line}`;
    }
    console.log(baseLog, data); //keep to log in broweser
    newLog({ line, output: data, response: !line });
  };
  const execCode = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const cleanedCode = cleanCode(currentCode, 'sendLog', defaultArgs);
      try {
        updateChallenge(id, { code: currentCode });
        const evalResp = eval(cleanedCode);
        newLog({ output: evalResp, time: new Date().toISOString() });
      } catch (e) {
        console.error(e);
      }
    }, 1000);
  };
  const onChange = newCode => {
    setCurrentCode(newCode);
  };
  useEffect(() => {
    execCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCode]);
  useEffect(() => {
    getChallenge(id).then(challenge => {
      updateCode(challenge.code);
      setCurrentCode(challenge.code);
      const datasets = challenge.datasets;
      setDefaultArgs(datasets.length > 0 ? datasets[0].dataset : null);
    });
  }, [id, setDefaultArgs, updateCode]);
  return (
    <div>
      <Editor
        value={currentCode}
        onValueChange={newCode => onChange(newCode)}
        highlight={textCode => highlight(textCode, languages.js)}
        padding={10}
        className={styles.editor}
      />
    </div>
  );
};

CodeEditor.propTypes = {
  code: PropTypes.string,
  log: PropTypes.func,
  onEnd: PropTypes.func,
  defaultArgs: PropTypes.array
};

CodeEditor.defaultProps = {
  code: '',
  log: () => {},
  onEnd: () => {},
  defaultArgs: []
};

export default CodeEditor;
