const UserV2 = require("../models/UserV2.js");

const UserController = {
  async register(req, res) {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).send("")
    }
  },
  async login(req, res) {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).send("")
    }
  },
  async logout(req, res) {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).send("")
    }
  }
};

module.exports = UserController;