import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { API_ROOT } from './constants/utils';
import TwitterTweetEmbed from './TwitterTweetEmbed';
// import { TwitterTweetEmbed } from 'react-twitter-embed';


class CategoryTweets extends React.Component {
  state = {
    hasError: false,
    profile: {},
    tweetCategory: {},
    personalTweets: {
      loading: false,
      tweets: []
    }
  };
  async componentDidMount() {
    if (this.props.match.params) {
      const { personId, categoryId } = this.props.match.params;
      this.setState({loading: true});
      try {
        const category = await axios.get(`${API_ROOT}/tweets/tweet-categories/${categoryId}`);
        if (category && category.data) {
          this.setState({tweetCategory: category.data})
        }
        const person = await axios.get(`${API_ROOT}/persons/${personId}`);
        if (person && person.data) {
          this.setState({profile: person.data})
        }
        // get categorised tweets
        this.setState({personalTweets: { tweets: [], loading: true}})
        const tweets = await axios.get(`${API_ROOT}/tweets/${personId}/categorised-tweets/${categoryId}`);
        if (tweets && tweets.data) {
          this.setState({personalTweets: { tweets: tweets.data, loading: false}})
        }
      } catch (error) {
        this.setState({personalTweets: { tweets: this.state.personalTweets.tweets, loading: false}, hasError: true});
      }
    }
  }

  render() {
    const {name, twitterHandle, classification, politicalParty, constituency} = this.state.profile;
    const {personalTweets, tweetCategory} = this.state;
    return (
      <Container>
        <h1>{name}</h1>
        <p><span className="h5">Title: </span><span>{classification}</span></p> 
        <p><span className="h5">Party: </span><span>{politicalParty}</span></p>
        <p><span className="h5">Constituency: </span><span>{constituency}</span></p>
        <p><span className="h5">Twitter handle: </span><span><a alt="twitter handle" href={`https://www.twitter.com/${twitterHandle}`}>@{twitterHandle}</a></span></p>
        <hr/>
        <Container>
          {(() => {
            switch(tweetCategory.category) {
              case 'Economy':
              case 'Environment':
                return <h2>Tweet(s) about the {tweetCategory.category}</h2>
              case 'All Tweets':
                return <h2>{tweetCategory.category}</h2>
              default:
                return <h2>Tweet(s) about {tweetCategory.category}</h2>
            }
          })()}
          {personalTweets.loading ? (
            <Row>Loading and categorising tweets...</Row>
          ) : (
            <Row>
              {personalTweets.tweets.map((tweet, index) => {
                return <Col key={index} sm={4} xs={12}>
                  <TwitterTweetEmbed
                    tweetId={tweet.twitterId}
                  />
                    {/* <blockquote className="twitter-tweet" data-lang="en" >
                      <a href={tweet.embedTwitterUrl}>
                        Loading tweet...
                      </a>
                    </blockquote> */}
                </Col>
              })}
            </Row>
          )}
        </Container>
      </Container>
    )
  }
}
export default CategoryTweets
