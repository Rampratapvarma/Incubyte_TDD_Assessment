require('dotenv').config();
const express = require('express');
const {add} = require('./src/calculator.js');
const app = express();


const PORT = process.env.PORT || 8080;


app.use(express.json());


app.post('/calculate', (req, res) => {
  const { numbers } = req.body;

  if (!numbers || typeof numbers !== 'string') {
    return res.status(400).json({ error: 'Invalid input, please provide a valid string of numbers' });
  }

  try {
    const result = add(numbers);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
