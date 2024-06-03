import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link, NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import aboutPageImg from './images/air_package.png'




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
  { id: 1, name: '파리', description: 'The City of Light' },
  { id: 2, name: '도쿄', description: 'Vibrant Metropolis' },
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




function Destinations() {
  return (
    <div>
      <h2>여행 목적지</h2>
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
      <h2>소개글</h2>
      <p>저희 여행 정보 획득 및 예약 통합 플랫폼 <b>GoTravel</b> 에서는 고객에게 최고의 정보를 제공하고 최저가의 항공편 및 숙박을 제공합니다.</p>
      <img src={aboutPageImg} alt='대체 이미지'></img>
    </div>
   
    
  );
}

function Contact() {
  return (
    <div>
      <h2>연락하기</h2>
      <p>아래 방법들을 통해 연락해주세요</p>
      <p>email - wootaepark@korea.ac.kr</p>
      <p>phone - 010-0000-0000</p>
    </div>
  );
}

function App() {
  return (
    <AppContainer>
      <h1 id='title'><NavLink to="/" end className="nav-link">Go Travel</NavLink></h1>
      <nav>
        
         <div id='menu-bar'>
          <NavLink to="/" className="nav-link-menubar"><b>Home</b></NavLink>
          <NavLink to="/destinations" className="nav-link-menubar"><b>여행지</b></NavLink>
          <NavLink to="/packages" className="nav-link-menubar"><b>패키지 여행</b> </NavLink>
          <NavLink to="/about" className="nav-link-menubar"><b>소개글</b></NavLink>
          <NavLink to="/contact" className="nav-link-menubar"><b>연락처</b></NavLink>
          
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
