const express = require('express');
const app = express();
const cors = require('cors')

require('dotenv').config()

const { dbConnection } = require('./database/config')

const PORT = process.env.PORT || 3000
app.use(cors())

dbConnection()

app.use('/api/database', require('./routes/database'));
app.use('/api/products', require('./routes/products'));
app.use('/api/centers', require('./routes/centers'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))