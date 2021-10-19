import { useState } from 'react';

import '../Race/index.scss' 

export function Race(){

  const positionArray= ['left','center','right']
  const [carPosition, setCarPosition] = useState('center');

  function handleArrowRightKey(state: string, setState: React.Dispatch<React.SetStateAction<string>>){
    if(state === 'left') {
      setState('center')
      return
    } else if (state === 'center'){
      setState('right')
      return
    } else {
      return
    }
  }

  function handleArrowLeftKey(state: string, setState: React.Dispatch<React.SetStateAction<string>>){
    if(state === 'right') {
      setState('center')
      return
    } else if (state === 'center'){
      setState('left')
      return
    } else {
      return
    }
  }

  window.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key==='s') {
      setCarPosition('center');
      return;
    } else if (event.key === 'a'){
      setCarPosition('left');
      return;
    } else if (event.key === 'd'){
      setCarPosition('right');
      return;
    } else if (event.key === 'ArrowRight'){
      setCarPosition('right');
      return;
    } else if (event.key === 'ArrowLeft'){
      setCarPosition('left');
      return;
    } else if (event.key === 'ArrowDown'){
      setCarPosition('center');
      return;
    }
  })  

  /* window.addEventListener('keydown', (event: KeyboardEvent) => {
    switch(event.key) {
      case 's':
        setCarPosition('center');
        break;
      case 'a':
        setCarPosition('left');
        break;
      case 'd':
        setCarPosition('right');
        break;
      case 'ArrowRight':
        switch (carPosition) {
          case 'left':
            setCarPosition('center');
            break;
          case 'center':
            setCarPosition('right');
            break;
          case 'right':
            setCarPosition('right');
            break;
          default:
            console.log('inside Arrow Right Default');
            break;
        }
        break;
      case 'ArrowLeft':
        switch (carPosition) {
          case 'left':
            setCarPosition('left');
            break;
          case 'center':
            setCarPosition('left');
            break;
          case 'right':
            setCarPosition('center');
            break;
          default:
            console.log('inside Arrow Left Default');
            break;
        }
        break;     
    }
    
  })  */

  return (
    <div id='race'>
      <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F49e38bac-5a6c-4505-b7c7-742c0514bb69%2FCENARIO_anima.gif?table=block&id=f0789bc1-6482-42f8-a042-9fa71f6ed866&spaceId=398d34ba-2026-4971-8d11-e53d1787a426&userId=fe7458d9-ddea-4a9c-8857-91072f1b0f7a&cache=v2" alt="Pista de corrida" className='track'/>

      <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff05e46f1-8333-425c-a610-cc1e6cdda6d1%2FCARRO.png?table=block&id=50eaa5d5-bb41-486e-9638-efcdf1b5b584&spaceId=398d34ba-2026-4971-8d11-e53d1787a426&width=1050&userId=fe7458d9-ddea-4a9c-8857-91072f1b0f7a&cache=v2" alt="Fusca azul" className={`blueCar ${carPosition}`}/>
    </div>
  )
};