import React, {useState, useMemo} from 'react';
import { Line } from "react-chartjs-2";
import {Col, Row, Typography} from 'antd';

const {Title} = Typography

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = []
    const coinTimeStamp = []
    const [chartData, setChartData] = useState({labels:[], datasets:[]});


    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
      }
    
      for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
      }

      // const data = () => {
      //   // labels: coinTimeStamp,
      //   setChartData(datasets: [
      //     labels: [5, 4, 3, 2, 1],
      //     {
      //       label: 'Price In USD',
      //       // data: coinPrice,
      //       data: [1, 2, 3, 4, 5],
      //       fill: false,
      //       backgroundColor: '#0071bd',
      //       borderColor: '#0071bd',
      //     },
      //   ],
      // })
    
      const data = () => {
        setChartData({
          labels: [1, 2, 3, 4, 5],
          datasets: [
            {
                  // labels: [5, 4, 3, 2, 1],
                  label: 'Price In USD',
                  // data: coinPrice,
                  data: [5, 4, 3, 2, 1],
                  fill: false,
                  backgroundColor: '#0071bd',
                  borderColor: '#0071bd',
                },
          ]
        })
      }
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };


        useMemo(() => data(), []);


  return (
  <>
        <Row className='chart-header'>
            <Title level={2} className="chart-title">{coinName} Price Chart</Title>
            <Col className='price-container'>
                <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
                <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
            </Col>
        </Row>
        <h1>Temporary Unavailable Now....</h1>
        {/* <Line data={chartData} options={options} /> */}
  </>
  );
};

export default LineChart;
