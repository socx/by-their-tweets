import React from 'react';
import { Accordion, Col, Container, Row} from 'react-bootstrap';
import FaqItem from 'components/FaqItem';

class Faq extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h1>Faq</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion defaultActiveKey="0">
                <FaqItem
                  id="0"
                  question="What is this website all about?"
                  answer={<>
                  Twitter timelines can give an ideas of view of politicians, commentators, analysts and other people of interest.
                  This website searches the timelines of people of interest and sorts the Tweets into key categories.
                  </>}
                />
                <FaqItem
                  id="1"
                  question="How far back does the information?"
                  answer={<>
                  Timeline searches are restricited to tweets from and after December 2020.
                  </>}
                />
                <FaqItem
                  id="2"
                  question="Why can't I find my member of parliament in the search?"
                  answer={<>
                    This may mean thhey don't have a twitter handle. If you believe otherwise you can get in touch via <a alt='support email' href='mailto:support@bytheirtweets.co.uk'>support@bytheirtweets.co.uk</a>
                  </>}
                />
              </Accordion>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Faq;
