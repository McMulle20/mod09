import dotenv from 'dotenv';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
dotenv.config();
console.log('API_BASE_URL:', process.env.API_BASE_URL);
console.log('API_KEY:', process.env.API_KEY);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Import the routes
import routes from './routes/index.js';

const app = express(); // Initialize an instance of Express.js
const PORT = process.env.PORT || 3001; // Specify on which port the Express.js server will run

// Serve static files of the entire client dist folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Implement middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Implement middleware to connect the routes
app.use(routes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

