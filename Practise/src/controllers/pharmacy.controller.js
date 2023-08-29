const { pharmacyService } = require("../services");

// create pharmacy
const createPharmacy = async (req, res) => {
  try {
    const reqBody = req.body;

    const pharmacy = await pharmacyService.createPharmacy(reqBody);
    if (!pharmacy) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "pharmacy create successfully!",
      data: { pharmacy },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get pharmacy list
const getPharmacyList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Pharmacy_name: { $regex: search, $options: "i" } }
      ];
    }

    const getList = await pharmacyService.getPharmacyList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get pharmacy list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get pharmacy details by id
const getPharmacyDetails = async (req, res) => {
  try {
    const getDetails = await pharmacyService.getPharmacyById(req.params.pharmacyId);
    if (!getDetails) {
      throw new Error("pharmacy not found!");
    }

    res.status(200).json({
      success: true,
      message: "pharmacy details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// pharmacy details update by id
const updateDetails = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    const pharmacyExist = await pharmacyService.getPharmacyById(pharmacyId);
    if (!pharmacyExist) {
      throw new Error("pharmacy not found!");
    }

    await pharmacyService.updateDetails(pharmacyId, req.body);

    res
      .status(200)
      .json({ success: true, message: "pharmacy details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete pharmacy
const deletePharmacy = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    const pharmacyExist = await pharmacyService.getPharmacyById(pharmacyId);
    if (!pharmacyExist) {
      throw new Error("pharmacy not found!");
    }

    await pharmacyService.deletePharmacy(pharmacyId);

    res.status(200).json({
      success: true,
      message: "pharmacy delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  getPharmacyDetails,
  updateDetails,
  deletePharmacy,
};
