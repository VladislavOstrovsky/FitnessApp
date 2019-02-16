import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import FitnessstoreService from './services/fitnessstore-service';
import { FitnessstoreServiceProvider } from './components/fitnessstore-service-context';

import store from './store';

const fitnessstoreService = new FitnessstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <FitnessstoreServiceProvider value={fitnessstoreService}>
                <Router>
                    <App />
                </Router>
            </FitnessstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);