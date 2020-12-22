import React from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { API_ROOT, REMOTE_API_ROOT } from './constants/utils';

export class SearchForm extends React.Component {
  state = {
    searchText: '',
    isSearching: false
  };
    
  handleSubmit = async (event) => {
    const apiRoot = window.location.host.includes('localhost') ? API_ROOT : REMOTE_API_ROOT;
    event.preventDefault();
    this.setState({ isSearching: true });
    axios.get(`${apiRoot}/persons/constituency/${this.state.searchText}`)
      .then((mps) => {
        this.props.onSubmit({
          results: mps.data,
          searchText: this.state.searchText
        });
        this.setState({
          searchText: '',
          isSearching: false
        });
      });
  };
 
  render() {
    const {isSearching, searchText }= this.state;
    return (
      <Container className='d-flex flex-column align-items-center'>
        <Row className="justify-content-md-center">
          <Col md="auto"><h1 className="mb-5">By Their Tweets</h1></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label htmlFor="locationInput" srOnly>
                    Postcode/County
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="locationInput"
                    className="mb-4"
                    value={searchText}
                    readOnly={isSearching}
                    onChange={event => this.setState({ searchText: event.target.value })}
                    placeholder="Enter constituency, town or county"
                    required
                  />
                </Col>
                <Col xs="auto">
                  <Button className="mb-4" type="submit">
                    {isSearching ? 'Searching…' : 'Search'}
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}