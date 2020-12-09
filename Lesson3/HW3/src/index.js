import store from '../src/store';
import { addProduct, removeProduct } from '../src/cart.actions';

store.subsctibe(() => console.log(store.getState()));

store.dispatch(addProduct({name:'milk'}));