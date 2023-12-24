# Twitter API Project

## Introduction
This project is a backend implementation for a Twitter-like application. It features functionalities like user registration, tweeting, following other users, and a personalized feed.

## Requirements
Please check the latest version installed:
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

## Installation Steps

1. **Clone the Repository**
   
   Use Git to clone the repository to your local machine:

   ```bash
   git clone https://github.com/priyans619/Twitter-backend.git
   
2. **Navigate to Project Directory**

   Change into the project directory:

   ```bash
   cd backend

3. **Install Dependecies**
    
    Install all packages using npm:

   ```bash
   npm i

4. **Set Up Environment Variable**

    Create a .env file in the root of project in (backend folder) and
    replace the monogoURL with your actual Database URL from atlas:

    ```bash
    PORT=3030
    mongoURL=mongodb+srv://<username>:<password>@<your-cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority

5. **Running the Server**
   
    Finally start the server by running:

    ```bash
    npm run dev

  The server will be running at `http://localhost:3030`.  


## Testing with Postman

This project includes a Postman collection inside root folder for testing the API endpoints.

   1. **Import the Collection in Postman**

- Download the `Twitter API.postman_collection.json` from this repository.
- Open Postman and import the collection by clicking on "Import" and selecting the downloaded file.
- Select a request from the collection to send and get response.