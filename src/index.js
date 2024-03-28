import React from "react";
import ReactDOM from "react-dom";
import { FormBuilder, Components,Form } from "@formio/react";
import "./styles.css";
import components from "./Custom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card } from "react-bootstrap";

Components.setComponents(components);

function App() {

  const [jsonSchema, setSchema] = React.useState({});
const onFormChange = (schema) => {
  console.log("jsonSchema",schema);
  setSchema(schema);
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
                  CaptchaCustomComp: true
                }
              },
              advanced: false
            }
          }}
        />
      </div>
      <Card className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As Rendered Form</Card.Title>
          <Form form={jsonSchema} />
        </Card.Body>
      </Card>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
