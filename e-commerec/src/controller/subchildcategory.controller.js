const { subchildcategoryService } = require("../services");

// create subchildcategory
const createSubchildcategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const subchildcategory = await subchildcategoryService.createSubchildcategory(reqBody);
    if (!subchildcategory) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Subchildcategory create successfully!",
      data: { subchildcategory },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get subchildcategory list
const getSubchildcategoryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await subchildcategoryService.getSubchildcategoryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Subchildcategory list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get subchildcategory details by id
const getSubchildcategoryDetails = async (req, res) => {
  try {
    const getDetails = await subchildcategoryService.getSubchildcategoryById(req.params.subchildcategoryId);
    if (!getDetails) {
      throw new Error("Subchildcategory not found!");
    }

    res.status(200).json({
      success: true,
      message: "Subchildcategory details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Subchildcategory details update by id
const updateDetails = async (req, res) => {
  try {
    const subchildcategoryId = req.params.subchildcategoryId;
    const subchildcategoryExist = await subchildcategoryService.getSubchildcategoryById(subchildcategoryId);
    if (!subchildcategoryExist) {
      throw new Error("Subchildcategory not found!");
    }

    await subchildcategoryService.updateDetails(subchildcategoryId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Subchildcategory details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete Subchildcategory
const deleteSubchildcategory = async (req, res) => {
  try {
    const subchildcategoryId = req.params.subchildcategoryId;
    const subchildcategoryExist = await subchildcategoryService.getSubchildcategoryById(subchildcategoryId);
    if (!subchildcategoryExist) {
      throw new Error("Subchildcategory not found!");
    }

    await subchildcategoryService.deleteSubchildcategory(subchildcategoryId);

    res.status(200).json({
      success: true,
      message: "Subchildcategory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSubchildcategory,
  getSubchildcategoryList,
  getSubchildcategoryDetails,
  updateDetails,
  deleteSubchildcategory,
};

