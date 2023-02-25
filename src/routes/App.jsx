import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import NewPassword from '../containers/NewPassword'
import RecoveryPassword from '../containers/RecoveryPassword';
import CreateAccount from '../containers/CreateAccount';
import InformationAccount from '../containers/InformationAccount';
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
