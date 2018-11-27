const express = require('express');
const bodyParser = require('body-parser');

// Initialized Express App
app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// API Routes
app.get('/', (req, res) => {
    res.send({ message: "Test 123..." })
});

// Port Listener
const port = process.env.PORT || 4000;
app.listen(port, () =>
    console.log(`Server connected successfully at port ${port}`)
);
