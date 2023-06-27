const express = require("express");

const app = express();
const PORT = 5000;
console.log("app: ", app);

//  route handlers
app.get("/", (req, res) => {
  res.send({ hi: "railway" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
