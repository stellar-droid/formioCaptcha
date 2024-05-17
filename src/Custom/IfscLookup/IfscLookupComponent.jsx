import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

const IfscLookup = ({ setValue, onChanges }) => {
  const [showModal, setShowModal] = useState(false);
  const [bankData, setBankData] = useState();
  const [invalidIfscMessage, setInvalidIfscMessage] = useState("");
  const [ifsc_Code, setIfsc_Code] = useState("");

  const isValid_IFSC_Code = (ifsc_Code) => {
    if (ifsc_Code.length < 11) {
      if (ifsc_Code.length === 0) {
        setBankData("");
      }
      setInvalidIfscMessage("");
      return false;
    }
    // Regex to check valid ifsc_Code
    let regex = new RegExp(/^[A-Z]{4}0[A-Z0-9]{6}$/);

    // if ifsc_Code is empty return false
    if (ifsc_Code == null) {
      return "false";
    }

    // Return true if the ifsc_Code matched the ReGex
    if (regex.test(ifsc_Code) == true) {
      return "true";
    } else {
      setInvalidIfscMessage("Invalid IFSC Code Format");
    }
  };
  const bankDetails = async (ifsc_Code) => {
    console.log("ifsc_Code", ifsc_Code);
    try {
      const response = await axios.get(
        `https://ifsc.razorpay.com/${ifsc_Code}`
      );
      setBankData(response.data);
      console.log("Bank Details", response.data);
    } catch (error) {
      console.error("Error fetching bank details:", error);
      setInvalidIfscMessage("Invalid IFSC Code");
      setBankData("");
    }
  };

  console.log("bankData", bankData);
  const renderTableRows = (obj) => {
    return (
      obj &&
      Object.entries(obj).map(([key, value]) => (
        <tr key={key} style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>
            <strong>{key}</strong>
          </td>
          <td style={{ border: "1px solid black" }}>
            {value ? typeof value === "boolean" ? value.toString(): value : "Not available"}
          </td>
        </tr>
      ))
    );
  };
  return (
    <>
      <div>
        <input
          type="text"
          maxLength={11}
          placeholder="Enter IFSC code"
          onChange={(e) => {
            setValue(e.target.value);
            onChanges(e.target.value);
            isValid_IFSC_Code(e.target.value);
            setIfsc_Code(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            bankDetails(ifsc_Code);
          }}
          style={{ marginTop: "10px" }}
        >
          Get Details
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          position: " relative",
          left: "30%",
          marginTop: "10px",
        }}
      >
        {/* <p>Bank Name : {bankData?.BANK}</p> */}
        {/* <span>Bank Name : {bankData?.BANK}</span>
        <br />
        <span>Branch Name : {bankData?.BRANCH}</span>
        <br />
        <span>Branch IFSC : {bankData?.IFSC}</span>
        <br />
        <span>Branch CODE : {bankData?.BANKCODE}</span>
        <br />
        <span>Branch CITY : {bankData?.CITY}</span>
        <br />
        <span>Branch DISTRICT : {bankData?.DISTRICT}</span>
        <br />
        <span>Branch STATE : {bankData?.STATE}</span> */}
        {ifsc_Code.length > 0 && (
          <table>
            <tbody>{bankData && renderTableRows(bankData)}</tbody>
          </table>
        )}
        {invalidIfscMessage}
      </div>
    </>
  );
};

export default IfscLookup;
