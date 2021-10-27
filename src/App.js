import React, { Component,lazy,Suspense } from 'react'
import { Provider } from 'react-redux'
import { Route,  BrowserRouter, Switch, Redirect} from 'react-router-dom'
import Header from './common/header'
/* import Detail from './pages/detail/components/loadable' */
import Loading from './pages/detail/components/loadable'
import Home from './pages/home'
import Login from './pages/login'
import Write from './pages/write'
import Authors from './pages/authors'
import store from './store'
import {Globalstyle} from './style'
import {Globalicon } from './statics/iconfont/iconfont'
const Detail = lazy(()=>import('./pages/detail'))

export default class App extends Component {

  render() {
    return (
      <div>
      <Globalstyle/>
      <Globalicon/>
      <Provider store={store}>
        <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home} />
        <Suspense fallback={<Loading/>}>
          <Route exact path='/detail/:id' component={Detail} />
        </Suspense>
        <Route  path='/login' component={Login} />
        <Route path='/authors' component={Authors} />
        <Route exact path='/write' component={Write} />
        </BrowserRouter>
      </Provider> 
      </div>
    )
  }
}

