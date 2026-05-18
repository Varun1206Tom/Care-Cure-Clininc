import React from 'react';
import { Card, Button } from 'react-bootstrap';

const FeatureCard = ({ title, text, buttonText, variant = 'primary' }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{text}</Card.Text>
        <Button variant={variant} className="mt-3 align-self-start">
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FeatureCard;
