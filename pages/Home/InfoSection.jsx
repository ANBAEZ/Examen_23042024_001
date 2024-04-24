import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function InfoSection() {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col>
          <h2>¿Por qué elegir Mi tienda Online?</h2>
          <p>
            Solo productos auténticos y de alta calidad que duran más tiempo y ofrecen un mejor rendimiento
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoSection;