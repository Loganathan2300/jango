import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';

const Header = ({userName,headingName}) => {
  return (
    <div>
      <Card className='p-1 fs-5 card-bg px-2'>
        <Row className="align-items-center">
          <Col className="d-flex">
            <h4 className='px-2 py-1 mb-0'>{headingName}</h4>
          </Col>
          <Col className="d-flex justify-content-end">
            <Icon icon="material-symbols:account-circle" className='me-2' width="30" height="30" />
            <Dropdown>
              <Dropdown.Toggle as="p" className="mb-0 fs-5 " style={{ cursor: 'pointer' }}>
                {userName}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Header;
