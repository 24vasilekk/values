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
    description: 'Premium oversized hoodie crafted from 100% organic cotton. Features a minimalist design with tonal VALUES embroidery. Perfect weight for year-round wear.',
    details: [
      '100% organic cotton',
      'Oversized fit',
      'Heavyweight 450gsm',
      'Ribbed cuffs and hem',
      'Made in Portugal'
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
    description: 'Premium oversized hoodie in rich brown tone. Made from heavyweight cotton blend with a soft brushed interior. Modern streetwear essentials.',
    details: [
      '100% organic cotton',
      'Oversized fit',
      'Heavyweight 450gsm',
      'Ribbed cuffs and hem',
      'Made in Portugal'
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