import React, {useState, useEffect} from 'react';
import homeImage from '../images/HomePageImage_AirPlane.jpg'
import './Home.css';
function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [dots, setDots] = useState(''); // 초기값은 빈 문자열

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
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setDots('');
    }, 5000); // 5초 후에 팝업을 닫습니다.
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
      <img src={homeImage} alt='not found'></img>
      {showPopup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>항공편 조회중입니다.{dots}</p>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Home;