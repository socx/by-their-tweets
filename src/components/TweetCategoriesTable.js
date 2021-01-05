import React from 'react'
import { Col, Row } from 'react-bootstrap';

const TweetCategoriesTable = (props) => { 
  const { personId, tweetCategories } = props;
  return <>
    <Row>
      <Col className="h4">Category</Col>
      <Col className="h4">Number of Tweets</Col>
    </Row>
    {tweetCategories && tweetCategories.map((category, index) => {
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
  </>; 
}
export default TweetCategoriesTable;
