import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdbreact';
import PoiCard from './PoiCard';
import Spinner from './Spinner';

class SearchResults extends React.Component {

	render() {
    const {results, isSearching} = this.props;
    const hasResults = results && results.length;
    const resultsMarkUp = !hasResults ? <div> </div> :
      results.map((result, index) => {
        return <MDBCol xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
          <PoiCard poi={result} />
        </MDBCol>
      });
  	return (
    	<>
        <MDBContainer className='d-flex flex-column'>
          <MDBRow className="justify-content-md-center align-items-center">
            {
              isSearching && <Spinner type='border' color='info' />
            }
            {resultsMarkUp}
          </MDBRow>
        </MDBContainer>
    	</>
    );
  }	
}
export default SearchResults;
