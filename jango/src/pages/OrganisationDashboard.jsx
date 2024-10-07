import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import dashboard from '../../src/images/dashboard.png';
import { Icon } from '@iconify/react/dist/iconify.js';

const OrganisationDashboard = () => {
    return (
        <Row className='p-0 m-0 vh-100'>

            <Col xl={2} className='sidebar-color'>
                <div className='sidebar side-round '>
                    <ul className='menu mt-5 px-3 list-unstyled text-white'>
                        <li >
                            <h4>
                                <span><Icon icon="ic:outline-dashboard" width="20" height="20" /></span>Dashboard</h4>
                        </li>
                        <li className='pt-2'>
                            <h4>
                                <Icon icon="fluent:person-support-16-filled" width="20" height="20" />
                                Employee Details</h4>
                        </li>
                        <li className='pt-2'>
                            <h4>
                                <Icon icon="fluent:person-48-regular" width="20" height="20" />
                                Customer Details</h4>
                        </li>
                        <li className='pt-2'>
                            <h4>
                                <Icon icon="lsicon:order-filled" width="20" height="20" />
                                Orders</h4>
                        </li>
                    </ul>
                </div>
            </Col>

            <Col xl={10} className='mt-4'>
                <Card className='p-2  fs-5'>Dashboard</Card>
                <img className='pt-4 w-100 vh-50' src={dashboard} alt='' />
            </Col>
        </Row>
    )
}

export default OrganisationDashboard;