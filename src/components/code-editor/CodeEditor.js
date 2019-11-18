import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './prism.scss';
import styles from './styles.module.scss';
const CodeEditor = ({code})=>{
  const [currentCode, setCurrentCode] = useState(code);
  return <Editor
          value={currentCode}
          onValueChange={newCode => setCurrentCode(newCode)}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          className={styles.editor}
        />;
}

CodeEditor.propTypes = {
  code: PropTypes.string,
};

CodeEditor.defaultProps = {
    code: ''
};

export default CodeEditor;
