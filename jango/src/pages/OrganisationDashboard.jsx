import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import dashboard from '../../src/images/dashboard.png';
import { Icon } from '@iconify/react';
import jangoLogo from '../../src/images/jango.png'; 

const OrganisationDashboard = () => {
    return (
        <Row className="m-0 vh-100">
            <Col xl={2} className="sidebar-color p-0 ">
                <div className="sidebar side-round h-100 d-flex flex-column">
                    <div className="p-3 text-center">
                        <img src={jangoLogo} alt="Logo" className="logo mb-4" />
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
                                Employee Details
                            </h5>
                        </li>
                        <li className="menu-item py-2 px-3 ">
                            <h5>
                                <Icon icon="fluent:person-48-regular" width="22" height="22" className="me-2" />
                                Customer Details
                            </h5>
                        </li>
                        <li className="menu-item py-2 px-3 ">
                            <h5>
                                <Icon icon="lsicon:order-filled" width="22" height="22" className="me-2" />
                                Delivery Details
                            </h5>
                        </li>
                    </ul>
                </div>
            </Col>

            
            <Col xl={10} className="p-4">
                <Card className="p-2 mb-4 card-bg">
                    <h4>Dashboard</h4>
                </Card>
                <img className="w-100 vh-50" src={dashboard} alt="Dashboard" />
            </Col>
        </Row>
    );
};

export default OrganisationDashboard;
