const Sequelize = require('sequelize')
var db = require('../connection/connect')

const dzialki = db.define('dzialki', {
  id:{
    field:'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  data_aktualizacji: {
    field: 'data_aktualizacji',
    type: Sequelize.STRING
  },
  numer_dzialki: {
    field: 'numer_dzialki',
    type: Sequelize.STRING
  },
  id_gus_rej_stat: {
    field: 'id_gus_rej_stat',
    type: Sequelize.STRING
  },
  wojewodztwo: {
    field: 'wojewodztwo',
    type: Sequelize.STRING
  },
  powiat: {
    field: 'powiat',
    type: Sequelize.STRING
  },
  gmina: {
    field: 'gmina',
    type: Sequelize.STRING
  },
  adres: {
    field: 'adres',
    type: Sequelize.STRING
  },
  obreb: {
    field: 'obreb',
    type: Sequelize.INTEGER
  },
  powierzchnia: {
    field: 'powierzchnia',
    type: Sequelize.STRING
  },
  udzial: {
    field: 'udzial',
    type: Sequelize.STRING
  },
  wartosc: {
    field: 'wartosc',
    type: Sequelize.STRING
  },
  data_wyceny: {
    field: 'data_wyceny',
    type: Sequelize.STRING
  },
  numer_kw: {
    field: 'numer_kw',
    type: Sequelize.STRING
  },
  wlasciciel: {
    field: 'wlasciciel',
    type: Sequelize.STRING
  },
  podstawa_nabycia_prawa_wlasnosci: {
    field: 'podstawa_nabycia_prawa_wlasnosci',
    type: Sequelize.STRING
  },
  forma_wladania: {
    field: 'forma_wladania',
    type: Sequelize.STRING
  },
  data_uplywu_wladania: {
    field: 'data_uplywu_wladania',
    type: Sequelize.STRING
  },
  rodzaj_uzytkowania: {
    field: 'rodzaj_uzytkowania',
    type: Sequelize.STRING
  },
  obecne_wykorzystanie: {
    field: 'obecne_wykorzystanie',
    type: Sequelize.STRING
  },
  zapisy_hipoteczne: {
    field: 'zapisy_hipoteczne',
    type: Sequelize.STRING
  },
  ciezary_i_ograniczenia: {
    field: 'ciezary_i_ograniczenia',
    type: Sequelize.STRING
  },
  wpis_do_rejestru_zabytkow: {
    field: 'wpis_do_rejestru_zabytkow',
    type: Sequelize.STRING
  },
  formy_ochrony_przyrody: {
    field: 'formy_ochrony_przyrody',
    type: Sequelize.STRING
  },
  oplaty_roczne: {
    field: 'oplaty_roczne',
    type: Sequelize.STRING
  },
  roczny_podatek_od_nieruchomosci: {
    field: 'roczny_podatek_od_nieruchomosci',
    type: Sequelize.STRING
  },
  data_utworzenia: {
    field: 'data_utworzenia',
    type: Sequelize.STRING
  },
  data_weryfikacji: {
    field: 'data_weryfikacji',
    type: Sequelize.STRING
  },
  uwagi: {
    field: 'uwagi',
    type: Sequelize.STRING
  },
  x_id_jedn: {
    field: 'x_id_jedn',
    type: Sequelize.STRING
  },
  podstawa_aktualizacji: {
    field: 'podstawa_aktualizacji',
    type: Sequelize.STRING
  },
  przekazywanie: {
    field: 'przekazywanie',
    type: Sequelize.STRING
  }
},
{
  tableName: 'dzialki',
  timestamps: false
})

module.exports = dzialki
