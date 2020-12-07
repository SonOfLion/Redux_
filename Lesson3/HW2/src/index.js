import store from '../src/store';
import { addProduct, removeProduct } from '../src/cart.actions';
import { setUser, removeUser } from '../src/user.actions';
import { setLanguage } from '../src/language.actions';

store.subscribe(() => console.log(store.getState()))

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'beer' }));
store.dispatch(addProduct({ id: 3, name: 'cigarets' }));
store.dispatch(removeProduct(76));
store.dispatch(setUser({ name: 'Bob'}));
store.dispatch(removeUser(3));
store.dispatch(setLanguage('jp'));