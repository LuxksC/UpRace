import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { TutorialModal } from '../../components/TutorialModal';

import pauseBackground from '../../assets/images/pauseBackground.png'
import redCarImg from '../../assets/images/redCar.svg'

import '../Race/index.scss' 

export function Race(){

  const history = useHistory();

  const [isPaused, setIsPaused] = useState(false);
  const [carIsCrashed, setCarIsCrashed] = useState(false);

  const positions = [['top-left', 'top-center', 'top-right'],['mid-left', 'mid-center', 'mid-right'],['bottom-left', 'bottom-center', 'bottom-right']];

  const [redCarVerticalPosition, setRedCarVerticalPosition] = useState(0);
  const [redCarHorizontalPosition, setRedCarHorizontalPosition] = useState(1);
  const [updateTimeRedCar, setUpdateTimeRedCar] = useState(1000);
  const [showRedCar, setShowRedCar] = useState(true);

  const [blueCarPosition, setBlueCarPosition] = useState('bottom-center');
  const [speed, setSpeed] = useState(40);
  const [distance, setDistance] = useState(3300);
  const [time, setTime] = useState(0);

  const handleGameOver = () => {
    if (blueCarPosition === positions[redCarVerticalPosition][redCarHorizontalPosition] && showRedCar) {
      setCarIsCrashed(true);
      history.push('/gameover');
    }
  }

 /*  RED CAR UPDATE POSITION */
 const updateRedCarPosition = () => {
  if (redCarVerticalPosition === 2) {
    /* setShowRedCar(false); */
    setRedCarVerticalPosition(0);
    setRedCarHorizontalPosition(Math.floor(Math.random() * (2 - 0 + 1)) + 0);
  } else {
    setRedCarVerticalPosition(redCarVerticalPosition+1);
    /* setRedCarHorizontalPosition(Math.floor(Math.random() * (2 - 0)) + 0); */
  }
}

  useEffect(() => {
    if (!isPaused) {
      let redCarUpdateInterval = setInterval(() => {
        updateRedCarPosition();
        handleGameOver();
      }, updateTimeRedCar);
  
      return () => clearInterval(redCarUpdateInterval);
    } else {
      return;
    }
    
  }, [redCarVerticalPosition, isPaused]);


  /* TIME COUNTER */
  useEffect(() => {
    if (!isPaused) {
      let timeInterval = setInterval(() => {
        setTime(time+1);
      }, 1000);
  
      return () => clearInterval(timeInterval);
    } else {
      return;
    }
    
  }, [time, isPaused]);

  /* DISTANCE COUNTER */
  useEffect(() => {
    if (!isPaused) {
      let distanceInterval = setInterval(() => {
        setDistance(distance-1);
      }, 90);
  
      return () => clearInterval(distanceInterval);
    } else {
      return
    } 
  }, [distance, isPaused]);

 /*  KEY DOWN EVENTS */
 const handleKeyDown = (event: KeyboardEvent) => {
  if (!isPaused) {
    switch(event.key) {
      case 's': case 'S':
        setBlueCarPosition('bottom-center');
        console.log('s')
        break;
      case 'a': case 'A':
        setBlueCarPosition('bottom-left');
        console.log('a')
        break;
      case 'd': case 'D':
        setBlueCarPosition('bottom-right');
        console.log('d')
        break;
      case 'ArrowRight':
        switch (blueCarPosition) {
          case 'bottom-left':
            setBlueCarPosition('bottom-center');
            console.log('ArrowCenter')
            break;
          case 'bottom-center':
            setBlueCarPosition('bottom-right');
            console.log('ArrowRight')
            break;
        }
        break;
      case 'ArrowLeft':
        switch (blueCarPosition) {
          case 'bottom-center':
            setBlueCarPosition('bottom-left');
            console.log('ArrowLeft')
            break;
          case 'bottom-right':
            setBlueCarPosition('bottom-center');
            console.log('ArrowLeftCenter')
            break;
        }
        break;
      case 'Escape':
        setIsPaused(!isPaused);
        break;  
  }
  } else {
    switch(event.key) {
      case 'Escape':
        setIsPaused(!isPaused);
        break;  
    }
  }
}

  useEffect(() => {
    
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown)
  })

  return (
    <div id='race'>
      <header className='race-header'>
        <div className="race-information">
          <p>Velocidade</p>
          <p>{speed} km/h</p>
        </div>
        <div className="race-information">
          <p>Distância</p>
          <p>{distance} m</p>
        </div>
        <div className="race-information">
          <p>Tempo</p>
          <p>{time} s</p>
        </div>
      </header>

      {isPaused && <TutorialModal
      formSubmited = {isPaused}
      setFormSubmited = {setIsPaused}
      isInGame
      />}

      {isPaused && <img src={pauseBackground} alt='Pista de corrida parada' className='track'/>}

      {/* GIFF RETIRADO DO NOTION */}
      {!isPaused && <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F49e38bac-5a6c-4505-b7c7-742c0514bb69%2FCENARIO_anima.gif?table=block&id=f0789bc1-6482-42f8-a042-9fa71f6ed866&spaceId=398d34ba-2026-4971-8d11-e53d1787a426&userId=fe7458d9-ddea-4a9c-8857-91072f1b0f7a&cache=v2" alt="Pista de corrida em movimento" className='track'/>}

      {/* GIFF GERADO PELO CSS
      <div className='track'>
        <div className = 'gif'></div>
      </div> */}

      <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff05e46f1-8333-425c-a610-cc1e6cdda6d1%2FCARRO.png?table=block&id=50eaa5d5-bb41-486e-9638-efcdf1b5b584&spaceId=398d34ba-2026-4971-8d11-e53d1787a426&width=1050&userId=fe7458d9-ddea-4a9c-8857-91072f1b0f7a&cache=v2" alt="Fusca azul" className={`car ${blueCarPosition}`}/>

      {showRedCar && <img src={redCarImg} alt="Fusca vermelho" className={`car ${positions[redCarVerticalPosition][redCarHorizontalPosition]}`}/>}

      
    </div>
  )
};