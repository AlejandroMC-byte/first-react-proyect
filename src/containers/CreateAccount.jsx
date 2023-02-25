import React from 'react'
import '../styles/CreateAccount.scss'
import Header from '../components/Header'
import Layout from './Layout'

const CreateAccount = () => {
    return (
      <Layout>
      <Header/>
      <div className="login">
        <div className="form-container">
          <h1 className="title">My account</h1>
          <form action="/" className="form">
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Teff"
                className="input input-name"
                />
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="platzi@example.com"
                className="input input-email"
                />
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="input input-password"
                />
            </div>
            <input
              type="submit"
              defaultValue="Create"
              className="primary-button login-button"
              />
          </form>
        </div>
      </div>
    </Layout>
    );
}

export default CreateAccount;