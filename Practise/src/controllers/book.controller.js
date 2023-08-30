const { bookService } = require("../services");

// create product
const createBook = async (req, res) => {
  try {
    const reqBody = req.body;

    const book = await bookService.createBook(reqBody);
    if (!book) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "book create successfully!",
      data: { book },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createBook,
};
