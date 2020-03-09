import React, { useState, useEffect } from 'react';
import * as Showdown from 'showdown';
import { NavArea } from '../base';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markdown';

import '../code-editor/prism.scss';
import 'prismjs/themes/prism-funky.css';
import styles from './styles.module.scss';
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const MarkdownEditor = () => {
  const [value, setValue] = useState('**Hello world!!!**');
  console.log(Object.keys(languages));
  return (
    <div className={styles.editor}>
      <NavArea title="Text Editor" />
      <Editor
        value={value}
        onValueChange={newCode => setValue(newCode)}
        highlight={textCode =>
          highlight(textCode, languages.markdown, 'markdown')
        }
        padding={10}
        className={styles.editor}
      />
    </div>
  );
};

export default MarkdownEditor;
