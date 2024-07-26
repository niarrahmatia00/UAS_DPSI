const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Anggota = sequelize.define('Anggota', {
  id_anggota: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kelas: {
    type: DataTypes.STRING,
    allowNull: true
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'Anggota' // Menyediakan nama tabel yang eksplisit
});

module.exports = Anggota;
