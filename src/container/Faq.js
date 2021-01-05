import React from 'react';
import FaqComponent from 'components/Faq';
import Spinner from 'components/Spinner';

class Faq extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <Spinner color='primary' type='grow' />
        <FaqComponent />
      </>
    );
  }
}

export default Faq;
