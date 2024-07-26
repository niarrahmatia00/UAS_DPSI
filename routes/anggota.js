const express = require('express');
const router = express.Router();
// Data anggota yang akan kita tampilkan
const anggota = [
 { id_anggota: 12, nama: 'lia', kelas: '11', alamat:'angggrek'  },
 { id_anggota: 14, nama: 'ira', kelas: '10', alamat:'ringroad'  },
 { id_anggota: 22, nama: 'ima', kelas: '9', alamat:'bantul'  },
];
// Rute GET untuk mendapatkan daftar anggota
router.get('/', function(req, res, next) {
 res.json(anggota);
});

router.post('/', function(req, res, next) {
    const newAnggota = {
        id_anggota: anggota.length + 1,
        nama: req.body.nama,
        kelas: req.body.kelas,
        alamat: req.body.alamat
    };
    res.json(newAnggota);
});

module.exports = router;