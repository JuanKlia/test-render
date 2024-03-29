import * as express from "express";

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json("Holaaaaaaaaaaaaaaaa");
});
app.get("/users", (req, res) => {
  res.json("Hola");
});

app.listen(port, () => {
  console.log(`Arranco Piolita! http://localhost:${port}`);
});
