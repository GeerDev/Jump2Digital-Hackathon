const express = require('express');
const app = express();
const cors = require('cors')

require('dotenv').config()

const { dbConnection } = require('./database/config')

const PORT = process.env.PORT || 3000
app.use(cors())

dbConnection()

// app.use('/api/products', require('./routes/products'));

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))