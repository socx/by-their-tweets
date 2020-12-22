import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button} from 'react-bootstrap';
import photoPlaceHolder from './img-placeholer-100-by-180.png';

export default function PoiCard(props) {
  const {personId, office, name, constituency, twitterProfileImageUrl} = props.poi;
  return (
    <Card className='poi-card'>
      <Card.Img variant="top" src={twitterProfileImageUrl ? twitterProfileImageUrl.replace('_normal.', '.') : photoPlaceHolder} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{office && office.length ? office[0].position + ' ' + office[0].dept : ''}</Card.Subtitle>
        <Card.Text>
          Constituency: {constituency}
        </Card.Text>
        <Button variant="primary" href={`/people/${personId}`}>See tweets {personId}</Button>
      </Card.Body>
    </Card>
  );
}
