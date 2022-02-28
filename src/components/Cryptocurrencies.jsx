import React, {useState, useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100
  // const {data: cryptosList, isLoading} = useGetCryptosQuery(count)
  const [cryptosList, setCryptosList] = useState()
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getCoinList = async () => {
      try {
        const res = await fetch(`https://cryptoloop-serverside.vercel.app?url=https://api.coinranking.com/v2/coins?limit=${count}`)
        const output = await res.json()
        console.log(output.data.data.coins);
        setCryptosList(output)
      }
      catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    getCoinList()

      const filteredData = cryptosList?.data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

    setCryptos(filteredData)

  }, [cryptosList, searchTerm])

  // if (isLoading) return 'Loading....'
  // if (!cryptosList?.data?.coins) return 'Loading...'

  return (
  <>
  {!cryptosList ? <h4>Loading....</h4> : <div>
    {!simplified && (
      <div className="search-crypto">
        <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
    )}
      <Row gutter={[32, 32]} className='crypto-card-container'>
          {cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.rank}>
              <Link to={`/crypto/${currency.uuid}`}>
                    <Card 
                      title={`${currency.rank}. ${currency.name}`}
                      extra={<img className='crypto-image' src={currency.iconUrl} />}
                      hoverable
                      >
                          <p>Price: {millify(currency.price)}</p>
                          <p>MarketCap: {millify(currency.marketCap)}</p>
                          <p>Daily Change: {millify(currency.change)}%</p>
                    </Card>
              </Link>
            </Col>
          ))}
      </Row>
      </div>}
  </>
  );
};

export default Cryptocurrencies;
