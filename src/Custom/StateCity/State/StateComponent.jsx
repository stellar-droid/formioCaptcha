import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Form } from "react-bootstrap";
import indianStatesOptions from "./indianStatesOptions.json";
import { Autocomplete, TextField } from "@mui/material";

const StateComponent = ({ onChange, setValue, component }) => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [selectedOption, setSelectedOption] = useState('');
  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  //   setSelectedOption('');
  // };

  // const handleSelect = (e) => {
  //   const selectedValue = e.target.value;
  //   setSelectedOption(selectedValue);
  //   setValue(selectedValue);
  //   onChange(selectedValue);
  // };

  // const filteredOptions = indianStatesOptions.filter(option =>
  //   option.label.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const selectedState = (e, value) => {
    if (value) {
      setValue(value.value);
      onChange(value.value);
    }
  };
  return (
    <>
      {/* <Form>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Control 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        <div className="custom-select">
          <Form.Select 
            onChange={handleSelect}
            multiple
            size={filteredOptions.length || 1}
            value={selectedOption}
          >
            {filteredOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </Form.Select>
        </div>
      </Form.Group>
    </Form> */}
      <Autocomplete
        // Need to increase the font size of the dropdown options

        id=""
        options={indianStatesOptions}
        // size="small | medium"
        getOptionLabel={(option) => option.label}
        style={{ }}
        renderInput={(params) => (
          <TextField
            {...params}
            
            sx={{ }}
            label=""
            placeholder="Select your state"
            variant="outlined"
          />
        )}
        onChange={selectedState}
        
        autoComplete={true}
        
      />
    </>
  );
};

export default StateComponent;
