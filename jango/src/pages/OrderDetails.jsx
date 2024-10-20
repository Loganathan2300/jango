import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Row, Table, Spinner } from 'react-bootstrap';
import { Icon } from '@iconify/react'; 
import jango from '../../src/images/jango.png';

const OrderDetails = () => {
  const { id } = useParams();  
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const mockOrderDetails = {
      id: id,
      orderName: 'OrderName',
      phoneNumber: '123-456-7890',
      statusId: 'Confirmed',
      orderConfirmedDate: '2023-10-05',
      archived: false,
      userId: 'USR001',
      workOrderReady: true,
      specifications: {
        tagWidth: 50.0,
        tagHeight: 20.0,
        material: 'Steel',
        letterColour: 'Red',
        letterHeight: 12.0,
        background: 'Black',
        thickness: 5.0,
        imageURL: 'https://example.com/image.png'
      }
    };

    const fetchOrderDetails = () => {
      setTimeout(() => {
        setOrderDetails(mockOrderDetails);  
        setLoading(false); 
      }, 1000);
    };

    fetchOrderDetails(); 
  }, [id]);

  if (loading) return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );

  return (
    <Row className='p-0 m-0 vh-100'>
      <Col xl={2} className='sidebar p-3'>
        <div className='sidebar h-100'>
          <ul className='list-unstyled'>
            <li className='logo-container'>
              <img src={jango} className="logo" alt="Logo" />
            </li>
            <li className='mb-4 mt-4 '>
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

      <Col xl={10} className='p-4 main-content'>
        <Card className='p-4 fs-5 '>
          <h2 className='ps-2 card-bg rounded-2'>Order Details</h2>
          <Table striped bordered className='mt-4'>
            <tbody>
              {Object.entries({
                'Order Id': orderDetails.id,
                'Phone Number': orderDetails.phoneNumber,
                'Status': orderDetails.statusId,
                'Order Confirmed Date': orderDetails.orderConfirmedDate,
                'Archived': orderDetails.archived ? 'Yes' : 'No',
                'User ID': orderDetails.userId,
                'Work Order Ready': orderDetails.workOrderReady ? 'Yes' : 'No'
              }).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h3>Specifications</h3>
          <Table striped bordered className='mt-4'>
            <tbody>
              {Object.entries(orderDetails.specifications).map(([key, value]) => (
                <tr key={key}>
                  <td>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                  <td>
                    {typeof value === 'string' && value.startsWith('http') ? (
                      <a href={value} target='_blank' rel='noreferrer'>
                        View Image
                      </a>
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  );
};

export default OrderDetails;
