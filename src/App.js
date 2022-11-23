import './App.css';
import React from 'react';
import CustomHeader from './layouts/CustomHeader';
import Routes from './routes/Routes';
import CustomFooter from './layouts/CustomFooter';

export default function App() {
  return (
    <React.Fragment>
      <CustomHeader />
      <Routes />
      <CustomFooter />
    </React.Fragment>
  );
}
