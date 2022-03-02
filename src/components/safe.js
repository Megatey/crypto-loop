<div>
{!cryptoDetails ? <h4>Loading.....</h4> : <div>
  <Col className="coin-detail-container">
    <Col className='coin-heading-container'>
      <Title level={2} className='coin-name'>
        {cryptoDetails.name} Price
      </Title>
      <p>
        {cryptoDetails.name} live price in US dollars.
        View value statistics, market cap and supply.
      </p>
    </Col>
    <Select defaultValue='7d'
      className="select-timeperiod"
      placeholder="Select Time Period"
      onChange={(value) => setTimePeriod(value)}
    >
      {time.map((date) => <Option key={date}>{date}</Option>)}
    </Select>
    {/* <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name}/> */}
    <Col className='stats-container'>
      <Col className='coin-value-statistics'>
        <Col className='coin-value-statistics-heading'>
          <Title level={3} className='coin-details-heading'>
            {cryptoDetails.name} Value Statistics
          </Title>
          <p>
            An overview showing the stats of {cryptoDetails.name}
          </p>
        </Col>
        {stats.map(({ icon, title, value }) => (
          <Col className='coin-stats'>
            <Col className='coin-stats-name'>
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className='stats'>{value}</Text>
          </Col>
        ))}
      </Col>
      <Col className='other-stats-info'>
        <Col className='coin-value-statistics-heading'>
          <Title level={3} className='coin-details-heading'>
            Other Statistics
          </Title>
          <p>
            An overview showing the stats of all cryptocurrencies
          </p>
        </Col>
        {genericStats.map(({ icon, title, value }) => (
          <Col className='coin-stats'>
            <Col className='coin-stats-name'>
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className='stats'>{value}</Text>
          </Col>
        ))}
      </Col>
    </Col>
    <Col className='coin-desc-link'>
      <Row className='coin-desc'>
        <Title level={3} className="coin-details-heading">
          What is {cryptoDetails.name}
          {HTMLReactParser(cryptoDetails.description)}
        </Title>
      </Row>
      <Col className='coin-links'>
        <Title level={3} className="coin-details-heading">
          {cryptoDetails.name} Links
        </Title>
        {cryptoDetails.links.map((link) => (
          <Row className='coin-link' key={link.name}>
            <Title level={5} className="link-name">
              {link.type}
            </Title>
            <a href={link.url} target="_blank" rel='noreferrer'>
              {link.name}
            </a>
          </Row>
        ))}
      </Col>
    </Col>
  </Col>
</div>}
</div>