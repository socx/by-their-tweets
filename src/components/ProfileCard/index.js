import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button} from 'react-bootstrap';
import photoPlaceHolder from 'assets/img-placeholer-100-by-180.png';

import './styles.css';


export default function PoiCard(props) {
  // const {personId, office, name, constituency, twitterProfileImageUrl} = props.poi;
  return (
    // <Card className='poi-card'>
    //   <Card.Img variant="top" src={twitterProfileImageUrl ? twitterProfileImageUrl.replace('_normal.', '.') : photoPlaceHolder} />
    //   <Card.Body>
    //     <Card.Title>{name}</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">{office && office.length ? office[0].position + ' ' + office[0].dept : ''}</Card.Subtitle>
    //     <Card.Text>
    //       Constituency: {constituency}
    //     </Card.Text>
    //     <Button variant="primary" href={`/people/${personId}`}>See tweets &gt;</Button>
    //   </Card.Body>
    // </Card>


    <div className="col-lg-3 col-sm-6">

      <div className="card hovercard">
          <div className="cardheader">

          </div>
          <div className="avatar">
              <img alt="" src="http://lorempixel.com/100/100/people/9/" />
          </div>
          <div className="info">
              <div className="title">
                  <a target="_blank" href="https://scripteden.com/">Script Eden</a>
              </div>
              <div className="desc">Passionate designer</div>
              <div className="desc">Curious developer</div>
              <div className="desc">Tech geek</div>
          </div>
          <div className="bottom">
              <a className="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                  <i className="fa fa-twitter"></i>
              </a>
              <a className="btn btn-danger btn-sm" rel="publisher"
                href="https://plus.google.com/+ahmshahnuralam">
                  <i className="fa fa-google-plus"></i>
              </a>
              <a className="btn btn-primary btn-sm" rel="publisher"
                href="https://plus.google.com/shahnuralam">
                  <i className="fa fa-facebook"></i>
              </a>
              <a className="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                  <i className="fa fa-behance"></i>
              </a>
          </div>
      </div>

    </div>
  );
}