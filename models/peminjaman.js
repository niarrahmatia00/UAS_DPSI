const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Anggota = require('./anggota');
const Koleksi = require('./koleksi');

const Peminjaman = sequelize.define('Peminjaman', {
  id_peminjaman: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_anggota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Anggota,
      key: 'id_anggota'
    }
  },
  id_buku: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Koleksi,
      key: 'id_buku'
    }
  },
  statusPinjam: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'Peminjaman' // Menyediakan nama tabel yang eksplisit
});

module.exports = Peminjaman;
