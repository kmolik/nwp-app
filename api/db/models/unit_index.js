const Sequelize = require('sequelize')
var sequelize = require('../connection/connect')

const spis_jednostek = sequelize.define('spis_jednostek', {
  id:{
    field:'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  data_aktualizacji:{
    field: 'data_aktualizacji',
    type: Sequelize.STRING,
  },
  nazwa_jednostki:{
    field:'nazwa_jednostki',
    type: Sequelize.STRING,
  },
  adres_jednostki:{
    field:'adres_jednostki',
    type: Sequelize.STRING,
  },
  uwagi:{
    field:'uwagi',
    type: Sequelize.STRING,
  },
},
{
  tableName: 'spis_jednostek',
  timestamps: false
})

module.exports = spis_jednostek
