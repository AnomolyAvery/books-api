require('dotenv').config();

const express = require('express');
const createApp = require('./app');
const dbConnect = require('./db');

async function main() {
    await dbConnect();

    const app = createApp();

    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
    });
}

main();
