import React from 'react'
import { Accordion, Button, Card} from 'react-bootstrap';
import './styles.css';

const FaqItem = (props) => {
  const {id, question, answer} = props;
  return (
    <>
      <Card className="faq-item">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={id}>
            <h5>{question}</h5>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={id}>
          <Card.Body>
            <p>
              {answer}
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default FaqItem
