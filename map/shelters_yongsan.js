const shelters = [
  {
    "name": "삼광초등학교 운동장",
    "address": "서울특별시 용산구 두텁바위로1나길 19(후암동)",
    "lat": 37.546898,
    "lng": 126.97662,
    "avail": "3328",
    "pet": false,
    "open24": true
  },
  {
    "name": "늘푸른어린이공원",
    "address": "서울특별시 용산구 원효로41가길 14-19 (원효로3가)",
    "lat": 37.534837,
    "lng": 126.956702,
    "avail": "720",
    "pet": true,
    "open24": false
  },
  {
    "name": "용산초등학교 운동장",
    "address": "서울특별시 용산구 한강대로57길 5(한강로2가)",
    "lat": 37.535331,
    "lng": 126.972366,
    "avail": "1450",
    "pet": true,
    "open24": true
  },
  {
    "name": "서빙고초등학교 운동장",
    "address": "서울특별시 용산구 서빙고로51길 14(서빙고동)",
    "lat": 37.521266,
    "lng": 126.991524,
    "avail": "5653",
    "pet": false,
    "open24": false
  },
  {
    "name": "금양초등학교 운동장",
    "address": "서울특별시 용산구 효창원로 137(효창동)",
    "lat": 37.540353,
    "lng": 126.961213,
    "avail": "2622",
    "pet": true,
    "open24": false
  },
  {
    "name": "이태원초등학교 운동장",
    "address": "서울특별시 용산구 이태원동 406",
    "lat": 37.5357,
    "lng": 126.987901,
    "avail": "1408",
    "pet": false,
    "open24": false
  },
  {
    "name": "남정초등학교 운동장",
    "address": "서울특별시 용산구 원효로64길 17-10 (원효로2가)",
    "lat": 37.535962,
    "lng": 126.965065,
    "avail": "2767",
    "pet": true,
    "open24": false
  },
  {
    "name": "새꿈어린이공원",
    "address": "서울특별시 용산구 동자동 8-5",
    "lat": 37.552586,
    "lng": 126.974147,
    "avail": "1594",
    "pet": false,
    "open24": false
  },
  {
    "name": "백범김구기념관",
    "address": "서울특별시 용산구 임정로 26(효창동)",
    "lat": 37.544739,
    "lng": 126.959789,
    "avail": "1492",
    "pet": true,
    "open24": false
  },
  {
    "name": "솔밭어린이공원",
    "address": "서울특별시 용산구 한강로1가 30-3",
    "lat": 37.537302,
    "lng": 126.973648,
    "avail": "2090",
    "pet": false,
    "open24": false
  },
  {
    "name": "이태원마을숲 소공원",
    "address": "서울특별시 용산구 이태원동 260-87",
    "lat": 37.541264,
    "lng": 126.991538,
    "avail": "661",
    "pet": false,
    "open24": true
  },
  {
    "name": "용강중학교 운동장",
    "address": "서울특별시 용산구 이촌로65가길 91(이촌동)",
    "lat": 37.520845,
    "lng": 126.976522,
    "avail": "3633",
    "pet": true,
    "open24": true
  },
  {
    "name": "보광초등학교 운동장",
    "address": "서울특별시 용산구 우사단로 20(이태원동)",
    "lat": 37.532108,
    "lng": 126.996608,
    "avail": "3197",
    "pet": true,
    "open24": false
  },
  {
    "name": "소월길 어린이공원",
    "address": "서울특별시 용산구 이태원동 511",
    "lat": 37.543543,
    "lng": 126.989301,
    "avail": "570",
    "pet": true,
    "open24": true
  },
  {
    "name": "한남초등학교 운동장",
    "address": "서울특별시 용산구 한남대로 112(한남동)",
    "lat": 37.539073,
    "lng": 127.004929,
    "avail": "9810",
    "pet": false,
    "open24": true
  },
  {
    "name": "응봉근린공원(매봉산공원)",
    "address": "서울특별시 용산구 한남동 산8-1",
    "lat": 37.54439,
    "lng": 127.004871,
    "avail": "4141",
    "pet": true,
    "open24": true
  },
  {
    "name": "한남어린이공원",
    "address": "서울특별시 용산구 한남동 15-5",
    "lat": 37.537241,
    "lng": 127.013859,
    "avail": "490",
    "pet": true,
    "open24": true
  },
  {
    "name": "이촌한우리공원",
    "address": "서울특별시 용산구 이촌동 437",
    "lat": 37.517624,
    "lng": 126.981345,
    "avail": "4325",
    "pet": true,
    "open24": true
  },
  {
    "name": "보성여자중고등학교 운동장",
    "address": "서울특별시 용산구 신흥로3가길 66(용산동2가)",
    "lat": 37.542774,
    "lng": 126.984484,
    "avail": "2101",
    "pet": true,
    "open24": true
  },
  {
    "name": "청파초등학교 운동장",
    "address": "서울특별시 용산구 효창원로 228(청파동2가)",
    "lat": 37.547378,
    "lng": 126.96412,
    "avail": "4220",
    "pet": true,
    "open24": true
  },
  {
    "name": "중경고등학교 운동장",
    "address": "서울특별시 용산구 이촌로84길 34(이촌동)",
    "lat": 37.517398,
    "lng": 126.975529,
    "avail": "4518",
    "pet": false,
    "open24": false
  },
  {
    "name": "원효초등학교 운동장",
    "address": "서울특별시 용산구 효창원로13길 38(산천동)",
    "lat": 37.536039,
    "lng": 126.951933,
    "avail": "1445",
    "pet": false,
    "open24": false
  },
  {
    "name": "효창운동장",
    "address": "서울특별시 용산구 효창원로 177-15 (효창동)",
    "lat": 37.543393,
    "lng": 126.961409,
    "avail": "11722",
    "pet": true,
    "open24": true
  },
  {
    "name": "용산철도고등학교 운동장",
    "address": "서울특별시 용산구 서빙고로 24(한강로3가)",
    "lat": 37.524244,
    "lng": 126.966548,
    "avail": "4999",
    "pet": true,
    "open24": false
  },
  {
    "name": "라틴아메리카공원",
    "address": "서울특별시 용산구 이태원동 258-467",
    "lat": 37.540799,
    "lng": 126.997139,
    "avail": "635",
    "pet": true,
    "open24": false
  },
  {
    "name": "독서당어린이공원",
    "address": "서울특별시 용산구 한남동 1-32",
    "lat": 37.534492,
    "lng": 127.012463,
    "avail": "702",
    "pet": false,
    "open24": false
  },
  {
    "name": "후암초등학교 운동장",
    "address": "서울특별시 용산구 두텁바위로 140(후암동)",
    "lat": 37.551276,
    "lng": 126.982276,
    "avail": "2350",
    "pet": false,
    "open24": true
  },
  {
    "name": "선린인터넷고등학교 운동장",
    "address": "서울특별시 용산구 원효로97길 33-4 (청파동3가)",
    "lat": 37.542297,
    "lng": 126.966903,
    "avail": "5670",
    "pet": false,
    "open24": true
  },
  {
    "name": "성심여자중고등학교 운동장",
    "address": "서울특별시 용산구 원효로19길 49(원효로4가)",
    "lat": 37.533871,
    "lng": 126.954562,
    "avail": "2006",
    "pet": true,
    "open24": true
  },
  {
    "name": "이태원 어린이공원",
    "address": "서울특별시 용산구 회나무로6길 11-8 (이태원동)",
    "lat": 37.538478,
    "lng": 126.989272,
    "avail": "2692",
    "pet": true,
    "open24": true
  },
  {
    "name": "한강중학교 운동장",
    "address": "서울특별시 용산구 녹사평대로 73(서빙고동)",
    "lat": 37.524248,
    "lng": 126.991611,
    "avail": "6867",
    "pet": false,
    "open24": false
  },
  {
    "name": "문화원 정자마당",
    "address": "서울특별시 용산구 효창원로8길 28(원효로4가)",
    "lat": 37.53358,
    "lng": 126.951954,
    "avail": "621",
    "pet": false,
    "open24": false
  },
  {
    "name": "산천동 마을마당",
    "address": "서울특별시 용산구 산천동 200",
    "lat": 37.535544,
    "lng": 126.95305,
    "avail": "667",
    "pet": false,
    "open24": false
  },
  {
    "name": "꿈나무공원",
    "address": "서울특별시 용산구 이촌로 219(이촌동)",
    "lat": 37.520875,
    "lng": 126.971849,
    "avail": "1413",
    "pet": false,
    "open24": false
  },
  {
    "name": "한남동공영주차장",
    "address": "서울특별시 용산구 이태원로 224-19 (한남동)",
    "lat": 37.534831,
    "lng": 127.000242,
    "avail": "1051",
    "pet": false,
    "open24": true
  },
  {
    "name": "기와터공원",
    "address": "서울특별시 용산구 한강로3가 63-388",
    "lat": 37.525919,
    "lng": 126.969341,
    "avail": "2225",
    "pet": true,
    "open24": false
  },
  {
    "name": "달맞이공원",
    "address": "서울특별시 용산구 보광동 231-17",
    "lat": 37.527975,
    "lng": 126.998022,
    "avail": "952",
    "pet": true,
    "open24": false
  },
  {
    "name": "선린중학교 운동장 ",
    "address": "서울특별시 용산구 원효로97길 33-4 (청파동3가)",
    "lat": 37.542271,
    "lng": 126.965597,
    "avail": "4170",
    "pet": false,
    "open24": false
  },
  {
    "name": "용산고등학교 운동장",
    "address": "서울특별시 용산구 두텁바위로 60(용산동2가)",
    "lat": 37.544968,
    "lng": 126.980471,
    "avail": "6430",
    "pet": false,
    "open24": true
  },
  {
    "name": "청파선린공원",
    "address": "서울특별시 용산구 청파동3가 118-56",
    "lat": 37.543522,
    "lng": 126.96624,
    "avail": "1940",
    "pet": true,
    "open24": true
  },
  {
    "name": "용암초등학교 운동장",
    "address": "서울특별시 용산구 녹사평대로60길 39(용산동2가)",
    "lat": 37.544895,
    "lng": 126.98928,
    "avail": "3141",
    "pet": false,
    "open24": false
  },
  {
    "name": "두텁바위공원",
    "address": "서울특별시 용산구 동자동 50",
    "lat": 37.552133,
    "lng": 126.973149,
    "avail": "2623",
    "pet": true,
    "open24": false
  },
  {
    "name": "새나라어린이공원",
    "address": "서울특별시 용산구 후암동 190-1",
    "lat": 37.547891,
    "lng": 126.976448,
    "avail": "1735",
    "pet": true,
    "open24": true
  },
  {
    "name": "청파문화공원",
    "address": "서울특별시 용산구 서계동 226-3",
    "lat": 37.553615,
    "lng": 126.968206,
    "avail": "1281",
    "pet": true,
    "open24": true
  },
  {
    "name": "돌모루어린이공원",
    "address": "서울특별시 용산구 원효로97길 50(청파동3가)",
    "lat": 37.542917,
    "lng": 126.968502,
    "avail": "1900",
    "pet": true,
    "open24": true
  },
  {
    "name": "용산구청 광장",
    "address": "서울특별시 용산구 녹사평대로 150(이태원동)",
    "lat": 37.532782,
    "lng": 126.989793,
    "avail": "2300",
    "pet": true,
    "open24": false
  },
  {
    "name": "신계역사공원",
    "address": "서울특별시 용산구 청파로 139-25 (신계동)",
    "lat": 37.535058,
    "lng": 126.966283,
    "avail": "15000",
    "pet": false,
    "open24": false
  },
  {
    "name": "서빙고근린공원",
    "address": "서울특별시 용산구 용산동5가 24-2",
    "lat": 37.524709,
    "lng": 126.97153,
    "avail": "11880",
    "pet": false,
    "open24": true
  },
  {
    "name": "성촌공원",
    "address": "서울특별시 용산구 이촌로 124(이촌동)",
    "lat": 37.52814,
    "lng": 126.953045,
    "avail": "8800",
    "pet": true,
    "open24": false
  },
  {
    "name": "용산가족공원",
    "address": "서울특별시 용산구 서빙고로 137(용산동6가)",
    "lat": 37.522593,
    "lng": 126.982394,
    "avail": "62260",
    "pet": false,
    "open24": false
  }
];