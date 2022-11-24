const ProductV2 = require("../models/ProductV2.js");

const ProductController = {
  async create(req, res) {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).send("")
    }
  },
  async getAll(req, res) {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).send("")
    }
  }
};

module.exports = ProductController;