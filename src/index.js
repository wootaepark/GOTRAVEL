import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link, NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  background-color: #007bff; /* Adjusted color for a travel theme */
  text-align: center;
`;

const LargeButton = styled(StyledButton)`
  font-size: 24px; /* Reduced font size for better readability */
`;

// Adjusted button color for a travel theme
const PrimaryButton = styled.button`
  color: ${props => props.primary ? 'white' : '#007bff'};
  background-color: ${props => props.primary ? '#007bff' : 'white'};
`;

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

// Sample data for travel destinations
const destinations = [
  { id: 1, name: 'Paris', description: 'The City of Light' },
  { id: 2, name: 'Tokyo', description: 'Vibrant Metropolis' },
  { id: 3, name: 'New York', description: 'The Big Apple' },
];

function Destination() {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === Number(id));

  return (
    <div>
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
    </div>
  );
}

function Home(){
  return (
    <div>
      <h2>HomePage</h2>
    </div>
  );
}

function Destinations() {
  return (
    <div>
      <h2>Destinations</h2>
      <ul>
        {destinations.map(dest => (
          <li key={dest.id}>
            <NavLink to={`/destinations/${dest.id}`}>{dest.name}</NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/:id" element={<Destination />} />
      </Routes>
    </div>
  );
}

function Packages() {
  return (
    <div>
      <h2>Packages</h2>
      <p>Explore our exciting travel packages.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>Learn about our travel agency and our mission.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact us for inquiries or bookings.</p>
      <p>email - wootaepark@korea.ac.kr</p>
      <p>phone - 010-0000-0000</p>
    </div>
  );
}

function App() {
  return (
    <AppContainer>
      <h1 id='title'>Travel Archive - Explore Destinations</h1>
      <nav>
        
         <div id='menu-bar'>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/destinations">여행지</NavLink>
          <NavLink to="/packages">패키지 여행</NavLink>
          <NavLink to="/about">소개글</NavLink>
          <NavLink to="/contact">연락처</NavLink>
          
          </div> 
          
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations/*" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </AppContainer>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);

reportWebVitals();
