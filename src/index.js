import React, { Suspense, StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import App from './App';

// import { Provider } from "react-redux";
// import store from './state/store';
import { Spinner } from './components';

render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Suspense>
    {/* </Provider> */}
  </StrictMode>,
  document.getElementById('root')
);

