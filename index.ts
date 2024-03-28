import * as express from "express";

const app = express();
const port = 3000;

app.get("/users", (req, res) => {
  res.json("Hola");
});

app.listen(port, () => {
  console.log(`Arranco Piolita! http://localhost:${port}`);
});
