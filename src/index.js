import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { FormBuilder, Components, Form } from "@formio/react";
import "./styles.css";
import components from "./Custom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card } from "react-bootstrap";
import SimpleCaptcha from "./Custom/SimpleCaptcha";
Components.setComponents(components);

function App() {

  const [jsonSchema, setSchema] = React.useState({});
  const onFormChange = (schema) => {
    console.log("jsonSchema", schema);

    setSchema({ ...schema, components: [...schema.components] });
  }
 

  const [captchaValue, setCaptchaValue] = React.useState(''); // State to store captcha value

  const onUpdateFormData = (schema) => {
    if (schema.components) { // Check if schema.components is an array
      // Update the form data with the captcha value
      const updatedData = { ...schema.data, captchaValue: captchaValue };
      setSchema({ ...schema, data: updatedData, components: [...schema.components] });
    } else {
      console.error("Schema components is not an array:", schema.components);
    }
  };
  const onUpdateCaptchaValue = (value) => {
    setCaptchaValue(value); // Update the captcha value in state
  };
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
                  SimpleCaptcha: true
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
