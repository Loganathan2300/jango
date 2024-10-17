import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jangoLogo from '../../images/jango.png';
import { adminSidebar } from '../constant';
import rawMaterial from '../../images/processing.png'; 
import "../../css/AdminSideBar.css";

const AdminSideBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Row className='p-0 m-0 vh-100'>
      <Col xl={2} className="sidebar-color p-0">
        <div className="sidebar side-round h-100 d-flex flex-column">
          <div className="p-3">
            <img src={jangoLogo} alt="Logo" className="logo mb-4" />
          </div>
          <ul className="menu list-unstyled flex-grow-1 text-dark">
            {adminSidebar.map((item, index) => (
              <li
                key={index}
                className={`menu-item d-flex justify-content-between align-items-center py-2 px-3 my-3 ${activeIndex === index ? 'active' : ''}`} 
                onClick={() => handleItemClick(index)}
              >
                <Link to={item.path} className="text-dark text-decoration-none d-flex align-items-center">
                  {/* {item.icon} */}
                  {item.id === 4 ? (
                      <img src={rawMaterial} alt="Raw Material" height="25" width="25" className="me-2"/>
                    ) : (
                      item.icon
                    )}
                  <span className="ms-2">{item.name}</span>
                </Link>
                {item.iconGreater}
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default AdminSideBar;


// import React, { useState } from 'react';
// import { Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import jangoLogo from '../../images/jango.png';
// import { adminSidebar } from '../constant';
// import "../../css/AdminSideBar.css";

// const AdminSideBar = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleItemClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <Row className='p-0 m-0 vh-100'>
//       <Col xl={2} className="sidebar-color p-0">
//         <div className="sidebar side-round h-100 d-flex flex-column">
//           <div className="p-3">
//             <img src={jangoLogo} alt="Logo" className="logo mb-4" />
//           </div>
//           <ul className="menu list-unstyled flex-grow-1 text-dark">
//             {adminSidebar.map((item, index) => (
//               <li
//                 key={index}
//                 className={`menu-item py-2 px-3 my-1 ${activeIndex === index ? 'active' : ''}`} 
//                 onClick={() => handleItemClick(index)}
//               >
//                 <Link to={item.link} className="text-dark text-decoration-none">
//                   <h5 className='text-secondary-emphasis'>
                    // {item.id === 4 ? (
                    //   <img src={rawMaterial} alt="Raw Material" height="25" width="25" className="me-2"/>
                    // ) : (
                    //   item.icon
                    // )}
//                     <span className="ms-2">{item.name}</span>
//                     {item.iconGreater}
//                   </h5>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default AdminSideBar;