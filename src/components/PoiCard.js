import React from 'react';
import photoPlaceHolder from 'assets/img-placeholer-100-by-180.png';

export default function PoiCard(props) {
  const {personId, office, name, constituency, twitterProfileImageUrl} = props.poi;
  const position = office && office.length ? office[0].position + ' ' + office[0].dept : '';
  let subTitle = position || 'Member of Parliament (MP)';
  const imgUrl = twitterProfileImageUrl ? twitterProfileImageUrl.replace('_normal.', '.') : photoPlaceHolder;
  return (
    <a href={`/people/${personId}`}>
      <div className="card">
        <div className="embed-responsive embed-responsive-16by9">
          <img className="card-img-top embed-responsive-item" src={imgUrl} alt="Card cap" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-subtitle">{subTitle}</p>
          <p className="card-text text-muted">Constituency: {constituency}</p>
        </div>
      </div>
    </a>
  );
}
