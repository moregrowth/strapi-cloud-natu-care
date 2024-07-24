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
      init={{
        plugins: 'advlist image code emoticons link lists table',
        toolbar: 'undo redo | blocks | bold image code italic | bullist numlist | link emoticons',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
  );
};
TinyEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default TinyEditor;