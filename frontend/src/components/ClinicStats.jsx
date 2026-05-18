import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const stats = [
  { label: 'Patients Served', value: '8.2K' },
  { label: 'Appointments Today', value: '134' },
  { label: 'Doctors Available', value: '24' },
];

const ClinicStats = () => {
  return (
    <Row className="g-4 mb-5">
      {stats.map((item) => (
        <Col key={item.label} md={4}>
          <Card className="text-center border-0 shadow-sm h-100">
            <Card.Body>
              <Card.Title className="display-6 fw-bold">{item.value}</Card.Title>
              <Card.Text className="text-muted">{item.label}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ClinicStats;
