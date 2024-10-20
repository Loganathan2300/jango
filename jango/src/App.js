import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import EmployeeOrderList from './pages/EmployeeOrderList';
import OrderDetails from './pages/OrderDetails';
import OrganisationCustomerPage from './pages/OrganisationCustomerPage';
import EmployeeDashboard from './pages/EmployeeDashboard';
import OrganisationOrders from './pages/OrganisationOrders';
import EmployeeDelivery from './pages/EmployeeDelivery';
import OrganisationDashboard from './pages/OrganisationDashboard';
import OrganisationDelivery from './pages/OrganisationDelivery';  
import LoginPage from './pages/Login Page';
import OrganisationEmployeePage from './pages/OrganisationEmployeePage';
import { Customer } from './pages/Customer';
import { OrderResult } from './pages/OrderResult';
import RawMaterialEmployee from './pages/RawMaterialEmployee';
import RawMaterialAdmin from './pages/RawMaterialAdmin';
import Header from './pages/layout/Header';
import AdminSideBar from './pages/layout/AdminSideBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/employee/orders" element={<EmployeeOrderList />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/organisation/customers" element={<OrganisationCustomerPage />} />
        <Route path='/organisation/employees' element={<OrganisationEmployeePage/>}/>
        <Route path="/organisation/orders" element={<OrganisationOrders />} />
        <Route path='organisation/dashboard' element={<OrganisationDashboard/>}/>
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee/delivery" element={<EmployeeDelivery />} />
        <Route path="/organisation/dashboard" element={<OrganisationDashboard />} />
        <Route path="/organisation/delivery" element={<OrganisationDelivery />} />
        <Route path='/customer/dashboard' element={<Customer/>}/>
        <Route path='/order-result/dashboard' element={<OrderResult/>}/>
        <Route path='/raw-material/employee' element={<RawMaterialEmployee/>}/>
        <Route path='/raw-material/admin' element={<RawMaterialAdmin/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/admin-sidebar' element={<AdminSideBar/>}/>
      </Routes>
    </Router>
  );
};

export default App;
