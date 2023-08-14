import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;

