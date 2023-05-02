import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const styles = {
  form: {
    maxWidth: '600px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  errorMessage: {
    color: 'red'
  },
  submitButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px'
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem'
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactNumber: "",
    contactMessage: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data
    if (!formData.contactName || !formData.contactEmail || !formData.contactNumber || !formData.contactMessage) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contactEmail)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.contactNumber)) {
      setErrorMessage("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      // Send form data to server
      await axios.post("http://localhost:3001/add-contact", formData);

      // Clear form and error message
      setFormData({
        contactName: "",
        contactEmail: "",
        contactNumber: "",
        contactMessage: "",
      });
      setErrorMessage("");

      navigate("/");

    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div>
      <h1 style={styles.heading}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="contactName">Name:</label>
          <input type="text" id="contactName" name="contactName" value={formData.contactName} onChange={handleInputChange} required placeholder="Enter your name" />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="contactEmail">Email:</label>
          <input type="email" id="contactEmail" name="contactEmail" value={formData.contactEmail} onChange={handleInputChange} required placeholder="Enter your email" />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="contactNumber">Phone number:</label>
          <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required placeholder="Enter your phone number" />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="contactMessage">Message:</label>
          <textarea id="contactMessage" name="contactMessage" value={formData.contactMessage} onChange={handleInputChange} required placeholder="Enter your message"></textarea>
        </div>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;