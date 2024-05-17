import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {Editor as ClassicEditor} from "./ckeditor5/build/ckeditor";
// import ClassicEditor from "ckeditor5-classic-plus";
// import { CKEditor} from 'eckeditor/ckeditor5-react'
// import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';



const CkEditorComponent = ({ onChange, setValue }) => {
  
  

  return (
    <>
      <div className="ckeditor">
        <CKEditor
        
          editor={ClassicEditor}
          data="  "
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
          onBlur={(event, editor) => {
            // console.log( 'Blur.', editor );
          }}
          onFocus={(event, editor) => {
            // console.log( 'Focus.', editor );
          }}
        />
      </div>
    </>
  );
};

export default CkEditorComponent;



// CKEditor Component edit Form settings section is not opening . 
