# Read Me: Running Movie React App

This document provides instructions on how to run React app, including setting up the development environment and utilizing the necessary commands. Please follow the steps below to get the app up and running.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/): Node.js is required for running the React application and managing dependencies.
- [json-server](https://github.com/typicode/json-server): You'll need this for setting up a mock API server to simulate data fetching.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd <your-app-directory>
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Create an environment variable file by copying the example.env file:

   ```bash
   cp example.env .env
   ```

   Edit the .env file to configure environment-specific variables as needed. This file may contain things like API keys, database connections, or any other environment-specific settings.

## Running the React App

To start the React app, use the following command:

```bash
npm start
```

This command will launch the React development server, and app will be accessible at `http://localhost:3000` by default. Any changes you make to your code will automatically trigger hot-reloading, so you can see the results in real-time.

## Running the JSON Server (Mock API)

```bash
json-server --watch db/db.json --port 3001
```

- `db/db.json` is the JSON file where the mock data is stored. You can modify this file to simulate different data responses.
- The `--port` option specifies the port on which the JSON server will run. Make sure it does not conflict with the React development server.

The JSON server will create API endpoints based on the `db.json` file, and you can make API calls to `http://localhost:3001` by default.

## Additional Notes

- Ensure that the React app and JSON server are running concurrently for a seamless development experience.
- Always keep the dependencies up to date by running `npm update` and following any instructions or warnings provided.
- You may need to modify the React app code to use the appropriate API endpoints (e.g., `http://localhost:3001`) for data fetching during development.

With these instructions, you should be able to set up and run the React app along with the JSON server for data mocking. Happy coding!