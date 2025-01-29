import React, { useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import OrderPage from './components/OrderPage/orderPage'
import { Switch, Route } from 'react-router-dom'


import Success from './components/Success/Success'

function App() {
  const [responseData, setResponseData] = useState();

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/OrderPage'>
          <OrderPage setResponseData={setResponseData} />
        </Route>
        <Route path='/Success' >
          <Success responseData={responseData} />
        </Route>
      </Switch>


    </>
  )
}

export default App
