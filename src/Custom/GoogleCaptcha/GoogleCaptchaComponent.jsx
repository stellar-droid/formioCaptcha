import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const GoogleCaptchaComponent = ({onChange,setValue}) => {
  const onChanging = (value) =>{


  console.log("Successfully validated",value)
  
 }
    

  return (
   <>
    <ReCAPTCHA
    sitekey="6LcHEqApAAAAACwdXZjYyEcK3ChD2CYytUbBhRuW"
    onChange={(value)=>onChanging(value)}
    type="image"
  />
   
   </>
  );
};

export default GoogleCaptchaComponent;
