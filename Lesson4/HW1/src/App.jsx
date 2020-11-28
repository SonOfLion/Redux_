import React from 'react';
import ConnectedUsersList from '../src/users/UsersList';
import store from '../src/store';
import { Provider } from 'react-redux';

const App = () =>{
    return (
        <Provider store={store}>
            <ConnectedUsersList />
        </Provider>
    )
}

export default App;