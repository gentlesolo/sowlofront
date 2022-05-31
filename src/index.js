import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "react-datetime/css/react-datetime.css";
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@mui/styles";
import {createTheme} from "@mui/material/styles";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {store} from './app/store'
import {Provider} from 'react-redux'
import { AuthProvider } from './context/AuthProvider'
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const theme = createTheme();
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Auth0Provider
                    domain={domain}
                    clientId={clientId}
                    redirectUri={window.location.origin}
                >
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Routes>
                            <Route path="/*" element={<App />} />
                        </Routes>
                    </ThemeProvider>
                </Provider>
                </Auth0Provider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
