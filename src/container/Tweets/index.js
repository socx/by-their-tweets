import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Col, Container, Row  } from 'react-bootstrap';
import Profile from 'components/Profile';
import Spinner from 'components/Spinner';
import TwitterTweetEmbed from 'components/TwitterTweetEmbed';

import { getPerson, getTweetCategory, getTweets } from './actions';

import './Tweets.css';

class Tweets extends React.Component {

  async componentDidMount() {
    if (this.props.match.params) {
      const { personId, categoryId } = this.props.match.params;
      await this.props.getPerson(personId);
      await this.props.getTweetCategory(categoryId);
      await this.props.getTweets(personId, categoryId);
    }
  }

  render() {
    const {profile, tweetCategory, tweets, isFetchingProfile, isFetchingTweetCategory, isFetchingTweets} = this.props;
    return (
      <Container>
        {
          isFetchingProfile ? (
            <Spinner type='border' color='info' />
          ) : (
            <Profile {...profile} />
          )
        }
        <hr/>
        {
          isFetchingTweetCategory || isFetchingTweets ? (
            <Spinner type='border' color='info' />
          ) : (
            <Container className='mt-5 mb-5'>
              <Row>
                <Col>
                  {(() => {
                    switch(tweetCategory.category) {
                      case 'Economy':
                      case 'Environment':
                        return <h2> {tweets.length} Tweet(s) about the {tweetCategory.category}</h2>
                      case 'All Tweets':
                        return <h2>{tweetCategory.category} ({tweets.length})</h2>
                      default:
                        return <h2>{tweets.length} Tweet(s) about {tweetCategory.category}</h2>
                    }
                  })()}
                </Col>
              </Row>
              <Row>
                {tweets && tweets.map((tweet, index) => {
                  return <Col key={index} xs={12} sm={12} md={6} lg={4}>
                    <TwitterTweetEmbed
                      tweetId={tweet.twitterId}
                      placeholder={(<div className="loader"></div>)}
                    />
                  </Col>
                })}
              </Row>
            </Container>
          )
        }
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  isFetchingProfile: state.tweets.isFetchingProfile,
  isFetchingTweetCategory: state.tweets.isFetchingTweetCategory,
  isFetchingTweets: state.tweets.isFetchingTweets,
  profile: state.tweets.profile,
  tweetCategory: state.tweets.tweetCategory,
  tweets: state.tweets.tweets
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPerson,
  getTweetCategory,
  getTweets
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweets)
