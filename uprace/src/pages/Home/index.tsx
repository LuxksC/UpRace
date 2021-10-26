import { FormEvent, useState } from 'react';
import { TutorialModal } from '../../components/TutorialModal';

import toast from 'react-hot-toast';

import carsRunningImg from '../../assets/images/carsRunning.svg';

import '../Home/index.scss';
import { PixelButton } from '../../components/PixelButton';


export function Home() {
  const [playerName, setPlayerName] = useState('');
  const [formSubmited, setFormSubmited] = useState(false)

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    if (playerName.trim() === '') { 
      setPlayerName('')
      toast.error('Por favor escreva um nome válido')
      return;
    }

    setFormSubmited(true)

    return
  }

  return (
    <div id="home-page">
      {formSubmited && <TutorialModal 
      formSubmited = {formSubmited}
      setFormSubmited = {setFormSubmited}/>}
      <aside>
        <img src={carsRunningImg} alt="Carros correndo" />
        <h1>UP &amp; FURIOUS </h1>
      </aside>
      <main>
        <div className='main-content'>
        <h2>Inscreva-se</h2>
        <form onSubmit={handleFormSubmit}>
          <input type="text" 
          placeholder="Digite seu nome"
          onChange = {event => setPlayerName(event.target.value)}
          value={playerName}
          />
          <PixelButton formButton>Iniciar Corrida</PixelButton>
        </form>
        </div>
      </main>
    
    </div>
  );
}