import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { FormBuilder, Components, Form } from "@formio/react";
import "./styles.css";
import components from "./Custom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card } from "react-bootstrap";
import SimpleCaptcha from "./Custom/SimpleCaptcha";
import { Formio } from 'formiojs';

// Components.setComponents(components);

function App() {

  const [jsonSchema, setSchema] = React.useState({});

  const onFormChange = (schema) => {
    console.log("jsonSchema", schema);
    setSchema({ ...schema, components: [...schema.components] });
  }

    return (
    <>
      <div className="App">
        <FormBuilder
          form={{ display: "form" }}

          // onChange={schema => console.log(schema)}
          onChange={onFormChange}
          options={{
            builder: {
              basic: {
                components: {
                  // CaptchaCustomComp: true,
                  SimpleCaptcha: true,
                  GoogleCaptchaCustomComp: true
                }
              },
              advanced: false
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