// src/components/AddContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
//import './AddContactForm.css'; // Make sure to import the CSS for styling

const AddContactForm = ({ apiConfig }) => {
  // State to hold form input values (first name, last name, email)
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '' });

  // State to toggle the visibility of the form
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to handle input changes and update form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update specific field in formData
  };

  // Function to handle form submission and send a POST request to add a new contact
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the payload to match API requirements for creating a new contact
    const payload = {
      properties: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email
      }
    };

    // POST request to add a new contact using the apiConfig for endpoint and token
    axios.post(apiConfig.apiUrl, payload, {
        headers: {
          'Authorization': `Bearer ${apiConfig.bearerToken}`, // Pass the Bearer token from apiConfig
          'Content-Type': 'application/json', // Specify content type
        }
      })
      .then(response => {
        alert('Contact created successfully!');
        console.log('New contact:', response.data); // Log the created contact data
        setFormData({ firstname: '', lastname: '', email: '' }); // Reset form data after submit
        setIsFormVisible(false); // Hide form after submission
      })
      .catch(error => {
        console.error("Error creating contact:", error); // Log any errors during the request
      });
  };

  return (
    <div>
      {/* Button to toggle form visibility */}
      {!isFormVisible ? (
        <button onClick={() => setIsFormVisible(true)}>Create New Contact</button>
      ) : (
        <button onClick={() => setIsFormVisible(false)}>Hide Form</button>
      )}

      {/* Conditionally render the form when isFormVisible is true */}
      {isFormVisible && (
        <div className="form-tile">
          <h3>Create Contact</h3>
          <form onSubmit={handleSubmit}>
            {/* Form group for first name */}
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required // Ensure the field is required
              />
            </div>
            {/* Form group for last name */}
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            {/* Form group for email */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Add Contact</button> {/* Submit button */}
          </form>
        </div>
      )}
    </div>
  );
};

export default AddContactForm;
