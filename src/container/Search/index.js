import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  MDBFreeBird,
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdbreact';
import './styles.css';
import { THEME } from 'constants/utils';
import Landmark from 'components/Landmark';
import SearchForm from 'components/SearchForm';
import SearchResults from 'components/SearchResults';
import { searchTextChanged, getPeople } from './actions';

class Search extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    const props = this.props;

    return (
      <>
        <Landmark />
        <div className='mt-0 mb-0'>
          <MDBFreeBird>
            <SearchForm 
              theme={THEME}
              searchText={props.searchText}
              results={props.results}
              isSearching= {props.isSearching}
              isPristine={props.isPristine}
              searchTextChanged={props.searchTextChanged}
              getPeople={props.getPeople}
            />
          </MDBFreeBird>
          <MDBContainer className="mt-5">
            <SearchResults
              theme={THEME}
              results={props.results}
              isSearching= {props.isSearching}
            /> 
          </MDBContainer>


          <div className='d-none customer-support-section'>
            <MDBContainer >
              <MDBRow>
                <MDBCol md='12' className='my-5'>
                  <div className='white-opaque-bg p-2'>
                    <h2 className="text-center black-text">Awesome Customer Support</h2>
                    <p className="text-center black-text">Do you have any queries? Not to worry. We have great people ready to help you with whatever you need.</p>
                    <p className="text-center">
                      <MDBBtn outline color="black" href='/support'>
                        Find out more
                      </MDBBtn>
                    </p>
                  </div>
                </MDBCol>

              </MDBRow>
            </MDBContainer>
          </div>
            

        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isSearching: state.search.isSearching,
  isPristine: state.search.isPristine,
  searchText: state.search.searchText,
  results: state.search.results
})

const mapDispatchToProps = dispatch => bindActionCreators({
  searchTextChanged,
  getPeople
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)