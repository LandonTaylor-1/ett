const express = require("express");
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");

let pesLeftRoutes = require('./routes/pesLeftRoute');
let pesRightRoutes = require('./routes/pesRightRoute');

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(pesLeftRoutes);
app.use(pesRightRoutes);

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://user-1:12345@aca-practice-jd9cz.mongodb.net/ett?retryWrites=true&w=majority', {useNewUrlParser: true});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
