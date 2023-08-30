const {
    userService,
    categoryService,
    productService,
  } = require("../services");

  /** Get Fav's list */
  const getAllList = async (req, res) => {
    try {
      const userList = await userService.getUserList();
      const categoryList = await categoryService.getCategoryList();
      const productList = await productService.getProductList();

      res.status(200).json({
        success: true,
        message: "Get favslist list successfully!",
        data: { userList, categoryList, productList },
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  module.exports = { getAllList };