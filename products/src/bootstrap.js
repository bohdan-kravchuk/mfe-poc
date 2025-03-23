import faker from 'faker';

const mount = element => {
  let products = '';
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  element.innerHTML = products;
};

// Context #1
// We are running application in development in isolation
// We are using our local index.html file
// Which definitely has an element with id 'cart-dev'
// In this case we want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
  const productsDev = document.querySelector('#products-dev');
  // Assuming our container app doesn't have element with id 'cart-dev'
  if (productsDev) {
    // We are running app in isolation
    mount(productsDev);
  }
}

// Context #2
// We are running application in development or production
// through the container app
// No guarantee that an element with id 'card-dev' exists
// We do NOT want to try to render our app immediately
export { mount };
