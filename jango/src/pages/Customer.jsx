import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Customer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={2} className="sidebar-color vh-100">
          <div className="sidebar side-round p-3">
            <h4 className="">Logo</h4>
            <ul className="menu mt-4 list-unstyled text-white">
              <li>
                <h5>Dashboard</h5>
              </li>
            </ul>
          </div>
        </Col>

        <Col xs={10} className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Dashboard</h2>
            <Button variant="primary">New Orders</Button>
          </div>

          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Customer Orders</Card.Title>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Pending</span>
                    <Button variant="warning">7 in Batches</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Delivered</Card.Title>
                  <div>
                    <p>Placeholder for a chart (Pie/Bar chart)</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
