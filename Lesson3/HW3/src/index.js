import store from '../src/store';
import { addProduct, removeProduct } from '../src/cart.actions';
import { setLanguage } from '../src/language.actions';
import { setUser, removeUser } from '../src/user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id:1, name:'milk' }));
store.dispatch(addProduct({ id:2, name:'strawberry' }));
store.dispatch(setLanguage('en'))
store.dispatch(removeProduct(1));
store.dispatch(setUser({ id:2, name:'Pup' }));
store.dispatch(setUser({ id:3, name:'Chelick' }));
store.dispatch(removeUser({ id:2, name:'Pup' }));

