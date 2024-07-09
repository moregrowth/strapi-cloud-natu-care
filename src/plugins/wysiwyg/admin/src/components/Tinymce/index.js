import React from "react";
import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";


const TinyEditor = ({ onChange, name, value }) => {
  return (
    <Editor
    //   apiKey="API KEY"
      tinymceScriptSrc={strapi.backendURL + '/tinymce/js/tinymce/tinymce.min.js'}
      value={value}
      tagName={name}
      onEditorChange={(editorContent) => {
        onChange({ target: { name, value: editorContent } });
      }}
      outputFormat="html"
      init={{}}
    />
  );
};
TinyEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default TinyEditor;