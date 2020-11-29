import React from 'react';
import store from '../src/store';
import { Provider } from 'react-redux';
import TransferList from '../src/options/TransferList';

const App = () => {
    return (
        <Provider store={store}>
            <TransferList />
        </Provider>
    )
}

export default App;