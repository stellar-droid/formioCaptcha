import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CkEditorComponent = ({ onChange, setValue }) => {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // handleEditorReady();
          // You can store the "editor" and use when it is needed.
          // console.log( 'Editor is ready to use!', editor );
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log("CkEditor Data ", data);
          onChange(data);
          setValue(data);
        }}
        // onBlur={ ( event, editor ) => {
        //     // console.log( 'Blur.', editor );
        // } }
        // onFocus={ ( event, editor ) => {
        //     // console.log( 'Focus.', editor );
        // } }
      />
    </>
  );
};

export default CkEditorComponent;
