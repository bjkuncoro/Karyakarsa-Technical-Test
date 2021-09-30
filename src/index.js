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
  const [anim, setAnim] = useState('')

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
              {routes.unProtectedView.map(i=>{
                return(
                  <Route key={i.path} path={`${process.env.REACT_APP_PUBLIC_URL}${i.path}`} component={i.Component} />
                )
              })}
              <App>
                <Route exact path={`${process.env.REACT_APP_PUBLIC_URL}/`} render={() => {
                    return (<Redirect to={`${process.env.REACT_APP_PUBLIC_URL}/beranda`} />)
                }} />
                <TransitionGroup>
                  {routes.protectedView.map(({ path, Component }) => (
                    <Route key={path}  exact  path={`${process.env.REACT_APP_PUBLIC_URL}${path}`}>
                        {({ match }) => (
                            <CSSTransition 
                              in={match != null}
                              timeout={100}
                              classNames={anim} 
                              unmountOnExit>
                              <div><Component/></div>
                            </CSSTransition> 
                        )}
                    </Route>
                    ))}
              </TransitionGroup> 
            </App>
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
