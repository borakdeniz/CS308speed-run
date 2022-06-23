import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Bora',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Emr',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Spiderman',
      imageURL: '/images/spidermanimg.jpg',
      category: 'Action Game',
      edition: 'Game of the Year',
      description: 'best game ever',
      genres: [],
      price: 45,
      distributor: 'Sony',
      comments: [],
      rating: 4.5,
      stock: 2,
      slug: 'game_1',
    },
    {
      name: 'V Rising',
      imageURL: '/images/vrisingimg.jpg',
      category: 'Survival Game',
      edition: 'Game of the Year',
      description: 'best game ever',
      genres: [],
      price: 45,
      distributor: 'Stunlock Studios',
      comments: [],
      rating: 4.5,
      stock: 0,
      slug: 'game_2',
    },
    {
      name: 'FIFA 2022',
      imageURL: '/images/fifa22img.jpg',
      category: 'Sports Game',
      edition: 'Game of the Year',
      description: 'best game ever',
      genres: [],
      price: 45,
      distributor: 'EA Games',
      comments: [],
      rating: 4.5,
      stock: 2,
      slug: 'game_3',
    },
  ],
};

export default data;
