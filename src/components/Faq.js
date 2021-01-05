import React from 'react'
import { Accordion, Button, Card, Col, Container, Row} from 'react-bootstrap';

class Faq extends React.Component {
  render() {
    return <>
      <Container>
        <Row>
          <Col>
            <h1>Faq</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h4>What is this website all about?</h4>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>
                      Twitter timelines can give an ideas of view of politicians, commentators, analysts and other people of interest.
                      This website searches the timelines of people of interest and sorts the Tweets into key categories.
                    </p>
                    <p></p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <h4>How far back does the information ? </h4>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p>
                      Timeline searches are restricited to tweets from or after December 2020.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  }
}
export default Faq
