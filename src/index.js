import React, { Fragment,useState,useEffect } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store,persistor} from './store'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import {routes} from './router';
import Landing from './pages/landing';
import { ChakraProvider } from "@chakra-ui/react"

const Root = (props)=>{
  useEffect(() => {
    // console.log(routes)
  }, [])

  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename={`/`}>
            <Switch>
              <Route exact path={`/`} component={Landing} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Root />
    </ChakraProvider>
  </React.StrictMode>
,document.getElementById('root')
);
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
