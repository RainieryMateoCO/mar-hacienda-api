const express = require("express")
const app = express()

app.use(express.static("public"));

app.get("/getData", function (req, res) {
  res.send("<h1>Get endpoint working</h1>");
  console.log("Get data");
});

app.post('/api/users', function (req, res) {
  return res.send('Already done');
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));