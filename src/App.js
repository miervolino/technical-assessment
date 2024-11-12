// src/App.js
import React, { useState } from 'react';
import './App.css';
import ContactTable from './Components/ContactTable';
import AddContactForm from './Components/AddContactForm';

function App() {
  // Get the default token from environment variables
  const DEFAULT_BEARER_TOKEN = process.env.REACT_APP_DEFAULT_BEARER_TOKEN;

  // Hardcoding the API configuration for the HubSpot API endpoint, with bearer token fallback
  const [apiConfig, setApiConfig] = useState({
    apiUrl: '/crm/v3/objects/contacts', // HubSpot API endpoint
    bearerToken: DEFAULT_BEARER_TOKEN // Uses the default bearer token if no input provided
  });

  // Function to handle updating the bearer token
  const handleTokenChange = (event) => {
    setApiConfig({
      ...apiConfig,
      bearerToken: event.target.value || DEFAULT_BEARER_TOKEN // Update the token, or use the default if input is empty
    });
  };

  return (
    <div className="app-container">
      {/* Main header for the application */}
      <h1>HubSpot Contact Manager</h1>

      {/* Input field for the authorization token */}
      <div className="token-input-container">
        <label htmlFor="bearer-token">Enter your HubSpot API Bearer Token:</label>
        <input
          type="password"
          id="bearer-token"
          placeholder="Enter your HubSpot API Bearer Token"
          value={apiConfig.bearerToken}
          onChange={handleTokenChange}
          className="bearer-token-input" // Use the class for styling
        />
      </div>

      {/* Add contact form */}
      <AddContactForm apiConfig={apiConfig} />

      {/* Table displaying list of existing contacts */}
      <ContactTable apiConfig={apiConfig} />
    </div>
  );
}

export default App;
