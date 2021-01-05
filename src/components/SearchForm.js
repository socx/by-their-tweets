import React, { Component} from 'react';
import {
  MDBBtn,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInputGroup
} from 'mdbreact';
import { Form } from 'react-bootstrap';

class SearchForm extends Component {

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.getPeople();
  };

  render() {
    const { 
      theme, searchText, results, isSearching, isPristine,
      searchTextChanged, getPeople
    } = this.props;
    return (
      <>
        <MDBRow>
          <MDBCol
            md='7'
            lg='4'
            className='mx-auto float-none white z-depth-1'
          >
            <MDBCardBody className='text-center'>
              <Form onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div className='col-xs-12 col-md-12 text-left'>
                    Enter constituency 
                  </div>
                  <div className='col-xs-12 col-md-12'>
                    <MDBInputGroup
                      hint="constituency"
                      containerClassName="mb-3"
                      color={theme}
                      value={(searchText || '').toString()}
                      onChange={e => searchTextChanged(e.target.value)}
                      append={
                        <MDBBtn className="m-0 px-3 py-2 z-depth-0" color={theme}
                          onClick={() => getPeople()}
                          disabled={isSearching || searchText.length < 2}
                        >
                          Search
                        </MDBBtn>
                      }
                    />
                  </div>
                  {!isPristine &&
                    <div className='mt-4 col-xs-12 col-md-12'>
                      {(results && results.length) || 0} records found for <span className='font-weight-bold font-italic'>{searchText}</span>
                    </div>
                  }
                  
                </div>
              </Form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </>
    );
  }
};

export default SearchForm;
