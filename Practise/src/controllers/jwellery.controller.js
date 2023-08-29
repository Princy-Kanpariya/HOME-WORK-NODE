const { jwelleryService } = require("../services");

// create jwellery
const createJwellery = async (req, res) => {
  try {
    const reqBody = req.body;

    const jwellery = await jwelleryService.createJwellery(reqBody);
    if (!jwellery) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "jwellery create successfully!",
      data: { jwellery },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get jwellery list
const getJwelleryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Jwellery_name: { $regex: search, $options: "i" } }
      ];
    }

    const getList = await jwelleryService.getJwelleryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get jwellery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get jwellery details by id
const getJwelleryDetails = async (req, res) => {
  try {
    const getDetails = await jwelleryService.getJwelleryById(req.params.jwelleryId);
    if (!getDetails) {
      throw new Error("jwellery not found!");
    }

    res.status(200).json({
      success: true,
      message: "jwellery details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// jwellery details update by id
const updateDetails = async (req, res) => {
  try {
    const jwelleryId = req.params.jwelleryId;
    const jwelleryExist = await jwelleryService.getJwelleryById(jwelleryId);
    if (!jwelleryExist) {
      throw new Error("jwellery not found!");
    }

    await jwelleryService.updateDetails(jwelleryId, req.body);

    res
      .status(200)
      .json({ success: true, message: "jwellery details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete jwellery
const deleteJwellery = async (req, res) => {
  try {
    const jwelleryId = req.params.jwelleryId;
    const jwelleryExist = await jwelleryService.getJwelleryById(jwelleryId);
    if (!jwelleryExist) {
      throw new Error("jwellery not found!");
    }

    await jwelleryService.deleteJwellery(jwelleryId);

    res.status(200).json({
      success: true,
      message: "jwellery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createJwellery,
  getJwelleryList,
  getJwelleryDetails,
  updateDetails,
  deleteJwellery,
};
