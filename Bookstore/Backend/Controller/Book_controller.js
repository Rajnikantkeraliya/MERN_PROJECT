import Book from "../Model/Book_model.js";

export const getbook = async (req, res) => {
    try {
        const book = await Book.find()
        res.status(200).json(book)

    } catch (error) {
        res.status(400).json(error)
    }

}