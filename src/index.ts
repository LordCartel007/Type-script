let gomycode: number = 10;

function addNumber(a: number, b: number) {
  return a + b;
}

// user, product , category, image ,order, cart , cart item, review.

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  image: string;
  createdAt: number;
}

interface product {
  id: number;
  type: string;
  name: string;
  make: string;
  price: number;
  image: string;
}

interface order {
  id: number;
}

interface review {
  userId: number;
  productId: number;
  comment: string;
  createdAt: number;
}
