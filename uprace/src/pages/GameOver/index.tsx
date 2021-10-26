import { useHistory } from "react-router-dom";

import { PixelButton } from '../../components/PixelButton';

import './index.scss';

type GameOverProps = {
  isCrashed: boolean,
  playerWin: boolean,
};

export function GameOver ({
  isCrashed = false,
}: GameOverProps) {

  const history = useHistory();

  return (
    <div id='game-over' className={isCrashed ? 'loose' : 'win'}>

      {isCrashed ? 
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
      color={isCrashed ? 'red' : 'green'}
      onClick = {() => history.push('/race')}
      >Jogar novamente</PixelButton>
      <PixelButton
      color={isCrashed ? 'red' : 'green'} 
      onClick = {() => history.push('/')}
      >Sair do jogo</PixelButton>
    </div>
  )
}