import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeOrderList from './pages/EmployeeOrderList';
import OrderDetails from './pages/OrderDetails';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeOrderList />} />
        <Route path="/order/:id" element={<OrderDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
