const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

app.use(cors());

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/data`);
        res.send(`
            <h1>Hello from the Express Frontend!</h1>
            <h2>Data from Backend: <mark>${response.data.message}</mark></h2>
        `);
    } catch (error) {
        res.status(500).send('<h1>Error: Could not connect to the backend.</h1>');
    }
});

app.listen(PORT, () => {
    console.log(`Frontend server running on http://localhost:${PORT}`);
});