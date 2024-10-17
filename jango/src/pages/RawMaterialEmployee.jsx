import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, Col, Form, Pagination, Row, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import jangoLogo from '../../src/images/jango.png'; 
import rawMaterial from '../images/processing.png';

const RawMaterialEmployee = () => {
  const [rawMaterials, setRawMaterials] = useState([
    {
      sno: 1,
      orderId: 'RM001',
      orderName: 'Steel Sheets',
      orderDate: '2023-10-01',
      orderStatus: 'Completed',
      statusIcon: 'fluent-mdl2:completed-solid',
    },
    {
      sno: 2,
      orderId: 'RM002',
      orderName: 'Aluminum Blocks',
      orderDate: '2023-10-02',
      orderStatus: 'Pending',
      statusIcon: 'tdesign:pending',
    },
    {
      sno: 3,
      orderId: 'RM003',
      orderName: 'Copper Wires',
      orderDate: '2023-10-03',
      orderStatus: 'Completed',
      statusIcon: 'fluent-mdl2:completed-solid',
    },
    {
      sno: 4,
      orderId: 'RM004',
      orderName: 'Aluminum Blocks',
      orderDate: '2023-10-05',
      orderStatus: 'Pending',
      statusIcon: 'tdesign:pending',
    },
    {
      sno: 5,
      orderId: 'RM005',
      orderName: 'Copper Wires',
      orderDate: '2023-10-03',
      orderStatus: 'Completed',
      statusIcon: 'fluent-mdl2:completed-solid',
    }
  ]);

  return (
    <div>
      <Row className='p-0 m-0 vh-100'>
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
                  <img src={rawMaterial} alt="rawMatrial" height='25' width='25' className='me-2' />
                  Raw Materials
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

        <Col xl={10} className='mt-4'>
          <Card className='p-2 fs-5 card-bg px-2'>Raw Materials</Card>
          <Row className="d-flex justify-content-between align-items-center mt-5">
            <Col xl={3} className="d-flex">
              <Form.Control type="text" placeholder="Search" className="me-2" />
              <Button variant="outline-success">Filter</Button>
            </Col>
          </Row>
          <Table striped bordered className='mt-3 my-5 py-4'>
            <thead className='text-center'>
              <tr>
                <th>Sno</th>
                <th>Id</th>
                <th>Material Name</th>
                <th>Date</th>
                <th>Material Status</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {rawMaterials.map((material, index) => (
                <tr key={index}>
                  <td>{material.sno}</td>
                  <td>{material.orderId}</td>
                  <td>{material.orderName}</td>
                  <td>{material.orderDate}</td>
                  <td>{material.orderStatus}</td>
                  <td className='text-center'>
                    <Icon icon={material.statusIcon} width="20" height="20" />
                  </td>
                  <td className='text-center'>
                    <Icon icon="mdi:delete" width="20" height="20" />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className='d-flex justify-content-center mt-4'>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RawMaterialEmployee;
