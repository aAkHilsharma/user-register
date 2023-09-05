# User Registration System

A simple web application for user registration using Node.js, Express, MongoDB, and HTML/CSS.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Features

- Allows users to register by providing their name and address.
- Validates user input for name and address.
- Stores user information in a MongoDB database.
- Provides feedback to users on successful registration or errors.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) database running locally or on a remote server.
- [Git](https://git-scm.com/) for version control (optional).

## Getting Started

1. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/yourusername/user-registration.git

2. Navigate to your repository:
   
   ```bash	
   cd user-registration
3. Install the project dependencies:

   ```bash   
   npm install
4. Set up your MongoDB database by creating a .env file in the project root directory and adding your database connection string:

   mongo_uri=your_database_connection_string_here   

Replace your_database_connection_string_here with your actual MongoDB connection string.

## Usage

1. Start the application:
   npm start
2. Fill in the registration form with your name and address and click the "Register" button.
3. You will receive feedback on the registration status.

To Check Deployed go to : https://register-user-4ge0.onrender.com/
