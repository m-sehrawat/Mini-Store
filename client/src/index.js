import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store/store';
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:5500";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ReduxProvider store={store}>
        <Router>
          <App />
        </Router>
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


