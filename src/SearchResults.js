import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PoiCard from './PoiCard';
// import Postcode from "postcode";

export class SearchResults extends React.Component {

	render() {
    const {results, searchText, isPristine, isSearching} = this.props;
    const hasResults = results && results.length;
    const resultsMarkUp = !hasResults ? <div> </div> :
      results.map((result, index) => {
        return <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
          <PoiCard poi={result} />
        </Col>
      });
  	return (
    	<>
        {
          isSearching && 
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        }
        <Container className='d-flex flex-column'>
          <Row className="text-center">
            <Col className={isPristine ? 'd-none' : 'mb-4'}>
              {(results && results.length) || 0} results found for <span className='font-weight-bold font-italic'>{searchText}</span>
            </Col>
          </Row>
          <Row className="justify-content-md-center align-items-center">
            {resultsMarkUp}
          </Row>
        </Container>
    	</>
    );
  }	
}