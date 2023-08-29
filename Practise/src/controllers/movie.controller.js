const { movieService } = require("../services");

// create movie
const createMovie = async (req, res) => {
  try {
    const reqBody = req.body;

    const movie = await movieService.createMovie(reqBody);
    if (!movie) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "movie create successfully!",
      data: { movie },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get movie list
const getMovieList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Movie_name: { $regex: search, $options: "i" } }
      ];
    }

    const getList = await movieService.getMovieList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get movie list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get movie details by id
const getMovieDetails = async (req, res) => {
  try {
    const getDetails = await movieService.getMovieById(req.params.movieId);
    if (!getDetails) {
      throw new Error("movie not found!");
    }

    res.status(200).json({
      success: true,
      message: "movie details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// movie details update by id
const updateDetails = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movieExist = await movieService.getMovieById(movieId);
    if (!movieExist) {
      throw new Error("movie not found!");
    }

    await movieService.updateDetails(movieId, req.body);

    res
      .status(200)
      .json({ success: true, message: "movie details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete movie
const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movieExist = await movieService.getMovieById(movieId);
    if (!movieExist) {
      throw new Error("movie not found!");
    }

    await movieService.deleteMovie(movieId);

    res.status(200).json({
      success: true,
      message: "movie delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMovie,
  getMovieList,
  getMovieDetails,
  updateDetails,
  deleteMovie,
};
