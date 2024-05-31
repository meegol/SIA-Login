import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import Card from './components/Card'
function App() {
  return (
    <Router>
      <div className="App">
        <Card>
        <Routes>
          <Route path="/" element={[<SignUp />, <SignIn />, <AuthDetails />]} />
          <Route path="/authdetails" element={<AuthDetails />} />
        </Routes>
        </Card>
      </div>
    </Router>
  );
}

export default App;