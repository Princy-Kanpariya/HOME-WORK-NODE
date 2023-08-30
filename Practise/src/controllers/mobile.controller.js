const { mobileService } = require("../services");

// create mobile
const createMobile = async (req, res) => {
  try {
    const reqBody = req.body;

    const mobile = await mobileService.createMobile(reqBody);
    if (!mobile) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "mobile create successfully!",
      data: { mobile },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get mobile list
const getMobileList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Mobile_name: { $regex: search, $options: "i" } }
      ];
    }

    const getList = await mobileService.getMobileList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get mobile list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get mobile details by id
const getMobileDetails = async (req, res) => {
  try {
    const getDetails = await mobileService.getMobileById(req.params.mobileId);
    if (!getDetails) {
      throw new Error("mobile not found!");
    }

    res.status(200).json({
      success: true,
      message: "mobile details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// mobile details update by id
const updateDetails = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileexists = await mobileService.getMobileById(mobileId);
    if (!mobileexists) {
      throw new Error("mobile not found!");
    }

    await mobileService.updateDetails(mobileId, req.body);

    res
      .status(200)
      .json({ success: true, message: "mobile details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete mobile
const deleteMobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileexist = await mobileService.getMobileById(mobileId);
    if (!mobileexist) {
      throw new Error("mobile not found!");
    }

    await mobileService.deleteMobile(mobileId);

    res.status(200).json({
      success: true,
      message: "mobile delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMobile,
  getMobileList,
  getMobileDetails,
  updateDetails,
  deleteMobile,
};
