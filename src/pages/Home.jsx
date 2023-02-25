import React from 'react'
import Header from '../components/Header'
import Elements from '../components/Elements'
import Layout from '../containers/Layout';

const Home = () => {
    return (
        <Layout>
            <Header />
            <Elements />
        </Layout>
        );
}

export default Home;