import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import UserInfo from '../src/users/UserInfo';
import SearchField from '../src/users/SearchField';

const App = () => {
    return (
        <Provider store={store}>
            <div className="page">
                <UserInfo />
                <SearchField />
            </div>
        </Provider>
    )
}

export default App;