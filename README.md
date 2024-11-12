# HubSpot Contact Manager

This project is a simple Contact Manager application for managing contacts in your HubSpot CRM account. It provides a form to add new contacts and displays existing contacts in a table with options to refresh and search.

## Features

- **Add New Contacts**: Fill out a form to add a new contact to HubSpot.
- **View Contacts**: Display a table of contacts retrieved from HubSpot.
- **Search and Refresh**: Refresh the list and filter by email.

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed on your machine (version 14 or higher).
- **Git**: You’ll need [Git](https://git-scm.com/) to clone the repository.

### Steps

1. **Clone the Repository**:

   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git

2. **Navigate to the Project Directory**:

   ```bash
   cd your-repository-name

3. **Install Dependencies**:

   Run the following command to install all necessary dependencies:
   ```bash
   npm install

4. **Set Up Environment Variables**:

   For security purposes, the API bearer token should be added through an input field in the app. However, you may provide a default bearer token in a .env file.

   To securely store your API token, you'll need to set up environment variables.

   - Create a file named `.env` in the root directory of your project (the same directory as `package.json`).
   - Add the following content to the `.env` file:

     ```
     REACT_APP_HUBSPOT_API_TOKEN=your_hubspot_api_token_here
     ```

   - Replace `your_hubspot_api_token_here` with your actual HubSpot API bearer token.

   This way, the bearer token will be securely stored in your environment, and it can be accessed by your React app during runtime.

   Note: Do not include sensitive information (like bearer tokens) directly in the code or commit it to the repository.

5. **Start the Application**:

   Start the development server by running:
   ```bash
   npm start
   ```

   This will launch the application in your default web browser at http://localhost:3000.

6. **Using the Application**:

   - **Enter Bearer Token**: Before using the app, enter your HubSpot API bearer token in the input field labeled "Enter Bearer Token." If no token is entered, a default token from the `.env` file will be used.
   - **Add New Contacts**: Use the "Create New Contact" form to add contacts to your HubSpot account.
   - **Refresh Contacts**: Click the "Refresh Contacts" button to retrieve the latest list of contacts.
   - **View Contacts**: The contact table will display the contacts fetched from your HubSpot account, showing essential information like `First Name`, `Last Name`, `Email`, `Creation Date`, and `Last Modified Date`.

   **Note**: Ensure that your HubSpot portal has been set up with the necessary permissions to allow API access and that your bearer token is correct.
