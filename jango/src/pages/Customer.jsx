import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import jangoLogo from "../../src/images/jango.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import "bootstrap/dist/css/bootstrap.min.css";

export const Customer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={2} className="sidebar-color p-0 ">
          <div className="sidebar side-round vh-100 d-flex flex-column">
            <div className="p-3 text-center">
              <img src={jangoLogo} alt="Logo" className="logo " />
            </div>
            <ul className="menu list-unstyled flex-grow-1 text-dark">
              <li className="menu-item py-2 px-3 ">
                <h5>
                  <Icon
                    icon="ic:outline-dashboard"
                    width="22"
                    height="22"
                    className="me-2"
                  />
                  Dashboard
                </h5>
              </li>
              <li className="menu-item py-2 px-3">
                <h5>
                  <Icon
                    icon="fluent:person-support-16-filled"
                    width="22"
                    height="22"
                    className="me-2"
                  />
                  Order List
                </h5>
              </li>
              <li className="menu-item py-2 px-3 ">
                <h5>
                  <Icon
                    icon="fluent:person-48-regular"
                    width="22"
                    height="22"
                    className="me-2"
                  />
                  Delivery Details
                </h5>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={10} className="p-4">
          <Card className="p-2   fs-5 flex-column justify-content-between mb-4 card-bg">
            Dashboard
          </Card>
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
