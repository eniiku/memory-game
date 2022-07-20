import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const ClassicPage = () => {
  return (
    <div className="classic-page">
      <Header />
      <Outlet />
    </div>
  );
};

export default ClassicPage;
