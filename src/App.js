import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import LandingPage from './pages/landing';
import IncorrectRoute from './pages/incorrectroute';
import Homepage from './pages/main';
import AddExpense from './pages/updateExpense';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/main" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/addExpense" element={<AddExpense />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<IncorrectRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
