import React, { useState, useEffect } from "react";

import indianCityOption from "./indianCityOption.json";
import { Autocomplete, TextField } from "@mui/material";
import { Component } from "react";

const CityComponent = ({ onChange, setValue, component, GlobalData , options,cityOptions}) => {
  const [filteredOptions, setFilteredOptions] = useState([]);

  const selectedCity = (e, value) => {
    if (value) {
      setValue(value.value);
      onChange(value.value);

      console.log("Selected State", GlobalData.selectIndianState);
      console.log("Component", component);
      console.log("Options", options);
    }
  };


// Function to filter options based on selected state
const filterOptionsByState = (e) => {
  console.log("Selected States:", GlobalData);
  const selectedState = GlobalData.selectIndianState;
  if (selectedState) {
    const filteredCities = indianCityOption.filter(
      (option) => option.state === selectedState
    );
    cityOptions(filteredCities);
    setFilteredOptions(filteredCities);
  } else {
    // If no state is selected, show all options
    setFilteredOptions(indianCityOption);
  }
};

  return (
    <>
      <Autocomplete
        // Need to increase the font size of the dropdown options

        id=""
        key={(option) => option.city}
        options={filteredOptions}
        // size="small | medium"
        getOptionLabel={(option) => option.city}
        style={{}}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{}}
            label=""
            placeholder="Select your City"
            variant="outlined"
          />
        )}
        onChange={selectedCity}
        onOpen={filterOptionsByState} 
        autoComplete={true}
        // fontSize="200px"
      />
    </>
  );
};

export default CityComponent;
