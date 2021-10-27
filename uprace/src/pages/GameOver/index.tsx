import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { PixelButton } from '../../components/PixelButton';
import { useGame } from "../../hooks/useGame";
import { EndGameContext } from '../../App';

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
        <h2>Fim de jogo!</h2>
        <p>Olá, gostaríamos de avisar que você bateu o carro e ele <strong>explodiu</strong>!<br />Felizmente nossa equipe acionou os bombeiros e ninguém se acidentou<br />Por favor, tome mais cuidado na próxima</p>
      </>
       : 
      <>
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