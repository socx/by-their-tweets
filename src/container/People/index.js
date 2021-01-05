import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap';
import Profile from 'components/Profile';
import Spinner from 'components/Spinner';
import TweetCategoriesChart from 'components/TweetCategoriesChart';
import TweetCategoriesTable from 'components/TweetCategoriesTable';
import { getPerson, getTweetCategories } from './actions';

class People extends React.Component {
  async componentDidMount() {
    if (this.props.match.params) {
      const { personId } = this.props.match.params;
      await this.props.getPerson(personId);
      await this.props.getTweetCategories(personId);
    }
  }

  render() {
    const {tweetCategories, profile, isFetchingProfile, isFetchingTweetCategories} = this.props;
    const {personId} = profile;
    let pieData = [['Category', 'Number of Tweets']];
    let tableData = [[
      { type: 'string', label: 'Category' },
      { type: 'number', label: 'Number of Tweets' },
    ]];
    if (tweetCategories) {
      for (let index = 0; index < tweetCategories.length - 1; index++) {
        const category = tweetCategories[index];
        pieData.push([category.category, category.numberOfTweets]);
        tableData.push([category.category, { v: category.numberOfTweets, f: category.numberOfTweets.toString() }]);
      }
    }
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
          isFetchingTweetCategories ? (
            <Spinner type='border' color='info' />
          ) : (
            <Container className="mt-5 mb-5">
              <TweetCategoriesTable personId={personId} tweetCategories={tweetCategories} />
              <TweetCategoriesChart pieData={pieData} />
            </Container>
          )
        }
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  isFetchingProfile: state.people.isFetchingProfile,
  isFetchingTweetCategories: state.people.isFetchingTweetCategories,
  profile: state.people.profile,
  tweetCategories: state.people.tweetCategories
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPerson,
  getTweetCategories
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People)
