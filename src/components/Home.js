import React, {useState, useEffect} from 'react';
import axios from 'axios';
import homeImage from '../images/HomePageImage_AirPlane.jpg'
import './Home.css';
function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [dots, setDots] = useState(''); // 초기값은 빈 문자열
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    let intervalId;

    if (showPopup) {
      intervalId = setInterval(() => {
        // 현재 점의 개수에 따라 다음 점 개수를 결정
        setDots((prevDots) => {
          switch (prevDots) {
            case '':
              return '.';
            case '.':
              return '..';
            default:
              return '';
          }
        });
      }, 750); // 1초마다 점이 변경됩니다.
    }

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트되면 인터벌을 정리합니다.
  }, [showPopup]);




  const handleInquireClick = () => {
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    

    if (!departure || !arrival) {
      alert('출발 및 도착 시간을 입력하세요.');
      return;
    }

    setShowPopup(true);

    axios.get(`/api/flights`, {
      params: {
        departure: departure,
        arrival: arrival
      }
    })
    .then(response => {
      if (response.data) {
        setFlightData(response.data);
      } else {
        alert('조회된 데이터가 없습니다.');
      }
      setShowPopup(false);
      setDots('');
    })
    .catch(error => {
      console.error('Error fetching flight data:', error);
      alert('데이터 조회 중 오류가 발생했습니다.');
      setShowPopup(false);
      setDots('');
    });
  };
  const formatTime = (timeString) => {
    return new Date(timeString).toLocaleString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  };

  const handleCloseModal = () => {
    setShowPopup(false);
    setDots('');
  };

  return (
    <div>
      <h2 id='airplane-reservation'>항공편 예약</h2> 
      <div id='inquire-airplane'>
        <input id='departure' type='datetime-local'></input>
        <input id='arrival' type='datetime-local'></input> 
        <button onClick={handleInquireClick}>조회</button>
      </div>
      {flightData && (
        <div className="flight-data">
          <p>출발 시간: {formatTime(flightData.departure)}</p>
          <p>도착 시간: {formatTime(flightData.arrival)}</p>
          {/* 기타 데이터 필드 추가 */}
        </div>
      )}
      <img src={homeImage} alt='not found'></img>
      {showPopup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>항공편 조회중입니다.{dots}</p>
          </div>
        </div>
      )}
     
    </div>
  );
}

export default Home;