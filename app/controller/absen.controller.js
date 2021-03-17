const db = require("../models");
const Absen = db.absen;
 
exports.create = (req, res) => {
 const absen = new Absen({
    nip: req.body.nip,
    nama: req.body.nama,
    tanggal: req.body.tanggal,
    absen_masuk: req.body.absen_masuk,
    absen_pulang: req.body.absen_pulang,
    keterangan: req.body.keterangan,
    status: req.body.status,
   
 });
 
 // Save Absen in the database
 absen
   .save(absen)
   .then((data) => {
     res.send(data);
   })
   .catch((err) => {
     res.status(500).send({
       message: err.message || "Some error occurred while creating the Absen.",
     });
   });
};
 
exports.findAll = (req, res) => {
    const nama = req.query.nama;
    var condition = nama
      ? { nama: { $regex: new RegExp(nama), $options: "i" } }
      : {};
    
    Absen.find(condition)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving.",
        });
      });
   };
   
   exports.reportByNip= (req, res) => {
    const nip = req.params.nip;
    
    Absen.find({nip:nip})
      .then((data) => {
        const report ={
            "hadir":data.filter(value => value.keterangan === "hadir").length,
            "izin":data.filter(value => value.keterangan === "izin").length,
            "cuti": data.filter(value => value.keterangan === "cuti").length
        }
        res.send(report);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving.",
        });
      });
    };

   exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Absen.findById(id)
      .then((data) => {
        if (!data) res.status(404).send({ message: "Not found with id " + id });
        else res.send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: "Error retrieving with id=" + id });
      });
   };
    
   exports.update = (req, res) => {
    const id = req.params.id;
    
    Absen.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Absen with id=${id}. Maybe Absen was not found!`,
          });
        } else res.send({ message: "Absen was updated successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Absen with id=" + id,
        });
      });
   };
   exports.delete = (req, res) => {
    const id = req.params.id;
    
    Absen.findByIdAndRemove(id)
    .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Absen with id=${id}. Maybe Absen was not found!`,
          });
        } else {
          res.send({
            message: "Absen was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Absen with id=" + id,
        });
      });
   };
    
   exports.deleteAll = (req, res) => {};
    
   exports.findAllPublished = (req, res) => {};
    
         