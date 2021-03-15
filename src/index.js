import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'; // komponenta (parent) kojom obuhvatamo celu aplikaciju da bi sve imalo pristup njoj
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store'; // import glavnog stora (state-a)

import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
