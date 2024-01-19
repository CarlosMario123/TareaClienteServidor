const { Router } = require("express");
const {verPizarra,editarPizarra} = require("../controllers/pizzarraController")
const {authMiddleware} = require("../middlewares/auth")
const pizarraRouter = Router();//para encapsular todas la rutas para pizzara

pizarraRouter.get("/",authMiddleware,verPizarra);
pizarraRouter.post("/",authMiddleware,editarPizarra);

module.exports = pizarraRouter;
