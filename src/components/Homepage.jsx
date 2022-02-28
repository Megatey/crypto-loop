import React, {useEffect, useState} from 'react';
import millify from 'millify'
import {Typography, Row, Col, Statistic} from 'antd'
import {Link} from 'react-router-dom'
// import { useGetCryptosQuery } from '../services/cryptoApi';
import axios from "axios";
import {Cryptocurrencies, News} from '../components'


const {Title} = Typography

const Homepage = () => {

  // const [data, setData] = useState()
  const [globalStats, setGlobalStats] = useState()

  const callApi = async () => {
    try {
        const res = await fetch(`https://cryptoloop-serverside.vercel.app?url=https://api.coinranking.com/v2/coins`)
        const data = await res.json()
        console.log(data.data.data.stats)
        setGlobalStats(data.data.data.stats)
    }
    catch (error) {
      console.log(error);
    }
  }

    useEffect(() => {
    callApi()
  },[])
  

  return (
 <>
  { !globalStats ? <h4>Loading......</h4> : <div> <Title level={2} className='heading'>Global Crypto Stats</Title>
    <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.totalCoins}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    <div className="home-heading-container">
      <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified/>
    <div className="home-heading-container">
      <Title level={2} className="home-title">Latest Crypto News</Title>
      <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified/>
    </div>
    }
 </>
  );
};

export default Homepage;
