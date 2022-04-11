const express = require('express');
const Book = require('../db/models/Book');

/**
 * GET /books
 * Get all books
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();

        return res.json(books);
    } catch (err) {
        return res.status(500).json({
            message: 'Error getting books',
            error: err,
        });
    }
};

/**
 * GET /books/:id
 * Get a book by id
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);

        return res.json(book);
    } catch (err) {
        return res.status(500).json({
            message: 'Error getting book',
            error: err,
        });
    }
};

/**
 * POST /books
 * Create a new book
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createBook = async (req, res) => {
    const { title, description, year, quantity, imageURL } = req.body;

    try {
        const book = await Book.create({
            title,
            description,
            year,
            quantity,
            imageURL,
        });

        return res.json(book);
    } catch (err) {
        return res.status(500).json({
            message: 'Error creating book',
            error: err,
        });
    }
};

/**
 * DELETE /books/:id
 * Delete a book by id
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        await Book.findByIdAndDelete(id);

        return res.json({
            message: 'Book deleted',
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error deleting book',
            error: err,
        });
    }
};

/**
 * PUT /books/:id
 * Update a book by id
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const updateBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        return res.json(book);
    } catch (err) {
        return res.status(500).json({
            message: 'Error updating book',
            error: err,
        });
    }
};

/**
 * GET /books/data/seed
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const bookSeeder = async (req, res) => {
    try {
        await Book.insertMany([
            {
                title: 'The Shinobi Initiative',
                description:
                    'The reality-bending adventures of a clandestine service agency in the year 2166',
                year: 2014,
                quantity: 10,
                imageURL: 'https://imgur.com/LEqsHy5.jpeg',
            },
            {
                title: 'Tess the Wonder Dog',
                description: 'The tale of a dog who gets super powers',
                year: 2007,
                quantity: 3,
                imageURL: 'https://imgur.com/cEJmGKV.jpg',
            },
            {
                title: 'The Annals of Arathrae',
                description:
                    'This anthology tells the intertwined narratives of six fairy tales.',
                year: 2016,
                quantity: 8,
                imageURL: 'https://imgur.com/VGyUtrr.jpeg',
            },
            {
                title: 'W∀RP',
                description:
                    "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
                year: 2010,
                quantity: 4,
                imageURL: 'https://imgur.com/qYLKtPH.jpeg',
            },
        ]);

        return res.status(200).json({
            message: 'Books seeded',
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error seeding books',
            error: err,
        });
    }
};

const booksController = {
    getBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook,
    bookSeeder,
};

module.exports = booksController;
