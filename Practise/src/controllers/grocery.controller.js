const { groceryService } = require("../services");

// create grocery
const createGrocery = async (req, res) => {
  try {
    const reqBody = req.body;

    const grocery = await groceryService.createGrocery(reqBody);
    if (!grocery) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "grocery create successfully!",
      data: { grocery },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get grocery list
const getGroceryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Grocery_name: { $regex: search, $options: "i" } }
      ];
    }

    const getList = await groceryService.getGroceryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get grocery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get grocery details by id
const getGroceryDetails = async (req, res) => {
  try {
    const getDetails = await groceryService.getgroceryById(req.params.groceryId);
    if (!getDetails) {
      throw new Error("grocery not found!");
    }

    res.status(200).json({
      success: true,
      message: "grocery details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// grocery details update by id
const updateDetails = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    const groceryExists = await groceryService.getGroceryById(groceryId);
    if (!groceryExists) {
      throw new Error("grocery not found!");
    }

    await groceryService.updateDetails(groceryId, req.body);

    res
      .status(200)
      .json({ success: true, message: "grocery details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete grocery
const deleteGrocery = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    const groceryExist = await groceryService.getGroceryById(groceryId);
    if (!groceryExist) {
      throw new Error("grocery not found!");
    }

    await groceryService.deleteGrocery(groceryId);

    res.status(200).json({
      success: true,
      message: "grocery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createGrocery,
  getGroceryList,
  getGroceryDetails,
  updateDetails,
  deleteGrocery,
};
