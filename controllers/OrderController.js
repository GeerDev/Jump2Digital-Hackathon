const OrderV2 = require("../models/OrderV2.js");

const OrderController = {
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
  },
  async calculateTotals(req, res) {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).send("")
    }
  }
};

module.exports = OrderController;