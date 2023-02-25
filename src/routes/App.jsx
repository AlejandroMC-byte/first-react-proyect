import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout'
import Login from '../pages/Login'
import NewPassword from '../pages/NewPassword'
import RecoveryPassword from '../pages/RecoveryPassword';
import CreateAccount from '../pages/CreateAccount';
import InformationAccount from '../pages/InformationAccount';
import HistoryOrders from '../containers/HistoryOrders';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>        
          <Route exact path ="/" element ={<Home/>} />
          <Route exact path ="/login" element = {<Login/>}/>
          <Route exact path = "/create-account" element = {<CreateAccount/>}/>
          <Route exact path = "/information-account" element ={<InformationAccount/>}/>
          <Route exact path ="/recovery-password" element={<RecoveryPassword/>}/>
          <Route exact path ="/new-password" element={<NewPassword/>}/>
          <Route exact path ="/history-orders" element={<HistoryOrders/>}/>
          <Route path="*" element ={<NotFound/>}/>               
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
