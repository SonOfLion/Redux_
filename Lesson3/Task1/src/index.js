import store from '../src/store';
import { increment, decrement, reset } from '../src/counter.actions';
import { addUser, deleteUser, updateUser } from '../src/users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({id:1, name:'Leo'}))
store.dispatch(addUser({id:2, name:'Gid'}))
store.dispatch(deleteUser(2))
store.dispatch(updateUser(1, {life:'Front-end dev', name:'Leonid'}))