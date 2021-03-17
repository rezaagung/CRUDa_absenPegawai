module.exports = (app) => {
    const absens = require("../controller/absen.controller.js");
 
    var router = require("express").Router();
 
    router.post("/", absens.create);
    
    router.get("/", absens.findAll);
    
    router.get("/:id", absens.findOne);
    
    router.put("/:id", absens.update);
    
    router.delete("/:id", absens.delete);

    router.get("/report/:nip", absens.reportByNip);
    
    app.use("/api/absen", router);
   };
    
      