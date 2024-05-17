import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { FormBuilder, Components, Form } from "@formio/react";
import "./styles.css";
import components from "./Custom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card } from "react-bootstrap";
// import SimpleCaptcha from "./Custom/SimpleCaptcha";
import { Formio } from 'formiojs';
// import 'bootstrap/dist/css/bootstrap.min.css';

// Components.setComponents(components);

function App() {

  const [jsonSchema, setSchema] = React.useState({});

  const onFormChange = (schema) => {
    setSchema({ ...schema, components: [...schema.components] });
    console.log("jsonSchema", schema);
  }

  return (
    <>
      <div className="App">
        <FormBuilder
          form={{display: 'form'}}

          // onChange={schema => console.log(schema)}
          onChange={onFormChange}
          options={{
            showSubmit: false,
            builder: {
              // basic: {
              //   components:
              //    {
              //     // CaptchaCustomComp: true,
              //     SimpleCaptcha: true,
              //     GoogleCaptchaCustomComp: true,
              //     CkEditorComp: true,
              //   }
              // },
              // advanced: {
              //   components: {
              //   SimpleCaptcha: true,
              //   GoogleCaptchaCustomComp: true,
              //   CkEditorComp: true,
              // }}
              // customBasic: {
              //   title: 'Custom  Components',
              //   default: true,
              //   weight: 0,
              //   components: {
              //     SimpleCaptcha: true,
              //     GoogleCaptchaCustomComp: true,
              //     CkEditorComp: true,
              //   }
              // }
            }
          }}
        >

        </FormBuilder>
      </div>
      <Card className="my-4">
        <Card.Title className="text-center" style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "20px" }}> Rendered Form</Card.Title>
        <Card.Body className="text-center" style={{ border: "2px dotted black", paddingTop: "5px" }}>
          <Form form={jsonSchema} /*onChange={onUpdateFormData}*/ showSubmit={false}>
            {/* <SimpleCaptcha onUpdateValue={onUpdateCaptchaValue} /> */}

          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);


Formio.use(
  {
    components: {
      ...components


    }
  }

);


