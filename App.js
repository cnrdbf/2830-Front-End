import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" exact element={<EventList />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/create-event" element={<EventForm />} />
          </Routes>
          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="mb-0">Login</h3>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

