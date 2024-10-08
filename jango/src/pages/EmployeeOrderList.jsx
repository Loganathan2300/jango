import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Form, Pagination, Row, Table } from 'react-bootstrap';
import { Icon } from '@iconify/react'; 
import '../App.css';  

const EmployeeOrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`); // Navigate to the order detail page
  };

  return (
    <Row className='p-0 m-0 vh-100'>
      {/* Sidebar */}
      <Col xl={2} className='sidebar p-3'>
        <div className='sidebar h-100'>
          <ul className='list-unstyled'>
            <li>
             <h1 className='ps-4'>  Jango</h1>
            </li>
            <li className='mb-4 mt-4'>
              <h5 className='sidebar-item'>
                <Icon icon="ic:outline-dashboard" width="22" height="22" className='me-2' />
                Dashboard
              </h5>
            </li>
            <li className='mb-4'>
              <h5 className='sidebar-item'>
                <Icon icon="lsicon:order-outline" width="22" height="22" className='me-2' />
                Orders List
              </h5>
            </li>
            <li className='mb-4'>
              <h5 className='sidebar-item'>
                <Icon icon="carbon:delivery" width="22" height="22" className='me-2' />
                Delivery Details
              </h5>
            </li>
          </ul>
        </div>
      </Col>

      {/* Main Content */}
      <Col xl={10} className=' p-4'>
        <Card className='p-3 fs-5  card-bg'>
          <h4 className='text-dark'>Order List</h4>
        </Card>
        <Row className='d-flex justify-content-between mt-3 mb-3'>
          <Col xl={4}>
            <Form.Control 
              className='search-bar shadow-sm' 
              type="text" 
              placeholder="Search orders..." 
            />
          </Col>
        </Row>
        <Table className='shadow-sm table-bg'>
      <thead className='table-header'>
        <tr>
          <th>Sno</th>
          <th>Order Id</th>
          <th>Order Name</th>
          <th>Phone Number</th>
          <th>Status</th>
          <th>Order Confirmed Date</th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={() => handleRowClick('orderId1')} className='clickable-row'>
          <td>1</td>
          <td>ORD001</td>
          <td>Mark Otto</td>
          <td>123-456-7890</td>
          <td>Confirmed</td>
          <td>2023-10-05</td>
        </tr>
        <tr onClick={() => handleRowClick('orderId2')} className='clickable-row'>
          <td>2</td>
          <td>ORD002</td>
          <td>Jacob Thornton</td>
          <td>234-567-8901</td>
          <td>Pending</td>
          <td>2023-10-04</td>
        </tr>
        <tr onClick={() => handleRowClick('orderId3')} className='clickable-row'>
          <td>3</td>
          <td>ORD003</td>
          <td>Larry Bird</td>
          <td>345-678-9012</td>
          <td>Shipped</td>
          <td>2023-10-03</td>
        </tr>
      </tbody>
    </Table>
        <div className='d-flex justify-content-center mt-4'>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item active>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </Col>
    </Row>
  );
};

export default EmployeeOrderList;
