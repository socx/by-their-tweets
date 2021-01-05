import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button} from 'react-bootstrap';
import photoPlaceHolder from 'assets/img-placeholer-100-by-180.png';

export default function PoiCard(props) {
  const {personId, office, name, constituency, twitterProfileImageUrl} = props.poi;
  const position = office && office.length ? office[0].position + ' ' + office[0].dept : '';
  let subTitle = position || 'Member of Parliament (MP)';
  const imgUrl = twitterProfileImageUrl ? twitterProfileImageUrl.replace('_normal.', '.') : photoPlaceHolder;
  return (
    // <Card className='poi-card'>
    //   <Card.Img variant="top" src={twitterProfileImageUrl ? twitterProfileImageUrl.replace('_normal.', '.') : photoPlaceHolder} />
    //   <Card.Body>
    //     <Card.Title>{name}</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
    //     <Card.Text>
    //       Constituency: {constituency}
    //     </Card.Text>
    //     <Button variant="primary" href={`/people/${personId}`}>See tweets &gt;</Button>
    //   </Card.Body>
    // </Card>
    // <div className="card">
    //   <div className="embed-responsive embed-responsive-16by9">
    //     <img alt="Card cap" className="card-img-top embed-responsive-item" src={imgUrl} />
    //   </div>
    //   <div className="card-block p-2">
    //     <h4 className="card-title">{name}</h4>
    //     <p className="card-text">{subTitle}</p>
    //   </div>
    // </div>
    <a href={`/people/${personId}`}>
      <div className="card">
        <div className="embed-responsive embed-responsive-16by9">
          <img className="card-img-top embed-responsive-item" src={imgUrl} alt="Card cap" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-subtitle">{subTitle}</p>
          <p className="card-text"><small className="text-muted">Constituency: {constituency}</small></p>
        </div>
      </div>
    </a>
  );
}
