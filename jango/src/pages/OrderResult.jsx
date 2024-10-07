import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Pagination,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const OrderResult = () => {
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
              <li>
                <h5>Order Result</h5>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={10} className="p-4">
          <h2>Order List</h2>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex">
              <Form.Control type="text" placeholder="Search" className="me-2" />
              <Button variant="outline-secondary">Filter</Button>
            </div>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Delivered Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345</td>
                <td>Pending</td>
                <td>12-09-2024</td>
                <td>
                  <Button variant="info" size="sm" className="me-2">
                    View
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>13456</td>
                <td>Delivery</td>
                <td>13-09-2024</td>
                <td>
                  <Button variant="info" size="sm" className="me-2">
                    View
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>14433</td>
                <td>Pending</td>
                <td>14-09-2024</td>
                <td>
                  <Button variant="info" size="sm" className="me-2">
                    View
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>

          <div className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
