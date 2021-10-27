import { useState, useContext } from "react";

import { EndGameContext } from '../App'

import { useHistory } from "react-router-dom";

export function useGame() {
  const { carCrashed, setCarCrashed } = useContext(EndGameContext);
  const history = useHistory();
  
  const positions = [['top-left', 'top-center', 'top-right'],['mid-left', 'mid-center', 'mid-right'],['bottom-left', 'bottom-center', 'bottom-right']];

  const [gameStatus, setGameStatus] = useState({
    isPaused: false,
    playerWin: false,
    distance: 1500,
    time: 0,
  });

  const [blueCarStatus, setBlueCarStatus] = useState({
    position: 'bottom-center',
    speed: 40,
  })

  const [redCarStatus, setRedCarStatus] = useState({
    isShown: true,
    verticalPosition: 0,
    horizontalPosition: 1,
    updateTime: 700,
  })

  const updateRedCarPosition = () => {
    if (redCarStatus.verticalPosition === 2) {
      setRedCarStatus( redCarStatus => ({
        ...redCarStatus,
        verticalPosition: 0,
        horizontalPosition: (Math.floor(Math.random() * (2 - 0 + 1)) + 0),
      }))
    } else {
      setRedCarStatus( redCarStatus => ({
        ...redCarStatus,
        verticalPosition: redCarStatus.verticalPosition+1,
      }))
    }
  }

  const handleGameTimeChanges = () => {
    setGameStatus( gameStatus => ({
      ...gameStatus,
      time: gameStatus.time+1,
    }))

    if (gameStatus.time%13===0 && redCarStatus.updateTime>200) {
      setRedCarStatus( redCarStatus => ({
        ...redCarStatus,
        updateTime: redCarStatus.updateTime-100,
      }))
      setBlueCarStatus( blueCarStatus => ({
        ...blueCarStatus,
        speed: blueCarStatus.speed+10,
      }))
      console.log(redCarStatus.updateTime)
    }
  }

  const downgradeGameDistance = () => {
    setGameStatus( gameStatus => ({
      ...gameStatus,
      distance: gameStatus.distance-1,
    }));
  }

  const handlePauseGame = (value: boolean) => {
    setGameStatus ( gameStatus => ({
      ...gameStatus,
      isPaused: value,
    }))
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!gameStatus.isPaused) {
      switch(event.key) {
        case 's': case 'S':
          setBlueCarStatus(blueCarStatus => ({
            ...blueCarStatus,
            position: 'bottom-center',
          }));
          break;
        case 'a': case 'A':
          setBlueCarStatus(blueCarStatus => ({
            ...blueCarStatus,
            position: 'bottom-left',
          }));
          break;
        case 'd': case 'D':
          setBlueCarStatus(blueCarStatus => ({
            ...blueCarStatus,
            position: 'bottom-right',
          }));
          break;
        case 'ArrowRight':
          switch (blueCarStatus.position) {
            case 'bottom-left':
              setBlueCarStatus(blueCarStatus => ({
                ...blueCarStatus,
                position: 'bottom-center',
              }));
              break;
            case 'bottom-center':
              setBlueCarStatus(blueCarStatus => ({
                ...blueCarStatus,
                position: 'bottom-right',
              }));
              break;
          }
          break;
        case 'ArrowLeft':
          switch (blueCarStatus.position) {
            case 'bottom-center':
              setBlueCarStatus(blueCarStatus => ({
                ...blueCarStatus,
                position: 'bottom-left',
              }));
              break;
            case 'bottom-right':
              setBlueCarStatus(blueCarStatus => ({
                ...blueCarStatus,
                position: 'bottom-center',
              }));
              break;
          }
          break;
        case 'Escape':
          setGameStatus(gameStatus => ({
            ...gameStatus,
            isPaused: true,
          }));
          break;  
    }
    } else {
      switch(event.key) {
        case 'Escape':
          setGameStatus(gameStatus => ({
            ...gameStatus,
            isPaused: false,
          }));
          break;  
      }
    }
  }

  const verifyCarCrash = () => {
    if (blueCarStatus.position === positions[redCarStatus.verticalPosition][redCarStatus.horizontalPosition] && redCarStatus.isShown) {
      setCarCrashed(true);
    }
  }

  const handleGameOver = () => {
    if (gameStatus.distance === 0 || carCrashed) {
      history.push('/gameover');
    }
  }

  return { gameStatus, blueCarStatus, redCarStatus, positions, updateRedCarPosition, handleGameTimeChanges, downgradeGameDistance, handleKeyDown, verifyCarCrash, handlePauseGame, handleGameOver};

}