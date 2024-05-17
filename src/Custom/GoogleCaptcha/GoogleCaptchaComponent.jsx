import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const GoogleCaptchaComponent = ({ onChange, setValue, component }) => {
  const [isValidate, setIsValidate] = useState("False");
  const [errorMessage, setErrorMessage] = useState("");

  const onChanging = (value, e) => {
    console.log("Successfully validated");
    setIsValidate("True");
  };

  const handleScriptLoad = () => {
    // This function will be called when the reCAPTCHA script has been loaded successfully
    console.log("reCAPTCHA script has been loaded successfully");
    // You can proceed with initializing or using the reCAPTCHA component here
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
      {/* {errorMessage && <p>{errorMessage}</p>} */}
      <div style={{display:"flex",position:"relative",left:"100px",marginTop:"10px"}}>

      <ReCAPTCHA
        sitekey={siteKey}
        value="true"
        onChange={(e) => onChanging(e)}
        type="image"
        size="normal"
        theme="light"
        onErrored={handleCaptchaError}
        asyncScriptOnLoad={handleScriptLoad}
        onExpired={() => setIsValidate("False")}
        />
      {console.log("isValidate", isValidate)}
      {console.log("Compoonent data", component)}

      {setValue(isValidate)}
      {onChange(isValidate)}
        </div>
    </>
  );
};

export default GoogleCaptchaComponent;
