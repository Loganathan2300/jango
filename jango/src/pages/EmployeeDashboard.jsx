import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Form, Row, Table } from 'react-bootstrap';
import '../App.css';
import dashboard from '../../src/images/dashboard.png'
import { Icon } from '@iconify/react/dist/iconify.js';

const EmployeeDashboard = () => {
  return (

    <Row className='p-0 m-0 vh-100'>

      <Col xl={2} className='sidebar-color'>
      <div className='sidebar side-round '>
          <ul className='menu mt-5 px-3 list-unstyled text-white'>
            <li >
              <h4>
                <span><Icon icon="ic:outline-dashboard" width="20" height="20"/></span>
                Dashboard</h4>
            </li>
            <li className='pt-2 '>
              <h4>
                <span><Icon icon="lsicon:order-outline" width="20" height="20" /></span>OrdersList</h4>
            </li>
            <li className='pt-2'>
              <h4>
                <span><Icon icon="carbon:delivery" width="20" height="20" /></span>
                Delivery Details</h4>
            </li>
          </ul>
        </div>
      </Col>

      <Col xl={10} className='mt-4'>
      <Card  className='p-2   fs-5 flex-column justify-content-between'>
        Dashboard
          </Card>
      <img className='mt-4 w-75' src={dashboard}  />
     </Col>
    </Row>
  );
};

export default EmployeeDashboard;
