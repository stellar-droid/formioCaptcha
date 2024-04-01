import React, { useState } from "react";
import refresh from '../../refresh.gif'
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

const SimpleCaptcha = ({ onUpdateValue }) => {
  const [captchaText, setCaptchaText] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [captchaImage, setCaptchaImage] = useState(drawCaptcha(captchaText));

  const handleValueChange = (value) => {
    // onUpdateValue(value); // Pass the value to the parent component
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);
    console.log("Captcha TEXT", inputText);
    handleValueChange(inputText); // Pass the value to the parent component

    if (inputText.length === captchaText.length) {
      // Validate the user input
      if (inputText === captchaText) {
        setMessage("Captcha matched!");
        setCaptchaText(generateCaptcha()); // Generate new captcha text
        setCaptchaImage(drawCaptcha(captchaText)); // Generate new captcha image
      } else {
        setMessage("Captcha does not match. Please try again.");
        setTimeout(() => handleRefresh(), 3000); // Refresh captcha
      }
      // Clear input field
      //   setUserInput("");
    } else if (inputText.length < captchaText.length) {
      // If the user is backspacing, clear the error message
      setMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleRefresh = () => {
    const newCaptchaText = generateCaptcha(); // Generate new captcha text
    setCaptchaText(newCaptchaText); // Set new captcha text
    setCaptchaImage(drawCaptcha(newCaptchaText)); // Generate new captcha image using the new captcha text
    setMessage(""); // Clear message
    setUserInput(""); // Clear input field
  };

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

        
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter Captcha"
        disabled={message === "Captcha matched!"}
        style={{ marginTop: "10px",borderRadius:"5px",border:"1.5px solid black"}}
      />
      <button
          style={{ marginLeft: "5px", backgroundColor: "white",borderRadius:"5px",border:"1.5px solid black" }}
          onClick={handleRefresh}
        >
          <img src={refresh } alt="refresh" style={{width:"20px",height:"17px"}}/>
        </button>

      <p>{message}</p>
    </>
  );
};

export default SimpleCaptcha;
