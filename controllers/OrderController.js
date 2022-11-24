const OrderV2 = require("../models/OrderV2.js");

const OrderController = {
  async create(req, res) {
    try {
      const patata = await OrderV2.create(req.body)
      res.status(201).send({info: "Pedido creado correctamente", patata})
    } catch (error) {
        console.error(error);
        res.status(500).send("Hubo un problema a la hora de crear el pedido")
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