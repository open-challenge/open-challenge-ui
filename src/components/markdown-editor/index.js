import React, { useState, useContext } from 'react';
import * as Showdown from 'showdown';
import { codeContext } from '../../contexts';
import { NavArea, Button } from '../base';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markdown';
import 'prismjs/themes/prism-funky.css';

import '../code-editor/prism.scss';
import styles from './styles.module.scss';
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const MarkdownEditor = () => {
  const [previewEnabled, setPreviewEnabled] = useState(false);
  const [preview, setPreview] = useState('');
  const { exercise, setExercise } = useContext(codeContext);
  const handlePreview = () => {
    setPreviewEnabled(prev => !prev);
    const html = converter.makeHtml(exercise);
    setPreview(html);
  };

  return (
    <div className={styles.editor}>
      <NavArea title="Markdown Editor">
        <Button value="preview" onClick={handlePreview} />
      </NavArea>
      {!previewEnabled && (
        <Editor
          value={exercise}
          onValueChange={newCode => setExercise(newCode)}
          highlight={textCode =>
            highlight(textCode, languages.markdown, 'markdown')
          }
          padding={10}
          className={styles.editor}
        />
      )}
      {previewEnabled && (
        <div
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: preview }}
        />
      )}
    </div>
  );
};

export default MarkdownEditor;