import store from '../src/store';
import { addUser, deleteUser } from '../src/users.actions';

store.dispatch(addUser({id: 76, name: 'Leo'}))
store.dispatch(addUser({id: 17, name: 'Ggg'}))
store.dispatch(deleteUser(17))

console.log(store.getState())