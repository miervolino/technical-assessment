// src/components/ContactTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import './ContactTable.css';

const ContactTable = ({ apiConfig }) => {
  // State to store fetched contacts data
  const [contacts, setContacts] = useState([]);

  // Function to fetch contacts from HubSpot API
  const fetchContacts = () => {
    // Make a GET request to the HubSpot API to fetch contact data
    axios.get(apiConfig.apiUrl, {
      headers: {
        'Authorization': `Bearer ${apiConfig.bearerToken}`, // Authorization header with Bearer token
      },
    })
      .then((response) => {
        // Upon successful response, set the contacts in the state
        setContacts(response.data.results); // 'results' contains the list of contacts
      })
      .catch((error) => {
        // Log any error that occurs during the fetch
        console.error("Error fetching contacts:", error);
      });
  };

  // Fetch contacts data when the component mounts or when apiConfig changes
  useEffect(() => {
    if (apiConfig.bearerToken) { // Only fetch contacts if the bearer token is provided
      fetchContacts();
    }
  }, [apiConfig]); // Dependency array ensures it runs when apiConfig changes

  return (
    <div>

      {/* Button to manually refresh the table */}
      <button onClick={fetchContacts} className="refresh-button">Refresh Contacts</button>

      {/* Table displaying the list of contacts */}
      <table>
        <thead>
          <tr>
            {/* Table headers for contact properties */}
            <th>Contact ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Create Date</th>
            <th>Last Modified Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through each contact and create a table row for each */}
          {contacts.map(contact => (
            <tr key={contact.id}> {/* Use contact ID as the unique key */}
              <td>{contact.id}</td>
              <td>{contact.properties.firstname}</td>
              <td>{contact.properties.lastname}</td>
              <td>{contact.properties.email}</td>
              <td>{new Date(contact.properties.createdate).toLocaleDateString()}</td>
              <td>{new Date(contact.properties.lastmodifieddate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
