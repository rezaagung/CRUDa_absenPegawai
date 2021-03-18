# CRUDa_absenPegawai
Laporan Absen pegawai dengan menggunakan node.js dengan expres.js dan menggunakan database mongoDB 

Database
- nip
- nama
- tanggal
- absen_masuk
- absen_pulang 
- keterangan
  {hadir}
  {izin}
  (cuti)
- status

laporan : Laporan CRUD Absen Pegawai.docs

app/dokumentasi merupakan folder yang menyimpan screenshot alur project absen ini

Isi Project
- Create Absen 
- Edit Absen 
- Delete absen
- Laporan berapa kali hadir,cuti dan izin

Hasil Node.js dan Expess.js
http://localhost:8081

Hasil data absen
http://localhost:8081/API/absen

Hssil laporan
http://localhost:8081/API/absen/report/12345 "atau nip pegawai"

Cara menjalankannya 
- buka zip "node_modules"
- langsung saja 
  "node server.js"
