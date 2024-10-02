import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {RoutesProtected} from './Config/Rotas_protegidas';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <RoutesProtected />
    </BrowserRouter>
);
