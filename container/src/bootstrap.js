import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

mountCart(document.querySelector('#my-cart'));
mountProducts(document.querySelector('#my-products'));

console.log('Container!');
