const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const app = express();


app.use(cors())
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));

app.use(express.json())

const cardsRouter = require('./routes/cards');
app.use('/cards', cardsRouter);

app.listen(3000, () => console.log('Server has started on port 3000'));
