const Product = require("../models/Product.js");
const axios = require("axios");

const DatabaseController = {
  async fillDatabaseOldData(req, res) {
    try {
        await New.deleteMany()
        let data = []
        let numberNews = 0
        for(numPages = 0; numPages < req.params.pages; numPages++){
            const response = await axios(`https://newsdata.io/api/1/news?apikey=pub_1337343c60f55622c60aae270dadb25ef7c7a&country=us&page=${numPages}`)
            const { results } = response.data
            data = [...data, results].flat()
        }
        data.forEach(async element => {
          const { description, image_url, content, pubDate:date, creator:author } = element
            if (description && image_url && content){
                numberNews++
                await New.create({...element, date, author, archived: false})
            }
        });
        res.status(201).send(`The news database has been created with ${numberNews} news`)
    } catch (error) {
        console.error(error);
        res.status(500).send("There was a problem creating the news collection")
    }
  },
  async fillDatabaseNewData(req, res) {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).send("")
    }
  }
};

module.exports = DatabaseController;