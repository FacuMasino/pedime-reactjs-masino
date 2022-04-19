import './custom.scss';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import App from './App';

/**
  * Referenciar los paquetes de FA para que
  * esten disponible siempre en el componente 
  */
library.add(fab, faShoppingBasket)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);