const express = require('express');
const router = express.Router();
// Data koleksi yang akan kita tampilkan
const koleksi = [
 { id_buku: 21, judul: 'maria', penulis: 'tere liye', penerbit:'gramedia'  },
 { id_buku: 22, judul: 'Rumah', penulis: 'tere liye', penerbit:'gramedia'  },
 { id_buku: 100, judul: 'Biologi', penulis: 'andi', penerbit:'gramedia'  },
];
// Rute GET untuk mendapatkan daftar koleksi
router.get('/', function(req, res, next) {
 res.json(koleksi);
});

router.post('/', function(req, res, next) {
    const newKoleksi = {
        id_buku: koleksi.length + 1,
        judul: req.body.judul,
        penulis: req.body.penulis,
        penerbit: req.body.penerbit
        };
    res.json(newKoleksi);
});

module.exports = router;