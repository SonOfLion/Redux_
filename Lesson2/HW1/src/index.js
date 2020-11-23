import store from '../src/store';
import { addUser, deleteUser } from '../src/users.actions';

store.dispatch(addUser({ id: 76, name: "Sarah" }));
store.dispatch(addUser({ id: 24, name: "Anastasia" }));
store.dispatch(addUser({ id: 30, name: "Leo" }));
store.dispatch(addUser({ id: 11, name: "Tania" }));
store.dispatch(addUser({ id: 14, name: "Bonia" }));
store.dispatch(addUser({ id: 91, name: "Mishel" }));
store.dispatch(deleteUser());

const usersList = store.getState();
console.log(usersList);
