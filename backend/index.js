const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create a Mongoose schema
const responseSchema = new mongoose.Schema({
  permission: String,
  dateTime: String,
  dateType: String,
  decision: String // Store the decision (yes/no)
});

const Response = mongoose.model('Response', responseSchema);

// Route to handle permission response
app.post('/api/permission', async (req, res) => {
  const { permission } = req.body;
  const response = new Response({ permission });
  await response.save(); // This creates a new document
  res.status(200).send('Permission response received successfully');
});

// Route to handle decision response
app.post('/api/decision', async (req, res) => {
  const { decision } = req.body; // Get the decision from the request body
  const response = new Response({ decision }); // Create a new Response document with the decision
  await response.save(); // Save the decision in the database
  res.status(200).send('Decision response received successfully');
});

// Route to handle date and time selection
app.post('/api/date-time', async (req, res) => {
  const { dateTime } = req.body;
  await Response.updateOne({}, { dateTime }, { upsert: true });
  res.status(200).send('Date and time response received successfully');
});

// Route to handle type of date selection
app.post('/api/date-type', async (req, res) => {
  const { dateType } = req.body;
  await Response.updateOne({}, { dateType }, { upsert: true });
  res.status(200).send('Date type response received successfully');
});

// Route to handle final confirmation
app.get('/api/responses', async (req, res) => {
  const responses = await Response.findOne({});
  res.status(200).json(responses);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
