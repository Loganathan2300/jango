import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import dashboard from '../../src/images/dashboard.png';

const OrganisationDashboard = () => {
    return (
        <Row className='p-0 m-0 vh-100'>

            <Col xl={2} className='sidebar-color'>
                <div className='sidebar side-round '>
                    <ul className='menu mt-5 px-3 list-unstyled text-white'>
                        <li >
                            <h4>Dashboard</h4>
                        </li>
                        <li className='pt-2'>
                            <h4>Employee Details</h4>
                        </li>
                        <li className='pt-2'>
                            <h4>Delivery Details</h4>
                        </li>
                    </ul>
                </div>
            </Col>

            <Col xl={10} className='mt-4'>
                <Card className='p-2  fs-5'>Dashboard</Card>
                <img className='pt-4 w-100 vh-50' src={dashboard} alt=''/>   
            </Col>
        </Row>
    )
}

export default OrganisationDashboard;