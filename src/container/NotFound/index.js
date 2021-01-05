import React from 'react';
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation
} from 'mdbreact';

const NotFound = () => {
  return (
    <>
      <MDBEdgeHeader color='white' />
      <MDBAnimation type='zoomIn' duration='1000ms'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='8' className='mt-3 mx-auto'>
              <MDBJumbotron>
                <h1 className='text-center'>
                  <MDBIcon icon='window-restore' className='mr-2 indigo-text' />
                  Not Found
                </h1>
                <p>We can't seem to find the page you're looking for</p>
                <p>Please try another</p>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default NotFound;
