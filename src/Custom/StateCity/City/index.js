import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "react-formio";
import settingsForm from "./City.settingsForm";
import CityComponent from "./CityComponent";
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

export default class City extends ReactComponent {
  constructor(component, options, data) {
    super(component, options, data);
  }




  /**
   * This function tells the form builder about your component. It's name, icon and what group it should be in.
   *
   * @returns {{title: string, icon: string, group: string, documentation: string, weight: number, schema: *}}
   */
  static get builderInfo() {
    return {
      title: "City",
      icon: "square",
      group: "advanced",
      documentation: "",
      weight: -10,
      schema: City.schema(),
      validation: {
        required: true
      }
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
      type: "CityCustomComp",
      label: "",


    });
  }


  setValue(value, flags = {}) {
    console.log("setValue", value);
    
    // this.getValue(value);
   
    return super.setValue(value, flags);
   
    // return value;
  }

  updateValue(value, flags = {}) {
    console.log("updateValue", value);
    return super.updateValue(value, flags);
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

    const { component } = this;
 
    // console.log("data",data);
    // const  {onUpdateValue}= this.props.onUpdateValue;  
    this.setValue = this.setValue.bind(this);
    this.updateValue = this.updateValue.bind(this);


    return ReactDOM.render(
      <CityComponent
        component={component} // These are the component settings if you want to use them to render the component.
        setValue={this.setValue} // The starting value of the component.
        onChange={this.updateValue} // The onChange event to call when the value changes.
        GlobalData={this.data}
        options={this.options}
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
