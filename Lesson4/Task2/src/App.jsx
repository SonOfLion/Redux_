import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import Users from '../src/users/Users';

const App = () => {
    return(
        <Provider store={store}>
            <Users />
        </Provider>
    )
}

export default App;