const Jadwal = [
  {
    jadwal_id: '001',
    bandara_kode_keberangkatan: 'HLP',
    bandara_kode_tujuan: 'CGK',
    maskapai_id: 'GA',
  },
  {
    jadwal_id: '002',
    bandara_kode_keberangkatan: 'HLP',
    bandara_kode_tujuan: 'CGK',
    maskapai_id: 'LA',
  },
  {
    jadwal_id: '003',
    bandara_kode_keberangkatan: 'HLP',
    bandara_kode_tujuan: 'CGK',
    maskapai_id: 'SA',
  },
  {
    jadwal_id: '004',
    bandara_kode_keberangkatan: 'JOG',
    bandara_kode_tujuan: 'SUB',
    maskapai_id: 'GA',
  },
  {
    jadwal_id: '005',
    bandara_kode_keberangkatan: 'JOG',
    bandara_kode_tujuan: 'SUB',
    maskapai_id: 'LA',
  },
  {
    jadwal_id: '006',
    bandara_kode_keberangkatan: 'JOG',
    bandara_kode_tujuan: 'SUB',
    maskapai_id: 'SA',
  },
];

const Maskapai = [
  {
    maskapai_id: 'GA',
    maskapai_nama: 'Garuda Airlines',
    maskapai_logo: require('../logomaskapai/Garuda.png'),
  },
  {
    maskapai_id: 'SA',
    maskapai_nama: 'Sriwijaya Airlines',
    maskapai_logo: require('../logomaskapai/Sriwijaya.png'),
  },
  {
    maskapai_id: 'LA',
    maskapai_nama: 'Lion Airlines',
    maskapai_logo: require('../logomaskapai/Lionair.png'),
  },
];

const Bandara = [
  {
    bandara_kode: 'CGK',
    bandara_nama: 'Soekarno Hatta',
  },
  {
    bandara_kode: 'HLP',
    bandara_nama: 'Halim Perdanakusuma',
  },
  {
    bandara_kode: 'JOG',
    bandara_nama: 'Adi Sucipto',
  },
  {
    bandara_kode: 'SUB',
    bandara_nama: 'Juanda',
  },
];

export {Bandara, Jadwal, Maskapai};
