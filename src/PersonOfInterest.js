import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { API_ROOT } from './constants/utils';


class PersonOfInterest extends React.Component {
  state = {
    hasError: false,
    loading: false,
    profile: {},
    personalTweets: [],
    tweetCategories: []
  };
  async componentDidMount() {
    if (this.props.match.params) {
      const { personId } = this.props.match.params;
      this.setState({loading: true});
      try {
        const person = await axios.get(`${API_ROOT}/persons/${personId}`);
        if (person && person.data) {
          this.setState({profile: person.data})
        }
        // get tweet categories
        const tweets = await axios.get(`${API_ROOT}/tweets/${personId}/tweet-categories`);
        if (tweets && tweets.data) {
          this.setState({tweetCategories: tweets.data, loading: false})
        }
      } catch (error) {
        this.setState({loading: false, hasError: true});
      }
    }
  }

  render() {
    const {name, personId, twitterHandle, classification, politicalParty, constituency} = this.state.profile;
    return (
      <Container>
        <h1>{name}</h1>
        <p><span className="h5">Title: </span><span>{classification}</span></p> 
        <p><span className="h5">Party: </span><span>{politicalParty}</span></p>
        <p><span className="h5">Constituency: </span><span>{constituency}</span></p>
        <p><span className="h5">Twitter handle: </span><span><a alt="twitter handle" href={`https://www.twitter.com/${twitterHandle}`}>@{twitterHandle}</a></span></p>
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
        </Container>
      </Container>
    )
  }
}
export default PersonOfInterest
