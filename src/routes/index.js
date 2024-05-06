const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);

 
//   app.get("/log", (req, res) => {
//     res.render("log");
//   });
}

module.exports = route;
