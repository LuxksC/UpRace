import { useEffect, useState } from 'react';

import '../Race/index.scss' 

export function Race(){

  const [isPaused, setIsPaused] = useState(false)
  const [carPosition, setCarPosition] = useState('center');
  const [speed, setSpeed] = useState(40);
  const [distance, setDistance] = useState(3300);
  const [time, setTime] = useState(0);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch(event.key) {
      case 's': case 'S':
        setCarPosition('center');
        console.log('s')
        break;
      case 'a': case 'A':
        setCarPosition('left');
        console.log('a')
        break;
      case 'd': case 'D':
        setCarPosition('right');
        console.log('d')
        break;
      case 'ArrowRight':
        switch (carPosition) {
          case 'left':
            setCarPosition('center');
            console.log('ArrowCenter')
            break;
          case 'center':
            setCarPosition('right');
            console.log('ArrowRight')
            break;
        }
        break;
      case 'ArrowLeft':
        switch (carPosition) {
          case 'center':
            setCarPosition('left');
            console.log('ArrowLeft')
            break;
          case 'right':
            setCarPosition('center');
            console.log('ArrowLeftCenter')
            break;
        }
        break;     
    }
  }

  useEffect(() => {
    let timeInterval = setInterval(() => {
      setTime(time+1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [time]);

  useEffect(() => {
    let distanceInterval = setInterval(() => {
      setDistance(distance-1);
    }, 90);

    return () => clearInterval(distanceInterval);
    
  }, [distance]);

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

      {/* GIFF DIRETO DO NOTION */}
      {/* <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F49e38bac-5a6c-4505-b7c7-742c0514bb69%2FCENARIO_anima.gif?table=block&id=f0789bc1-6482-42f8-a042-9fa71f6ed866&spaceId=398d34ba-2026-4971-8d11-e53d1787a426&userId=fe7458d9-ddea-4a9c-8857-91072f1b0f7a&cache=v2" alt="Pista de corrida" className='track'/> */}

      {/* GIFF GERADO PELO CSS */}
      <div className='track'>
        <div className = 'gif'>
          <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff05e46f1-8333-425c-a610-cc1e6cdda6d1%2FCARRO.png?table=block&id=50eaa5d5-bb41-486e-9638-efcdf1b5b584&spaceId=398d34ba-2026-4971-8d11-e53d1787a426&width=1050&userId=fe7458d9-ddea-4a9c-8857-91072f1b0f7a&cache=v2" alt="Fusca azul" className={`blueCar ${carPosition}`}/>
        </div>
      </div>
    </div>
  )
};