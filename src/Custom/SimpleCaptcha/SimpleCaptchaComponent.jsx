import React, { useState } from "react";
import refresh from "../../refresh.gif";
import Button from 'react-bootstrap/Button';
const generateCaptcha = () => {
  // Generate random captcha text
  const captchaText = Math.random().toString(36).substr(2, 6).toUpperCase();
  return captchaText;
};

const drawCaptcha = (text) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 150;
  canvas.height = 50;
  // Draw background
  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Draw text
  ctx.font = "bold 30px Arial";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  return canvas.toDataURL(); // Return data URL of the canvas
};

const SimpleCaptcha = ({ setValue, onChange }) => {
  const [captchaText, setCaptchaText] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [captchaImage, setCaptchaImage] = useState(drawCaptcha(captchaText));

 

  const handleChange = (event) => {
    const inputText = event.target.value || "";
    setUserInput(inputText);
    console.log("Captcha TEXTs", inputText);
        onChange(inputText)
    // if (inputText.length === captchaText.length) {
    //   // Validate the user input
    //   if (inputText === captchaText) {
    //     console.log("Matched Captcha ", inputText);
    //     setMessage("Captcha matched!");
    //     setCaptchaText(generateCaptcha()); // Generate new captcha text
    //     setCaptchaImage(drawCaptcha(captchaText)); // Generate new captcha image
    //   } else {
    //     setMessage("Captcha does not match. Please try again.");
    //     setTimeout(() => handleRefresh(), 3000); // Refresh captcha
    //   }
    //   // Clear input field
    //   //   setUserInput("");
    // } else if (inputText.length < captchaText.length) {
    //   // If the user is backspacing, clear the error message
    //   setMessage("");
    // }
  };

  

  const handleRefresh = () => {
    const newCaptchaText = generateCaptcha(); // Generate new captcha text
    setCaptchaText(newCaptchaText); // Set new captcha text
    setCaptchaImage(drawCaptcha(newCaptchaText)); // Generate new captcha image using the new captcha text
    setMessage(""); // Clear message
    setUserInput(""); // Clear input field
  };

  const verifyCaptcha = () => {
    if (userInput.length === captchaText.length) {
      // Validate the user input
      if (userInput === captchaText) {
        onChange("True")
        console.log("Matched Captcha ", userInput);
        setMessage("Captcha matched!");
        setCaptchaText(generateCaptcha()); // Generate new captcha text
        setCaptchaImage(drawCaptcha(captchaText)); // Generate new captcha image
      } else {
        setMessage("Captcha does not match. Please try again.");
        setTimeout(() => handleRefresh(), 3000); // Refresh captcha
        setValue("")
      }
      // Clear input field
      //   setUserInput("");
    } else if (userInput.length < captchaText.length) {
      // If the user is backspacing, clear the error message
      setMessage("");
    }
  }

  return (
    <>
      <div>
        <img
          src={captchaImage}
          alt="Captcha"
          style={{
            borderWidth: "1px",
            borderStyle: "Solid",
            borderColor: "Black",
            backgroundColor: "#ede9ea",
            color: "#ede9ea",
            width: "150px",
            borderRadius: "5px",
          }}
        />
        <button
          style={{
            marginLeft: "5px",
            backgroundColor: "white",
            borderRadius: "5px",
            border: "1.5px solid black",
          }}
          onClick={handleRefresh}
        >
          <img
            src={refresh}
            alt="refresh"
            style={{ width: "20px", height: "17px" }}
          />
        </button>
      </div>
      <input
        type="text"
        required
        value={userInput}
        onChange={handleChange}
        placeholder="Enter Captcha"
        disabled={message === "Captcha matched!"}
        style={{
          marginTop: "10px",
          borderRadius: "5px",
          border: "1.5px solid black",
        }}
      />
      <Button variant="primary" disabled={message === "Captcha matched!"} onClick={verifyCaptcha}>Verify</Button>
      <p>{message}</p>
    </>
  );
};

export default SimpleCaptcha;
