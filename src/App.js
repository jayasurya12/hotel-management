import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Customer from './pages/Customer Data Page/Customer'
import Edit from './pages/Edit Page/Edit'
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from 'redux'
import {userReducer} from './store/reducer/user'
import ReduxThunk from 'redux-thunk'
const App = () => {
   
  const store=createStore(userReducer,applyMiddleware(ReduxThunk))
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/customer' exact component={Customer}/>
          <Route path='/edit' exact component={Edit}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
