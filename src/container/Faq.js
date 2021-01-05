import React from 'react';
import {
  MDBEdgeHeader
} from 'mdbreact';
// import './styles.css';
import FaqComponent from 'components/Faq';
import Spinner from 'components/Spinner';

class Faq extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        {/* <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />  */}
        <Spinner color='primary' type='grow' />
        <FaqComponent />
      </>
    );
  }
}

export default Faq;