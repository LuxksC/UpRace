import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { PixelButton } from '../../components/PixelButton';
import { useGame } from "../../hooks/useGame";
import { EndGameContext } from '../../App';

import explosionSound from '../../assets/audio/explosion.mp3';
import celebrationSound from '../../assets/audio/crowdCelebration.mp3';

import './index.scss';

export function GameOver () {
  const { carCrashed, setCarCrashed } = useContext(EndGameContext);
  const history = useHistory();
  

  function redirectPlayer(path: string) {
    if (carCrashed) {
      setCarCrashed(false);
    }
    history.push(path);
  } 

  return (
    <div id='game-over' className={carCrashed ? 'loose' : 'win'}>

      {carCrashed ? 
      <>
        <audio autoPlay>
          <source src={explosionSound} type="audio/mp3"/>
        </audio>
        <h2>Fim de jogo!</h2>
        <p>Olá, gostaríamos de avisar que você bateu o carro e ele <strong>explodiu</strong>!<br />Felizmente nossa equipe acionou os bombeiros e ninguém se acidentou<br />Por favor, tome mais cuidado na próxima</p>
      </>
       : 
      <>
        <audio autoPlay>
          <source src={celebrationSound} type="audio/mp3"/>
        </audio>
        <h2>Você venceu!</h2>
        <p>Parabéns, você você venceu a corrida!<br />Será que você consegue duas seguidas?</p>
      </>}

      <PixelButton 
      color={carCrashed ? 'red' : 'green'}
      onClick = {() => redirectPlayer('/race')}
      >Jogar novamente</PixelButton>
      <PixelButton
      color={carCrashed ? 'red' : 'green'} 
      onClick = {() => redirectPlayer('/')}
      >Sair do jogo</PixelButton>
    </div>
  )
}