const { stationaryService } = require("../services");

// create stationary
const createStationary = async (req, res) => {
  try {
    const reqBody = req.body;

    const stationary = await stationaryService.createStationary(reqBody);
    if (!stationary) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "stationary create successfully!",
      data: { stationary },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get stationary list
const getStationaryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Stationary_name: { $regex: search, $options: "i" } }
      ];
    }

    const getList = await stationaryService.getStationaryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get stationary list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get stationary details by id
const getStationaryDetails = async (req, res) => {
  try {
    const getDetails = await stationaryService.getStationaryById(req.params.stationaryId);
    if (!getDetails) {
      throw new Error("stationary not found!");
    }

    res.status(200).json({
      success: true,
      message: "stationary details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// stationary details update by id
const updateDetails = async (req, res) => {
  try {
    const stationaryId = req.params.stationaryId;
    const stationaryExists = await stationaryService.getStationaryById(stationaryId);
    if (!stationaryExists) {
      throw new Error("stationary not found!");
    }

    await stationaryService.updateDetails(stationaryId, req.body);

    res
      .status(200)
      .json({ success: true, message: "stationary details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete stationary
const deleteStationary = async (req, res) => {
  try {
    const stationaryId = req.params.stationaryId;
    const stationaryExists = await stationaryService.getStationaryById(stationaryId);
    if (!stationaryExists) {
      throw new Error("Stationary not found!");
    }

    await stationaryService.deleteStationary(stationaryId);

    res.status(200).json({
      success: true,
      message: "stationary delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createStationary,
  getStationaryList,
  getStationaryDetails,
  updateDetails,
  deleteStationary,
};
