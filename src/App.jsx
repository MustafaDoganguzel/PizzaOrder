import React from 'react'
import { useState } from 'react'


import HomePage from './components/HomePage/HomePage'
import OrderPage from './components/OrderPage/orderPage'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'

function App() {


  return (
    <>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/OrderPage'>
          <OrderPage />
        </Route>
      </Switch>


    </>
  )
}

export default App
