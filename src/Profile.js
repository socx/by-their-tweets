import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import photoPlaceHolder from './img-placeholer-100-by-180.png';

const Profile = (props) => { 
  return <Row>
    <Col xs={12} sm={6} md={5}>
      <Image src={props.twitterProfileImageUrl ? props.twitterProfileImageUrl.replace('_normal.jpg', '.jpg') : photoPlaceHolder}
        width={280}
        height={280}
        alt={`${props.name}'s photo (280x280)`}
        roundedCircle
      />
    </Col>
    <Col xs={12} sm={6} md={6}>
      <h1>{props.name}</h1>
      <p><span className="h5">Title: </span><span>{props.title || props.classification}</span></p> 
      <p><span className="h5">Party: </span><span>{props.politicalParty}</span></p>
      <p><span className="h5">Constituency: </span><span>{props.constituency}</span></p>
      <p><span className="h5">Twitter handle: </span><span><a alt="twitter handle" href={`https://www.twitter.com/${props.twitterHandle}`}>@{props.twitterHandle}</a></span></p>
      <p><span className="h5">Twitter Bio: </span><span>{props.twitterDescription}</span></p>
    </Col>
  </Row>; 
}
export default Profile;