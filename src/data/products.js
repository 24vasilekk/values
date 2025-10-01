export const products = [
  {
    id: 1,
    name: 'VALUES BLACK HOODIE',
    slug: 'values-black-hoodie',
    price: 12900, // цена в копейках
    colors: ['black', 'brown'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: {
      black: [
        '/images/products/black-hoodie-1.jpg',
        '/images/products/black-hoodie-2.jpg',
        '/images/products/black-hoodie-3.jpg',
        '/images/products/black-hoodie-4.jpg',
      ],
      brown: [
        '/images/products/brown-hoodie-1.jpg',
        '/images/products/brown-hoodie-2.jpg',
        '/images/products/brown-hoodie-3.jpg',
        '/images/products/brown-hoodie-4.jpg',
      ]
    },
    description: 'Премиальное оверсайз худи из 100% органического хлопка. Минималистичный дизайн с вышивкой VALUES. Идеальный вес для круглогодичной носки.',
    details: [
      '100% органический хлопок',
      'Оверсайз крой',
      'Плотность 450 г/м²',
      'Рибаные манжеты и подол',
      'Произведено в Португалии'
    ],
    category: 'hoodies',
    inStock: true,
  },
  {
    id: 2,
    name: 'VALUES BROWN HOODIE',
    slug: 'values-brown-hoodie',
    price: 12900,
    colors: ['brown', 'black'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: {
      brown: [
        '/images/products/brown-hoodie-1.jpg',
        '/images/products/brown-hoodie-2.jpg',
        '/images/products/brown-hoodie-3.jpg',
        '/images/products/brown-hoodie-4.jpg',
      ],
      black: [
        '/images/products/black-hoodie-1.jpg',
        '/images/products/black-hoodie-2.jpg',
        '/images/products/black-hoodie-3.jpg',
        '/images/products/black-hoodie-4.jpg',
      ]
    },
    description: 'Премиальное оверсайз худи в насыщенном коричневом оттенке. Изготовлено из плотного хлопкового материала с мягкой внутренней отделкой. Современная уличная мода.',
    details: [
      '100% органический хлопок',
      'Оверсайз крой',
      'Плотность 450 г/м²',
      'Рибаные манжеты и подол',
      'Произведено в Португалии'
    ],
    category: 'hoodies',
    inStock: true,
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};