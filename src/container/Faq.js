import React from 'react';
import FaqComponent from 'components/Faq';

class Faq extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <FaqComponent />
      </>
    );
  }
}

export default Faq;
