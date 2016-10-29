Carousel structure [
  full: '',
  thumbnail: ''
]

Default store structure
[
  { 
    //Основное дерево
    locales: {
      "ru": {
        "showAllInCategory": "Показать все в категории"
      },
      "en": {

      },
      "ua": {

      }
    },
    recentlyViewed: [id,id,id],
    categories: [
      '{{repeat(15)}}',
      {
        name: '{{company()}}',
        link: 'catalog.html',
        id: '{{index()}}'
      }
      //Вписать в первую субкатегорию
    ],
    vendors: [
      '{{repeat(15)}}',
      {
        name: '{{company()}}',
        id: '{{index()}}'
      }
    ],
    cart: [],
    sortBy: {
      type: 'PRICE',
      ASC: false
    },
    filter: {
      'IS_AVAILABLE': null,
      'IS_MASTER_SYSTEM': null,
      'VENDOR': null,
      'CATEGORY': null,
      'PAGE': null
  },
    products: [
      '{{repeat(100)}}',
      {
        name: '{{city()}}',
        id: '{{index()}}',
        price: '{{floating(1, 10000)}}',
        vendor: '{
          name: {{city()}},
          link: 'catalog.html'
          id: '{{integer(0,14)}}'
        }',
        article: '{{Name()}}',
        vendorCountry: '{{country()}}',
        categories: [
          '{{repeat(1,2)}}',
          {
            name: '{{firstName()}}',
            id: '{{integer(1,28)}}',
            link: 'catalog.html'
          }
        ],
        isAvailable: '{{bool()}}',
        isMasterSystem: '{{bool()}}',
        properties: [
          '{{repeat(1,4)}}',
          {
            name: '{{firstName()}}',
            value: '{{surname()}}'
          }
        ],
        updated: '{{date()}}',
        descriprtion: '{{lorem(20)}}',
        imageSrc: 'images/{{integer(1,12)}}.png',
        permalink: 'http://vk.com'
      }
    ]
  }
]