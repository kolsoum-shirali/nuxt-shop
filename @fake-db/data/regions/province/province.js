import mock from '@/@fake-db/mock'
const data = {
    provinces: [{
            id: 1,
            name: 'آذربایجان شرقی',
            tell_prefix: '41',
            latitude: 37.903573,
            longitude: 46.268211,
        },
        {
            id: 2,
            name: 'آذربایجان غربی',
            tell_prefix: '44',
            latitude: 37.455006,
            longitude: 45,
        },
        {
            id: 3,
            name: 'اردبیل',
            tell_prefix: '45',
            latitude: 38.485328,
            longitude: 47.891121,
        },
        {
            id: 5,
            name: 'البرز',
            tell_prefix: '26',
            latitude: 35.996047,
            longitude: 50.928925,
        },
        {
            id: 7,
            name: 'بوشهر',
            tell_prefix: '77',
            latitude: 28.923384,
            longitude: 50.820314,
        },
        {
            id: 10,
            name: 'خراسان جنوبی',
            tell_prefix: '56',
            latitude: 32.517564,
            longitude: 59.104176,
        },
        {
            id: 12,
            name: 'خراسان شمالی',
            tell_prefix: '58',
            latitude: 37.471035,
            longitude: 57.101319,
        },
        {
            id: 13,
            name: 'خوزستان',
            tell_prefix: '61',
            latitude: 31.436015,
            longitude: 49.041312,
        },
        {
            id: 14,
            name: 'زنجان',
            tell_prefix: '24',
            latitude: 36.501818,
            longitude: 48.398819,
        },
        {
            id: 15,
            name: 'سمنان',
            tell_prefix: '23',
            latitude: 35.225558,
            longitude: 54.434214,
        },
        {
            id: 16,
            name: 'سیستان و بلوچستان',
            tell_prefix: '54',
            latitude: 27.529991,
            longitude: 60.582068,
        },
        {
            id: 17,
            name: 'فارس',
            tell_prefix: '71',
            latitude: 29.104381,
            longitude: 53.045893,
        },
        {
            id: 18,
            name: 'قزوین',
            tell_prefix: '28',
            latitude: 36.088132,
            longitude: 49.854727,
        },
        {
            id: 19,
            name: 'قم',
            tell_prefix: '25',
            latitude: 34.639944,
            longitude: 50.875942,
        },
        {
            id: 20,
            name: 'كردستان',
            tell_prefix: '87',
            latitude: 35.955358,
            longitude: 47.136212,
        },
        {
            id: 21,
            name: 'كرمان',
            tell_prefix: '34',
            latitude: 30.283938,
            longitude: 57.083363,
        },
        {
            id: 22,
            name: 'كرمانشاه',
            tell_prefix: '83',
            latitude: 34.314167,
            longitude: 47.065,
        },
        {
            id: 23,
            name: 'کهگیلویه و بویراحمد',
            tell_prefix: '74',
            latitude: 30.650948,
            longitude: 51.60525,
        },
        {
            id: 24,
            name: 'گلستان',
            tell_prefix: '17',
            latitude: 37.289812,
            longitude: 55.137583,
        },
        {
            id: 25,
            name: 'گیلان',
            tell_prefix: '13',
            latitude: 37.117162,
            longitude: 49.528,
        },
        {
            id: 26,
            name: 'لرستان',
            tell_prefix: '66',
            latitude: 33.581839,
            longitude: 48.398819,
        },
        {
            id: 27,
            name: 'مازندران',
            tell_prefix: '11',
            latitude: 36.226239,
            longitude: 52.53186,
        },
        {
            id: 28,
            name: 'مركزی',
            tell_prefix: '86',
            latitude: 33.509329,
            longitude: -92.396119,
        },
        {
            id: 29,
            name: 'هرمزگان',
            tell_prefix: '76',
            latitude: 27.138723,
            longitude: 55.137583,
        },
        {
            id: 30,
            name: 'همدان',
            tell_prefix: '81',
            latitude: 34.7608,
            longitude: 48.398819,
        },
        {
            id: 31,
            name: 'یزد',
            tell_prefix: '35',
            latitude: 32.100639,
            longitude: 54.434214,
        },
        {
            id: 6,
            name: 'ایلام',
            tell_prefix: '84',
            latitude: 33.295762,
            longitude: 46.670534,
        },
        {
            id: 4,
            name: 'اصفهان',
            tell_prefix: '31',
            latitude: 32.654627,
            longitude: 51.667983,
        },
        {
            id: 9,
            name: 'چهارمحال و بختیاری',
            tell_prefix: '38',
            latitude: 31.961435,
            longitude: 50.845632,
        },
        {
            id: 11,
            name: 'خراسان رضوی',
            tell_prefix: '51',
            latitude: 35.102025,
            longitude: 59.104176,
        },
        {
            id: 8,
            name: 'تهران',
            tell_prefix: '21',
            latitude: 35.696111,
            longitude: 51.423056,
        },
    ],
}

mock.onGet('/regions/province').reply((config) => {
    return [200, data.provinces]
})