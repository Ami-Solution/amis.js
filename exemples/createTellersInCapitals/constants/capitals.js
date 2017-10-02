const data = [
/*  {
    capital: 'China Beijing',
    lat: 39.55,
    lng: 116.2,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3122,
  },

  {
    capital: 'Bulgaria Sofia',
    lat: 42.45,
    lng: 23.2,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 2109,
  },

  {
    capital: 'Ethiopia Addis Ababa',
    lat: 9.02,
    lng: 38.42,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 326,
  },

  {
    capital: 'Burundi Bujumbura',
    lat: -3.16,
    lng: 29.18,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3116,
  },
  {
    capital: 'Andorra Andorra la Vella',
    lat: 42.31,
    lng: 1.32,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3110,
  },
  {
    capital: 'France Paris',
    lat: 48.5,
    lng: 2.2,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3148,
  },
  {
    capital: 'Democratic Republic of the Congo Kinshasa',
    lat: -4.2,
    lng: 15.15,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 382,
  },
  {
    capital: 'Austria Vienna',
    lat: 48.12,
    lng: 16.22,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 352,
  },
  {
    capital: 'Algeria Algiers',
    lat: 36.42,
    lng: 3.08,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3114,
  },
  {
    capital: 'Czech Republic Prague',
    lat: 50.05,
    lng: 14.22,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3172,
  },
  {
    capital: 'Denmark Copenhagen',
    lat: 55.41,
    lng: 12.34,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3180,
  },
  {
    capital: 'Kazakhstan Astana',
    lat: 51.1,
    lng: 71.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 349,
  },
  {
    capital: 'Croatia Zagreb',
    lat: 45.5,
    lng: 15.58,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 362,
  },
  {
    capital: 'Azerbaijan Baku',
    lat: 40.29,
    lng: 49.56,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 328,
  },
  {
    capital: 'Lao People s Democratic Republic Vientiane',
    lat: 17.58,
    lng: 102.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 375,
  },
  {
    capital: 'Hungary Budapest',
    lat: 47.29,
    lng: 19.05,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 384,
  },
  {
    capital: 'Bahrain Manama',
    lat: 26.1,
    lng: 50.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3166,
  },
  {
    capital: 'Georgia T bilisi',
    lat: 41.43,
    lng: 44.5,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3159,
  },
  {
    capital: 'Indonesia Jakarta',
    lat: -6.09,
    lng: 106.4,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 368,
  },
  {
    capital: 'Cambodia Phnom Penh',
    lat: 11.33,
    lng: 104.5,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3120,
  },
  {
    capital: 'Egypt Cairo',
    lat: 30.01,
    lng: 31.14,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3151,
  },
  {
    capital: 'Estonia Tallinn',
    lat: 59.22,
    lng: 24.48,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3126,
  },
  {
    capital: 'Central African Republic Bangui',
    lat: 4.23,
    lng: 18.35,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 383,
  },
  {
    capital: 'Bangladesh Dhaka',
    lat: 23.43,
    lng: 90.26,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 320,
  },
  {
    capital: 'Malawi Lilongwe',
    lat: -14,
    lng: 33.48,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3109,
  },
  {
    capital: 'Kuwait Kuwait',
    lat: 29.3,
    lng: 48,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3140,
  },
  {
    capital: 'Iraq Baghdad',
    lat: 33.2,
    lng: 44.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 399,
  },
  {
    capital: 'Armenia Yerevan',
    lat: 40.1,
    lng: 44.31,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 374,
  },
  {
    capital: 'India New Delhi',
    lat: 28.37,
    lng: 77.13,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3146,
  },
  */
  {
    capital: 'Moldova, Republic of Chisinau',
    lat: 47.02,
    lng: 28.5,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 295,
  },
  {
    capital: 'Fiji Suva',
    lat: -18.06,
    lng: 178.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3131,
  },
  {
    capital: 'Niger Niamey',
    lat: 13.27,
    lng: 2.06,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 21394,
  },
  {
    capital: 'Latvia Riga',
    lat: 56.53,
    lng: 24.08,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 2944,
  },
  {
    capital: 'Brunei Darussalam Bandar Seri Begawan',
    lat: 4.52,
    lng: 115,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3153,
  },
  {
    capital: 'Lebanon Beirut',
    lat: 33.53,
    lng: 35.31,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 22590,
  },
  {
    capital: 'Kyrgyzstan Bishkek',
    lat: 42.54,
    lng: 74.46,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 367,
  },
  {
    capital: 'Iran (Islamic Republic of) Tehran',
    lat: 35.44,
    lng: 51.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 335,
  },
  {
    capital: 'Libyan Arab Jamahiriya Tripoli',
    lat: 32.49,
    lng: 13.07,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 22603,
  },
  {
    capital: 'New Zealand Wellington',
    lat: -41.19,
    lng: 174.4,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 379,
  },
  {
    capital: 'Luxembourg Luxembourg',
    lat: 49.37,
    lng: 6.09,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3148,
  },
  {
    capital: 'Lesotho Maseru',
    lat: -29.18,
    lng: 27.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 387,
  },
  {
    capital: 'Macao, China Macau',
    lat: 22.12,
    lng: 113.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3122,
  },
  {
    capital: 'Gabon Libreville',
    lat: 0.25,
    lng: 9.26,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3177,
  },
  {
    capital: 'Kiribati Tarawa',
    lat: 1.3,
    lng: 173,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 343,
  },
  {
    capital: 'Equatorial Guinea Malabo',
    lat: 3.45,
    lng: 8.5,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3107,
  },
  {
    capital: 'Greece Athens',
    lat: 37.58,
    lng: 23.46,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3125,
  },
  {
    capital: 'Kenya Nairobi',
    lat: -1.17,
    lng: 36.48,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 33,
  },
  {
    capital: 'Finland Helsinki',
    lat: 60.15,
    lng: 25.03,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 21596,
  },
  {
    capital: 'Oman Masqat',
    lat: 23.37,
    lng: 58.36,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3129,
  },
  {
    capital: 'Philippines Manila',
    lat: 14.4,
    lng: 121,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 323,
  },
  {
    capital: 'Nepal Kathmandu',
    lat: 27.45,
    lng: 85.2,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3132,
  },
  {
    capital: 'Eritrea Asmara',
    lat: 15.19,
    lng: 38.55,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3117,
  },
  {
    capital: 'Netherlands Amsterdam  The Hague (seat of Government)',
    lat: 52.23,
    lng: 4.54,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3101,
  },
  {
    capital: 'Norfolk Island Kingston',
    lat: -45.2,
    lng: 168.4,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 379,
  },
  {
    capital: 'Sudan Khartoum',
    lat: 15.31,
    lng: 32.35,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 385,
  },
  {
    capital: 'Macedonia (Former Yugoslav Republic) Skopje',
    lat: 42.01,
    lng: 21.26,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 236,
  },
  {
    capital: 'Albania Tirane',
    lat: 41.18,
    lng: 19.49,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 388,
  },
  {
    capital: 'Belgium Brussels',
    lat: 50.51,
    lng: 4.21,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 21681,
  },
  {
    capital: 'Norway Oslo',
    lat: 59.55,
    lng: 10.45,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 31102,
  },
  {
    capital: 'Lithuania Vilnius',
    lat: 54.38,
    lng: 25.19,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 2380,
  },
  {
    capital: 'Sweden Stockholm',
    lat: 59.2,
    lng: 18.03,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 21595,
  },
  {
    capital: 'Madagascar Antananarivo',
    lat: -18.55,
    lng: 47.31,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 313,
  },
  {
    capital: 'Poland Warsaw',
    lat: 52.13,
    lng: 21,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 340,
  },
  {
    capital: 'Germany Berlin',
    lat: 52.3,
    lng: 13.25,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3135,
  },
  {
    capital: 'North Korea Pyongyang',
    lat: 39.09,
    lng: 125.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 336,
  },
  {
    capital: 'Sao Tome and Principe Sao Tome',
    lat: 0.1,
    lng: 6.39,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3121,
  },
  {
    capital: 'Switzerland Bern',
    lat: 46.57,
    lng: 7.28,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3173,
  },
  {
    capital: 'Togo Lome',
    lat: 6.09,
    lng: 1.2,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3115,
  },
  {
    capital: 'Nigeria Abuja',
    lat: 9.05,
    lng: 7.32,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 360,
  },
  {
    capital: 'New Caledonia Noumea',
    lat: -22.17,
    lng: 166.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3106,
  },
  {
    capital: 'Tunisia Tunis',
    lat: 36.5,
    lng: 10.11,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 396,
  },
  {
    capital: 'Liechtenstein Vaduz',
    lat: 47.08,
    lng: 9.31,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3173,
  },
  {
    capital: 'Turkey Ankara',
    lat: 39.57,
    lng: 32.54,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 329,
  },
  {
    capital: 'Palau Koror',
    lat: 7.2,
    lng: 134.2,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 317,
  },
  {
    capital: 'Saudi Arabia Riyadh',
    lat: 24.41,
    lng: 46.42,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 319,
  },
  {
    capital: 'Papua New Guinea Port Moresby',
    lat: -9.24,
    lng: 147,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 372,
  },
  {
    capital: 'Ukraine Kiev (Russia)',
    lat: 50.3,
    lng: 30.28,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3130,
  },
  {
    capital: 'Malaysia Kuala Lumpur',
    lat: 3.09,
    lng: 101.4,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3153,
  },
  {
    capital: 'Zambia Lusaka',
    lat: -15.28,
    lng: 28.16,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 366,
  },
  {
    capital: 'United Republic of Tanzania Dodoma',
    lat: -6.08,
    lng: 35.45,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 392,
  },
  {
    capital: 'Slovakia Bratislava',
    lat: 48.1,
    lng: 17.07,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 352,
  },
  {
    capital: 'Somalia Mogadishu',
    lat: 2.02,
    lng: 45.25,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3174,
  },
  {
    capital: 'Myanmar Yangon',
    lat: 16.45,
    lng: 96.2,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3142,
  },
  {
    capital: 'Turkmenistan Ashgabat',
    lat: 38,
    lng: 57.5,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 327,
  },
  {
    capital: 'South Africa Pretoria (administrative) / Cape Town (legislative) / Bloemfontein (judicial)',
    lat: -25.44,
    lng: 28.12,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 387,
  },
  {
    capital: 'Republic of Korea Seoul',
    lat: 37.31,
    lng: 126.5,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3102,
  },
  {
    capital: 'San Marino San Marino',
    lat: 43.55,
    lng: 12.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 333,
  },
  {
    capital: 'Uganda Kampala',
    lat: 0.2,
    lng: 32.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 2383,
  },
  {
    capital: 'Namibia Windhoek',
    lat: -22.35,
    lng: 17.04,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 32,
  },
  {
    capital: 'Yugoslavia Belgrade',
    lat: 44.5,
    lng: 20.37,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 341,
  },
  {
    capital: 'Syrian Arab Republic Damascus',
    lat: 33.3,
    lng: 36.18,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 2109253,
  },
  {
    capital: 'Zimbabwe Harare',
    lat: -17.43,
    lng: 31.02,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 394,
  },
  {
    capital: 'Tajikistan Dushanbe',
    lat: 38.33,
    lng: 68.48,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3164,
  },
  {
    capital: 'Uzbekistan Tashkent',
    lat: 41.2,
    lng: 69.1,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 351,
  },
  {
    capital: 'Rawanda Kigali',
    lat: -1.59,
    lng: 30.04,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 22347,
  },
  {
    capital: 'Russian Federation Moskva',
    lat: 55.45,
    lng: 37.35,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 330,
  },
  {
    capital: 'Romania Bucuresti',
    lat: 44.27,
    lng: 26.1,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 318,
  },
  {
    capital: 'Jordan Amman',
    lat: 31.57,
    lng: 35.52,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3134,
  },
  {
    capital: 'Australia Canberra',
    lat: -35.15,
    lng: 149,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3104,
  },
  {
    capital: 'Congo Brazzaville',
    lat: -4.09,
    lng: 15.12,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 382,
  },
  {
    capital: 'Botswana Gaborone',
    lat: -24.45,
    lng: 25.57,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3161,
  },
  {
    capital: 'Belarus Minsk',
    lat: 53.52,
    lng: 27.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 386,
  },
  {
    capital: 'Afghanistan Kabul',
    lat: 34.28,
    lng: 69.11,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3133,
  },
  {
    capital: 'Bhutan Thimphu',
    lat: 27.31,
    lng: 89.45,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 2599,
  },
  {
    capital: 'Bosnia and Herzegovina Sarajevo',
    lat: 43.52,
    lng: 18.26,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 390,
  },
  {
    capital: 'Cameroon Yaounde',
    lat: 3.5,
    lng: 11.35,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 397,
  },
  {
    capital: 'Cyprus Nicosia',
    lat: 35.1,
    lng: 33.25,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3168,
  },
  {
    capital: 'Viet Nam Hanoi',
    lat: 21.05,
    lng: 105.5,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3155,
  },
  {
    capital: 'Djibouti Djibouti',
    lat: 11.08,
    lng: 42.2,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 22515,
  },
  {
    capital: 'Thailand Bangkok',
    lat: 13.45,
    lng: 100.3,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 375,
  },
  {
    capital: 'Slovenia Ljubljana',
    lat: 46.04,
    lng: 14.33,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3170,
  },
  {
    capital: 'Swaziland Mbabane (administrative)',
    lat: -26.18,
    lng: 31.06,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 22599,
  },
  {
    capital: 'United Arab Emirates Abu Dhabi',
    lat: 24.28,
    lng: 54.22,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3118,
  },
  {
    capital: 'Qatar Doha',
    lat: 25.15,
    lng: 51.35,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3171,
  },
  {
    capital: 'Pakistan Islamabad',
    lat: 33.4,
    lng: 73.1,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3141,
  },
  {
    capital: 'Chad N Djamena',
    lat: 12.1,
    lng: 14.59,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 360,
  },
  {
    capital: 'Mozambique Maputo',
    lat: -25.58,
    lng: 32.32,
    rates: 500,
    avatar: 3,
    currency: 0,
    telegram: 'ishak_dether',
    amount: 0.011,
    name: 'Ishak',
    zone: 3112,
  },
];

export default data;
