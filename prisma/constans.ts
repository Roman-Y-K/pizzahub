export const categories = [
  { name: 'Pizzas' },
  { name: 'Breakfast' },
  { name: 'Snacks' },
  { name: 'Cocktails' },
  { name: 'Drinks' },
];

export const _ingredients = [
  {
    name: 'Cheese-stuffed crust',
    price: 2.5,
    imageUrl: '/images/ingredients/сheese-stuffed-crust.png',
  },
  {
    name: 'Creamy mozzarella',
    price: 1.2,
    imageUrl: '/images/ingredients/mozzarella.png',
  },
  {
    name: 'Cheddar and Parmesan cheeses',
    price: 1.2,
    imageUrl: '/images/ingredients/cheddar-parmesan.png',
  },
  {
    name: 'Spicy jalapeño peppers',
    price: 0.9,
    imageUrl: '/images/ingredients/jalapeño-peppers.png',
  },
  {
    name: 'Tender chicken',
    price: 1.2,
    imageUrl: '/images/ingredients/chicken.png',
  },
  {
    name: 'Champignons',
    price: 0.9,
    imageUrl: '/images/ingredients/champignons.png',
  },
  {
    name: 'Ham',
    price: 1.2,
    imageUrl: '/images/ingredients/ham.png',
  },
  {
    name: 'Spicy pepperoni',
    price: 1.2,
    imageUrl: '/images/ingredients/spicy-pepperoni.png',
  },
  {
    name: 'Hot chorizo',
    price: 1.2,
    imageUrl: '/images/ingredients/hot-chorizo.png',
  },
  {
    name: 'Pickles',
    price: 0.9,
    imageUrl: '/images/ingredients/pickles.png',
  },
  {
    name: 'Fresh tomatoes',
    price: 0.9,
    imageUrl: '/images/ingredients/tomatoes.png',
  },
  {
    name: 'Red onion',
    price: 0.9,
    imageUrl: '/images/ingredients/red-onion.png',
  },
  {
    name: 'Juicy pineapples',
    price: 0.9,
    imageUrl: '/images/ingredients/pineapples.png',
  },
  {
    name: 'Italian herbs',
    price: 0.5,
    imageUrl: '/images/ingredients/italian-herbs.png',
  },
  {
    name: 'Sweet pepper',
    price: 0.9,
    imageUrl: '/images/ingredients/sweet-pepper.png',
  },
  {
    name: 'Feta cubes',
    price: 1.2,
    imageUrl: '/images/ingredients/feta.png',
  },
  {
    name: 'Meatballs',
    price: 1.2,
    imageUrl: '/images/ingredients/meatballs.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Omelet with ham and mushrooms',
    imageUrl: '/images/products/omelet-ham-mushrooms.png',
    categoryId: 2,
  },
  {
    name: 'Omelet with pepperoni',
    imageUrl: '/images/products/omelet-pepperoni.png',
    categoryId: 2,
  },
  {
    name: 'Latte coffee',
    imageUrl: '/images/products/latte-coffee.png',
    categoryId: 2,
  },
  {
    name: 'Danwich ham and cheese',
    imageUrl: '/images/products/danwich-ham-cheese.png',
    categoryId: 3,
  },
  {
    name: 'Chicken nuggets',
    imageUrl: '/images/products/chicken-nuggets.png',
    categoryId: 3,
  },
  {
    name: 'Baked potatoes with sauce 🌱',
    imageUrl: '/images/products/baked-potatoes.png',
    categoryId: 3,
  },
  {
    name: 'Dodster',
    imageUrl: '/images/products/dodster.png',
    categoryId: 3,
  },
  {
    name: 'Spicy Dodster 🌶️🌶️',
    imageUrl: '/images/products/spicy-dodster.png',
    categoryId: 3,
  },
  {
    name: 'Peach milkshake',
    imageUrl: '/images/products/peach-milkshake.png',
    categoryId: 4,
  },
  {
    name: 'Strawberry milkshake',
    imageUrl: '/images/products/strawberry-milkshake.png',
    categoryId: 4,
  },
  {
    name: 'Oreo cookie milkshake',
    imageUrl: '/images/products/oreo-milkshake.png',
    categoryId: 4,
  },
  {
    name: 'Classic milkshake 👶',
    imageUrl: '/images/products/milkshake.png',
    categoryId: 4,
  },
  {
    name: 'Apple pie Cappuccino',
    imageUrl: '/images/products/apple-pie-cappuccino.png',
    categoryId: 5,
  },
  {
    name: 'Caramel cappuccino',
    imageUrl: '/images/products/caramel-cappuccino.png',
    categoryId: 5,
  },
  {
    name: 'Coconut latte',
    imageUrl: '/images/products/coconut-latte.png',
    categoryId: 5,
  },
  {
    name: 'Americano coffee',
    imageUrl: '/images/products/americano.png',
    categoryId: 5,
  },
  {
    name: 'Latte coffee',
    imageUrl: '/images/products/latte-coffee.png',
    categoryId: 5,
  },
];
