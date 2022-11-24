const ProductV2 = require("../models/ProductV2.js");

const ProductController = {
  async create(req, res) {
    try {
      const patata = await ProductV2.create(req.body)
      res.status(201).send({info: "Producto creado correctamente", patata})
    } catch (error) {
        console.error(error);
        res.status(500).send("Ha habido un problema a la hora de crear un producto")
    }
  },
  async getAll(req, res) {
    try {
      const patata = await ProductV2.find()
      res.status(200).send({info: "Aqui tienes todos tus productos", patata})
    } catch (error) {
        console.error(error);
        res.status(500).send("Ha habido un problema a la hora de traer todos tus productos")
    }
  }
};

module.exports = ProductController;