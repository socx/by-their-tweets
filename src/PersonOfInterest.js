import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { API_ROOT, REMOTE_API_ROOT } from './constants/utils';
import Profile from './Profile';
import Chart from "react-google-charts";

class PersonOfInterest extends React.Component {
  state = {
    hasError: false,
    loading: false,
    profile: {},
    personalTweets: [],
    tweetCategories: []
  };
  async componentDidMount() {
    const apiRoot = window.location.host.includes('localhost') ? API_ROOT : REMOTE_API_ROOT;
    if (this.props.match.params) {
      const { personId } = this.props.match.params;
      this.setState({loading: true});
      try {
        const person = await axios.get(`${apiRoot}/persons/${personId}`);
        if (person && person.data) {
          this.setState({profile: person.data})
        }
        // get tweet categories
        const tweets = await axios.get(`${apiRoot}/tweets/${personId}/tweet-categories`);
        if (tweets && tweets.data) {
          this.setState({tweetCategories: tweets.data, loading: false})
        }
      } catch (error) {
        this.setState({loading: false, hasError: true});
      }
    }
  }

  render() {
    const {personId} = this.state.profile;
    let pieData = [['Category', 'Number of Tweets']];
    let tableData = [[
      { type: 'string', label: 'Category' },
      { type: 'number', label: 'Number of Tweets' },
    ]];
    for (let index = 0; index < this.state.tweetCategories.length - 1; index++) {
      const category = this.state.tweetCategories[index];
      pieData.push([category.category, category.numberOfTweets]);
      tableData.push([category.category, { v: category.numberOfTweets, f: category.numberOfTweets.toString() }]);
    }
    return (
      <Container>
        <Profile {...this.state.profile}/>
        <hr/>
        <Container>
            <Row>
              <Col className="h4">Category</Col><Col className="h4">Number of Tweets</Col>
            </Row>
          {this.state.tweetCategories.map((category, index) => {
            return <Row key={index}>
              <Col>
                {category.numberOfTweets > 0 ? (<a alt="link to tweets" href={`/tweets/${personId}/${category.categoryId}`}>{category.category}</a>
                ) : (
                  <span>{category.category}</span>
                )}
              </Col>
              <Col>
                {category.numberOfTweets > 0 ? (<a alt="link to tweets" href={`/tweets/${personId}/${category.categoryId}`}>{category.numberOfTweets}</a>
                ) : (
                  <span>{category.numberOfTweets}</span>
                )}
              </Col>
            </Row>
          })}
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
                  // Just add this option
                  pieHole: 0.4
                }}
                rootProps={{ 'data-testid': '2' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}
export default PersonOfInterest
