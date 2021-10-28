const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

require("./routes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log('server is running on port: ' + PORT)
});