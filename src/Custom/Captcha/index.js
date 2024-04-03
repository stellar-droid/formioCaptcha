import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "react-formio";
import settingsForm from "./Captcha.settingsForm";
import CaptchaComponent from "./CaptchaComponent";
/**
 * An example React component
 *
 * Replace this with your custom react component. It needs to have two things.
 * 1. The value should be stored is state as "value"
 * 2. When the value changes, call props.onChange(null, newValue);
 *
 * This component is very simple. When clicked, it will set its value to "Changed".
 */

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: props.value
//     };
//   }

//   setValue = () => {
//     this.setState(
//       prevState => ({ value: !prevState.value }),
//       () => this.props.onChange(null, this.state.value)
//     );
//   };

//   render() {
//     return (
//       <>
//       <label class="switch">
//         <input type="checkbox" onClick={this.setValue} />
//         <span class="slider round" />
//       </label>
//       <h1>Lokesh Wani</h1>
//       </>
//     );
//   }
// };

export default class Captcha extends ReactComponent {
  /**
   * This function tells the form builder about your component. It's name, icon and what group it should be in.
   *
   * @returns {{title: string, icon: string, group: string, documentation: string, weight: number, schema: *}}
   */
  static get builderInfo() {
    return {
      title: "Captcha",
      icon: "square",
      group: "Data",
      documentation: "",
      weight: -10,
      schema: Captcha.schema(),
      dataSrc: "boolean",
      data: {defaultValue: "false"},
    };
  }

  /**
   * This function is the default settings for the component. At a minimum you want to set the type to the registered
   * type of your component (i.e. when you call Components.setComponent('type', MyComponent) these types should match.
   *
   * @param sources
   * @returns {*}
   */
  static schema() {
    return ReactComponent.schema({
      type: "CaptchaCustomComp",
      label: "Captcha Component",
      
    });
  }

  /*
   * Defines the settingsForm when editing a component in the builder.
   */
  static editForm = settingsForm;

  /**
   * This function is called when the DIV has been rendered and added to the DOM. You can now instantiate the react component.
   *
   * @param DOMElement
   * #returns ReactInstance
   */
  attachReact(element) {
    return ReactDOM.render(
      <CaptchaComponent
        component={this.component} // These are the component settings if you want to use them to render the component.
        value={"lokesjh"} // The starting value of the component.
        onChange={console.log("Updated Value ",this.updateValue)} // The onChange event to call when the value changes.
      />,
      
      element
    );
  }

  /**
   * Automatically detach any react components.
   *
   * @param element
   */
  detachReact(element) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }
}
