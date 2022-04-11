const express = require('express');
const cors = require('cors');

/**
 * Create the BOOK API express app.
 *
 * @returns {express.Express}
 */
const createApp = () => {
    const app = express();

    // Enable CORS for ALL requests
    app.use(cors());

    app.use('/api/books', require('./routes/books'));

    return app;
};

module.exports = createApp;
