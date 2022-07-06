import React from 'react'
import Form from './test/Form'
import Result from './test/Result'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
   <Routes>
    <Route path="/"element={ <Form/>}/>
    <Route path="/result"element={ <Result/>}/>
   </Routes>
  )
}

export default App