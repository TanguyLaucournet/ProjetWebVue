const express = require("express");
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const mongoAtlasUrl ="mongodb+srv://liviator:liviator@cluster0.h11ry.mongodb.net/Cluster0?retryWrites=true&w=majority"
const mongoUrl = 'mongodb://venom:venom@localhost/venom'
mongoose.connect(mongoAtlasUrl,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .then(() => app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
  }))
  .catch((error) => console.error('Connexion à MongoDB échouée !', error));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  console.log("Hello World");
});
const userRoutes = require("./api/user/route/user");
app.use("/user", userRoutes);
