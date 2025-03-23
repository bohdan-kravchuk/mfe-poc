import faker from 'faker';

const mount = element => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  element.innerHTML = cartText;
};

// Context #1
// We are running application in development in isolation
// We are using our local index.html file
// Which definitely has an element with id 'cart-dev'
// In this case we want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
  const cartDev = document.querySelector('#cart-dev');
  // Assuming our container app doesn't have element with id 'cart-dev'
  if (cartDev) {
    // We are running app in isolation
    mount(cartDev);
  }
}

// Context #2
// We are running application in development or production
// through the container app
// No guarantee that an element with id 'card-dev' exists
// We do NOT want to try to render our app immediately
export { mount };
