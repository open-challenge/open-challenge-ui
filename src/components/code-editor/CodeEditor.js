import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './prism.scss';
import styles from './styles.module.scss';
import {cleanCode} from './util';
let timeout;
const CodeEditor = ({code, log, defaultArgs, onEnd})=>{
  const [currentCode, setCurrentCode] = useState(code);
  const sendLog = (line, ...data)=> {
    let baseLog = '';
    if(line) {
      baseLog = `line: ${line}`;
    }
    console.log(baseLog, data);
    log({line, output: data, response: !line});
  }
  const execCode = () => {
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      const cleanedCode = cleanCode(currentCode, 'sendLog', defaultArgs);
      console.log(cleanedCode);
      try {
        let evalResp = eval(cleanedCode);
        onEnd(evalResp)
      } catch (e) {
        console.error(e);
      }
    },1000);
  }
  const onChange = (newCode)=>{
    setCurrentCode(newCode);
  }
  useEffect(()=>{
    execCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentCode])

  return <div>
    <Editor
           value={currentCode}
           onValueChange={newCode => onChange(newCode)}
           highlight={code => highlight(code, languages.js)}
           padding={10}
           className={styles.editor}
         />
  </div>;
}

CodeEditor.propTypes = {
  code: PropTypes.string,
  log: PropTypes.func,
  onEnd: PropTypes.func,
  defaultArgs: PropTypes.array,
};

CodeEditor.defaultProps = {
    code: '',
    log: ()=>{},
    onEnd: ()=>{},
    defaultArgs: []
};

export default CodeEditor;
