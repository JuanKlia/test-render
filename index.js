import express from "express";

const app = express();
console.log(app)
const port = 3000;

app.get("/users", (req, res) => {
  res.json("Hola");
});

app.listen(port, () => {
  console.log(`Arranco Piolita! http://localhost:${port}`);
});
