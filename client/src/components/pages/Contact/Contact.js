// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const styles = {
//   form: {
//     maxWidth: '600px',
//     margin: 'auto',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px'
//   },
//   formGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px'
//   },
//   errorMessage: {
//     color: 'red'
//   },
//   submitButton: {
//     backgroundColor: 'blue',
//     color: 'white',
//     padding: '10px',
//     borderRadius: '5px'
//   },
//   heading: {
//     textAlign: 'center',
//     fontSize: '2rem'
//   }
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     contactName: "",
//     contactEmail: "",
//     contactNumber: "",
//     contactMessage: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate form data
//     if (!formData.contactName || !formData.contactEmail || !formData.contactNumber || !formData.contactMessage) {
//       setErrorMessage("Please fill in all fields");
//       return;
//     }

//     // Validate email address
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.contactEmail)) {
//       setErrorMessage("Please enter a valid email address");
//       return;
//     }

//     // Validate phone number
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(formData.contactNumber)) {
//       setErrorMessage("Please enter a valid 10-digit phone number");
//       return;
//     }

//     try {
//       // Send form data to server
//       axios.post("http://localhost:3001/add-contact", formData);

//       // Clear form and error message
//       setFormData({
//         contactName: "",
//         contactEmail: "",
//         contactNumber: "",
//         contactMessage: "",
//       });
//       setErrorMessage("");

//       navigate("/")

//     } catch (error) {
//       console.error(error);
//       setErrorMessage("Failed to submit form. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <h1 style={styles.heading}>Contact Us</h1>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label htmlFor="contactName">Name:</label>
//           <input type="text" id="contactName" name="contactName" value={formData.contactName} onChange={handleInputChange} required placeholder="Enter your name" />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="contactEmail">Email:</label>
//           <input type="email" id="contactEmail" name="contactEmail" value={formData.contactEmail} onChange={handleInputChange} required placeholder="Enter your email" />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="contactNumber">Phone number:</label>
//           <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required placeholder="Enter your phone number" />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="contactMessage">Message:</label>
//           <textarea id="contactMessage" name="contactMessage" value={formData.contactMessage} onChange={handleInputChange} required placeholder="Enter your message"></textarea>
//         </div>
//         {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
//         <button type="submit" style={styles.submitButton}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { border } from "@mui/system";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, #5B247A, #1BC2D8)"
  },
  form: {
    maxWidth: "1000px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "30px", // increase the gap between form elements
    background: "white",
    padding: "100px", // add padding to form elements
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)"
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "1px solid black",
    width: "100%",
  },
  errorMessage: {
    color: "red"
  },
  submitButton: {
    backgroundColor: "blue",
    color: "white",
    padding: "15px",
    borderRadius: "5px"
  },
  heading: {
    textAlign: "center",
    fontSize: "3rem",
    color: "white",
    marginBottom: "2rem"
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactNumber: "",
    contactMessage: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data
    if (
      !formData.contactName ||
      !formData.contactEmail ||
      !formData.contactNumber ||
      !formData.contactMessage
    ) {
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
      axios.post("http://localhost:3001/add-contact", formData);

      // Clear form and error message
      setFormData({
        contactName: "",
        contactEmail: "",
        contactNumber: "",
        contactMessage: ""
      });
      setErrorMessage("");

      navigate("/");

    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to submit form. Please try again later.");
    }
  };




  const Contact = () => {
    const [formData, setFormData] = useState({
      // ...
      contactMessageRows: 1 // add a new state variable for the number of rows in the message box
    });
  
    // ...
  
    const handleInputChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        // adjust the number of rows based on the length of the text in the message box
        contactMessageRows: Math.ceil(event.target.value.length / 50) // change 50 to whatever value works best for your design
      });
    };
    return (
      <div style={styles.container}>
        {/* ... */}
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* ... */}
            <div style={styles.formGroup}>
              <label htmlFor="contactMessage">Message:</label>
              <textarea
                id="contactMessage"
                name="contactMessage"
                value={formData.contactMessage}
                onChange={handleInputChange}
                required
                placeholder="Enter your message"
                rows={formData.contactMessageRows} // set the number of rows based on the state variable
                cols="50" // set the width of the box
              />
            </div>
            {/* ... */}
          </form>
        </div>
      </div>
    );
  };


  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="contactName">Name:</label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="contactEmail">Email:</label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="contactNumber">Phone Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="contactMessage">Message:</label>
            <textarea
              id="contactMessage"
              name="contactMessage"
              value={formData.contactMessage}
              onChange={handleInputChange}
              required
              placeholder="Enter your message"
            />
          </div>
          {errorMessage && (
            <div style={styles.errorMessage}>{errorMessage}</div>
          )}
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
            };
            
            export default Contact;