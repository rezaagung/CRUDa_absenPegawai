module.exports = (mongoose) => {
    const Absen = mongoose.model(
      "absen",
      mongoose.Schema({
        nip: String,
        nama: String,
        tanggal: Date,
        absen_masuk: Date,
        absen_pulang: Date,
        keterangan: String,
        Status: String

        
      }, {
        timestamps: true
      })
    );
     return Absen;
    };