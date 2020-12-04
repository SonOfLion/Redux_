import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import Weather from '../src/weather/Weather';

const App = () => {
    return (
        <Provider store={store}>
            <Weather />
        </Provider>
    )
}

export default App;