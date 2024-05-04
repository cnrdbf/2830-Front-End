import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="containter mt-4">
       <Routes>
          <Route path="/" element={EventList} />
          </Routes>
          <Routes>
          <Route path="/events/:id" element={EventDetails} />
          </Routes>
          <Routes>
          <Route path="/create-event" element={EventForm} />
          </Routes>
          <Routes>
            <Route path="/login" element={Login} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;

