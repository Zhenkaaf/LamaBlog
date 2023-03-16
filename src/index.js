import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider,  BrowserRouter} from "react-router-dom";
import router from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <App />
   </BrowserRouter>
  </React.StrictMode>
);


