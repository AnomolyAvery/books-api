const mongoose = require('mongoose');

/**
 * Connect to MongoDB.
 *
 * @returns {Promise<void>}
 */
const dbConnect = () => {
    return new Promise((res, rej) => {
        try {
            mongoose.connect(process.env.MONGODB_URI, (err) => {
                if (err) {
                    rej(err);
                }

                console.log('Connected to MongoDB');
                res();
            });
        } catch (err) {
            rej(err);
        }
    });
};

module.exports = dbConnect;
