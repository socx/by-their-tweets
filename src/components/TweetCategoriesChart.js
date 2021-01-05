import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Chart from "react-google-charts";

const TweetCategoriesChart = (props) => { 
  const { pieData } = props;
  return <>
    <Row>
      <Col>
        <Chart
          width={'900px'}
          height={'500px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={{
            title: 'Tweet Categories',
            pieHole: 0.4
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </Col>
    </Row>
  </>; 
}
export default TweetCategoriesChart;
