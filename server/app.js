require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const {PORT, MONGO_URI} = process.env;

app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URI, { useNewUrlParser: true});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log('Succssfully connected to mongoDB'));

const roomsRouter = require('./routes/rooms');
app.use('/rooms', roomsRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));