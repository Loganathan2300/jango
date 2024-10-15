import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Form, Row, Table } from 'react-bootstrap';
import '../App.css';
import dashboard from '../../src/images/dashboard.png'
import { Icon } from '@iconify/react/dist/iconify.js';
import jangoLogo from '../../src/images/jango.png'; 


const EmployeeDashboard = () => {
  return (

    <Row className='p-0 m-0 vh-100'>

<Col xl={2} className="sidebar-color p-0 ">
                <div className="sidebar side-round h-100 d-flex flex-column">
                    <div className="p-3 text-center">
                        <img src={jangoLogo} alt="Logo" className="logo " />
                    </div>
                    <ul className="menu list-unstyled flex-grow-1 text-dark">
                        <li className="menu-item py-2 px-3 ">
                            <h5>
                                <Icon icon="ic:outline-dashboard" width="22" height="22" className="me-2" />
                                Dashboard
                            </h5>
                        </li>
                        <li className="menu-item py-2 px-3 ">
                            <h5>
                                <Icon icon="fluent:person-support-16-filled" width="22" height="22" className="me-2" />
                                Order List
                            </h5>
                        </li>
                        <li className="menu-item py-2 px-3 ">
                            <h5>
                                <Icon icon="fluent:person-48-regular" width="22" height="22" className="me-2" />
                                Delivery Details
                            </h5>
                        </li>
                      
                    </ul>
                </div>
            </Col>

      <Col xl={10} className='mt-4'>
      <Card  className='p-2   fs-5 flex-column justify-content-between'>
        Dashboard
          </Card>
      <img className='mt-4 w-100' src={dashboard}  />
     </Col>
    </Row>
  );
};

export default EmployeeDashboard;
