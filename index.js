var $jPS5E$express = require("express");


const $80bd448eb6ea085b$var$app = $jPS5E$express();
const $80bd448eb6ea085b$var$port = 3000;
$80bd448eb6ea085b$var$app.get("/users", (req, res)=>{
    res.json("Hola");
});
$80bd448eb6ea085b$var$app.listen($80bd448eb6ea085b$var$port, ()=>{
    console.log(`Arranco Piolita! http://localhost:${$80bd448eb6ea085b$var$port}`);
});


//# sourceMappingURL=index.js.map
