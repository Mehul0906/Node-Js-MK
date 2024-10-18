import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManyTasks from './components/ManyTasks';
import Update from './components/Update';
import NotFound from './components/NotFound';
import Add from './components/AddProduct';


const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<ManyTasks />} />
    <Route path="/update/:id" element={<Update />} />
    <Route path="/AddProduct" element={<Add />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  );
};

export default AllRoutes;