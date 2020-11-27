import store from '../src/store';

import { addProduct, removeProduct } from '../src/cart.actions';
import { setLanguage } from '../src/language.actions';
import { setUser, removeUser } from '../src/user.actions';

store.subscribe(() => console.log(store.getState()))

store.dispatch(addProduct({ id: 1, name: 'cheeps' }));
store.dispatch(addProduct({ id: 2, name: 'beer' }));
store.dispatch(addProduct({ id: 3, name: 'cigarets' }));
store.dispatch(removeProduct(3));
store.dispatch(setUser({ hobby: 'footbal'}));
store.dispatch(removeUser(3));
store.dispatch(setLanguage('jp'));