const Sequalize = require('sequelize')
var sequelize = require('../connection/connect')

const buildings = sequelize.define('budynki_i_budowle', {
  id: {
    field:'id',
    type: Sequalize.INTEGER,
    primaryKey: true
  },
  data_aktualizacji: {
    field: 'data_aktualizacji',
    type: Sequalize.STRING
  },
  nazwa: {
    field: 'nazwa',
    type: Sequalize.STRING
  },
  typ: {
    field: 'typ',
    type: Sequalize.STRING
  },
  id_budynku: {
    field: 'id_budynku',
    type: Sequalize.STRING
  },
  rodzaj_obiektu: {
    field: 'rodzaj_obiektu',
    type: Sequalize.STRING
  },
  kod_funkcji_uzytkowej: {
    field: 'kod_funkcji_uzytkowej',
    type: Sequalize.INTEGER
  },
  rok_budowy: {
    field: 'rok_budowy',
    type: Sequalize.INTEGER
  },
  konstr_scian_zew: {
    field: 'konstr_scian_zew',
    type: Sequalize.STRING
  },
  numer_dzialki: {
    field: 'numer_dzialki',
    type: Sequalize.STRING
  },
  id_gus_rej_stat: {
    field: 'id_gus_rej_stat',
    type: Sequalize.STRING
  },
  wojewodztwo: {
    field: 'wojewodztwo',
    type: Sequalize.STRING
  },
  powiat: {
    field: 'powiat',
    type: Sequalize.STRING
  },
  gmina: {
    field: 'gmina',
    type: Sequalize.STRING
  },
  adres: {
    field: 'adres',
    type: Sequalize.STRING
  },
  kubatura: {
    field: 'kubatura',
    type: Sequalize.STRING
  },
  powierzchnia_uzytkowa: {
    field: 'powierzchnia_uzytkowa',
    type: Sequalize.STRING
  },
  powierzchnia_zabudowy: {
    field: 'powierzchnia_zabudowy',
    type: Sequalize.STRING
  },
  ilosc_kondygnacji: {
    field: 'ilosc_kondygnacji',
    type: Sequalize.STRING
  },
  wartosc: {
    field: 'wartosc',
    type: Sequalize.STRING
  },
  data_wyceny: {
    field: 'data_wyceny',
    type: Sequalize.STRING
  },
  numer_kw: {
    field: 'numer_kw',
    type: Sequalize.STRING
  },
  wlasciciel: {
    field: 'wlasciciel',
    type: Sequalize.STRING
  },
  podstawa_nabycia_prawa_wlasnosci: {
    field: 'podstawa_nabycia_prawa_wlasnosci',
    type: Sequalize.STRING
  },
  forma_wladania: {
    field: 'forma_wladania',
    type: Sequalize.STRING
  },
  obecne_wykorzystanie: {
    field: 'obecne_wykorzystanie',
    type: Sequalize.STRING
  },
  stan_techniczny: {
    field: 'stan_techniczny',
    type: Sequalize.STRING
  },
  zapisy_hipoteczne: {
    field: 'zapisy_hipoteczne',
    type: Sequalize.STRING
  },
  ciezary_i_ograniczenia: {
    field: 'ciezary_i_ograniczenia',
    type: Sequalize.STRING
  },
  wpis_do_rejestru_zabytkow: {
    field: 'wpis_do_rejestru_zabytkow',
    type: Sequalize.STRING
  },
  roczny_podatek_od_nieruchomosci: {
    field: 'roczny_podatek_od_nieruchomosci',
    type: Sequalize.STRING
  },
  data_utworzenia: {
    field: 'data_utworzenia',
    type: Sequalize.STRING
  },
  data_weryfikacji: {
    field: 'data_weryfikacji',
    type: Sequalize.STRING
  },
  uwagi: {
    field: 'uwagi',
    type: Sequalize.STRING
  },
  x_id_jedn: {
    field: 'x_id_jedn',
    type: Sequalize.INTEGER
  },
  podstawa_aktualizacji: {
    field: 'podstawa_aktualizacji',
    type: Sequalize.STRING
  }
},
{
  tableName: 'budynki_i_budowle',
  timestamps: false
})

module.exports = buildings
