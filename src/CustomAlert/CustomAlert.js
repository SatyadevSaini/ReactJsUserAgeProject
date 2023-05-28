import React, { useState } from 'react';
import './CustomAlert.css'; // Custom CSS for styling the alert

function CustomAlert({ message, type }) {
  const [showAlert, setShowAlert] = useState(true);

  console.log(message);

  const handleAlertClose = () => {
    console.log("Value is there")
    setShowAlert(false);
  };

  if (!showAlert) {
    return null;
  }

  return (
    <div className={` custom-alert ${type} `} onClick={handleAlertClose}>
      <span className="custom-alert-icon">{getAlertIcon(type)}</span>
      <p className="custom-alert-message">{message}</p>
    </div>
  );
}

// Helper function to determine the alert icon based on the type
function getAlertIcon(type) {
  switch (type) {
    case 'success':
      return '✔️';
    case 'error':
      return '❌';
    default:
      return '';
  }
}

export default CustomAlert;