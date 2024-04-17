import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const GoogleCaptchaComponent = ({ onChange, setValue, component }) => {
  const [isValidate, setIsValidate] = useState("False");
  const [errorMessage, setErrorMessage] = useState("");

  const onChanging = (value, e) => {
    console.log("Successfully validated");
    setIsValidate("True");
  };

  const handleCaptchaError = (error) => {
    // Handle errors that occur during captcha verification
    console.error("Captcha verification error:", error);
    setErrorMessage(
      "An error occurred while verifying the captcha. Please try again later."
    );
  };
  const siteKey = component.apiCustomKey ? component.apiCustomKey : "testkey";
  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <ReCAPTCHA
        sitekey={siteKey}
        value="true"
        onChange={(e) => onChanging(e)}
        type="image"
        theme="light"
        onErrored={handleCaptchaError}
        
      />
      {console.log("isValidate", isValidate)}
      {console.log("Compoonent data", component)}

      {setValue(isValidate)}
      {onChange(isValidate)}
    </>
  );
};

export default GoogleCaptchaComponent;
