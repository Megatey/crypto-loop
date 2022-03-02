import React, {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import {Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News} from './components'
import './App.css';
// import { useEffect } from 'react';

const App = () => {

  // const [globalStats, setGlobalStats] = useState()


  // const count = simplified ? 10 : 100

  // const callApi = async () => {
  //   try {
  //       const res = await fetch(`https://cryptoloop-serverside.vercel.app?url=https://api.coinranking.com/v2/coins`)
  //       const data = await res.json()
  //       console.log(data.data.data.stats)
  //       setGlobalStats(data.data.data.stats)
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }


  // useEffect(() => {
  //   // getCoinDetails()
  //   callApi()
  // }, [])
  return (
    <div className="app">
      <div className="navbar">
          <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage/>} />
                {/* <Route path="/exchanges" element={<Exchanges/>} /> */}
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
                <Route path="/news" element={<News/>} />
              </Routes>
          </div>
        </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center' }}>
          Cryptoloop <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            {/* <Link to="/exchanges">Exchanges</Link> */}
            <Link to="/news">News</Link>
          </Space>
      </div>
      </div>
    </div>
  )
};

export default App;
