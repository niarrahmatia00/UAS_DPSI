const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Koleksi = sequelize.define('Koleksi', {
  id_buku: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  judul: {
    type: DataTypes.STRING,
    allowNull: false
  },
  penulis: {
    type: DataTypes.STRING,
    allowNull: true
  },
  penerbit: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'Koleksi' // Menyediakan nama tabel yang eksplisit
});

module.exports = Koleksi;
