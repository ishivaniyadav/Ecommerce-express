// Import required modules
const exp = require('express'); // Express framework for building APIs
const app = exp();              // Create an Express app instance
const mongoose = require('mongoose'); // For MongoDB (not used in this snippet)
const cors = require('cors');         // Middleware to enable CORS

const path = require('path');
const productRoutes = require('./routes/productRoutes');

// Serve static files from views folder
app.use(exp.static(path.join(__dirname, 'views')));

// Use product routes
app.use('/products', productRoutes);

// Enable CORS for all routes (allows frontend apps to access this API)
app.use(cors());

// Parse incoming JSON requests (req.body will contain parsed JSON)
app.use(exp.json());

// Define a simple GET route at the root URL
app.get('/', (req, res) => {
  res.send('Ecommerce Express API is running');
});

// Set the port number for the server
const port = 5000;

// Start the server and listen on the specified port
app.listen(port, () => {
     // Log the server URL to the console
     console.log(`Server running at http://localhost:${port}`);
});