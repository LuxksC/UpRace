import { useEffect, useContext } from 'react';

import { TutorialModal } from '../../components/TutorialModal';
import { useGame } from '../../hooks/useGame';

import { EndGameContext } from '../../App'

import pauseBackground from '../../assets/images/pauseBackground.png'
import redCarImg from '../../assets/images/redCar.svg'
import bgTrack from '../../assets/audio/backgroundTrack.mp3'

import '../Race/index.scss' 


export function Race(){
  const { carCrashed, setCarCrashed } = useContext(EndGameContext);

  const { gameStatus, blueCarStatus, redCarStatus, positions, updateRedCarPosition, handleGameTimeChanges, downgradeGameDistance, handleKeyDown, verifyCarCrash, handlePauseGame, handleGameOver} = useGame();

  useEffect(() => {
    handleGameOver();
  }, [gameStatus.distance, carCrashed]);
  
  useEffect(() => {
    if (!gameStatus.isPaused) {
      let redCarUpdateInterval = setInterval(() => {
        updateRedCarPosition();
        verifyCarCrash();
      }, redCarStatus.updateTime);
  
      return () => clearInterval(redCarUpdateInterval);
    } else {
      return;
    }
    
  }, [redCarStatus.verticalPosition, gameStatus.isPaused]);


  /* TIME COUNTER */
  useEffect(() => {
    if (!gameStatus.isPaused) {
      let timeInterval = setInterval(() => {
        handleGameTimeChanges();
      }, 1000);
  
      return () => clearInterval(timeInterval);
    } else {
      return;
    }
    
  }, [gameStatus.time, gameStatus.isPaused]);

  /* DISTANCE COUNTER */
  useEffect(() => {
    if (!gameStatus.isPaused) {
      let distanceInterval = setInterval(() => {
        downgradeGameDistance();
      }, (3600/blueCarStatus.speed));
  
      return () => clearInterval(distanceInterval);
    } else {
      return
    } 
  }, [gameStatus.distance, gameStatus.isPaused]);

  /* KEYBOARD EVENTS */
  useEffect(() => {
    
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown)
  })

  return (
    <div id='race'>
      <audio autoPlay loop>
        <source src={bgTrack} type="audio/mp3"/>
      </audio>
      <header className='race-header'>
        <div className="race-information">
          <p>Velocidade</p>
          <p>{blueCarStatus.speed} km/h</p>
        </div>
        <div className="race-information">
          <p>Distância</p>
          <p>{gameStatus.distance} m</p>
        </div>
        <div className="race-information">
          <p>Tempo</p>
          <p>{gameStatus.time} s</p>
        </div>
      </header>

      {gameStatus.isPaused && <TutorialModal
      showModal = {gameStatus.isPaused}
      setShowModal = {handlePauseGame}
      isInGame
      />}

      {gameStatus.isPaused && <img src={pauseBackground} alt='Pista de corrida parada' className='track'/>}

      {/* GIFF RETIRADO DO NOTION */}
      {!gameStatus.isPaused && <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F49e38bac-5a6c-4505-b7c7-742c0514bb69%2FCENARIO_anima.gif?table=block&id=f0789bc1-6482-42f8-a042-9fa71f6ed866&spaceId=398d34ba-2026-4971-8d11-e53d1787a426&userId=fe7458d9-ddea-4a9c-8857-91072f1b0f7a&cache=v2" alt="Pista de corrida em movimento" className='track'/>}

      {/* GIFF GERADO PELO CSS
      <div className='track'>
        <div className = 'gif'></div>
      </div> */}

      <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff05e46f1-8333-425c-a610-cc1e6cdda6d1%2FCARRO.png?table=block&id=50eaa5d5-bb41-486e-9638-efcdf1b5b584&spaceId=398d34ba-2026-4971-8d11-e53d1787a426&width=1050&userId=fe7458d9-ddea-4a9c-8857-91072f1b0f7a&cache=v2" alt="Fusca azul" className={`car ${blueCarStatus.position}`}/>

      {redCarStatus.isShown && <img src={redCarImg} alt="Fusca vermelho" className={`car ${positions[redCarStatus.verticalPosition][redCarStatus.horizontalPosition]}`}/>}
    </div>
  )
};