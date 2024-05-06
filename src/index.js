const { engine } = require("express-handlebars");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

// Middleware parses form data POST parameters
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Middleware parses JSON responses
app.use(express.json());

//http logger
// app.use(morgan("combined"));

// template engine configuration
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
