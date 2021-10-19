import { FormEvent, useState } from 'react';
import { Timer } from '../../components/Timer';

import toast from 'react-hot-toast';

import carsRunningImg from '../../assets/images/carsRunning.svg';

import '../Home/index.scss';



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

    console.log(formSubmited)

    return
  }

  return (
    <div id="home-page">
      {formSubmited && <Timer/>}
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
          <div className='pixel-button'>
            <svg width="319" height="55" viewBox="0 0 319 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M319 43.0833V11H311.554V8H305.37V4H297.924V0H20.1739V4H13.8696V8H6.30432V11H0V43.0833H6.30432V47.7222H13.8696V51.3611H20.1739V55H297.924V51.3611H305.37V47.7222H311.554V43.0833H319Z" fill="#308FFF"/>
            <button type='submit'>Iniciar Corrida</button>
            </svg>
            <button type='submit'>Iniciar Corrida</button>
          </div>
        </form>
        </div>
      </main>
    
    </div>
  );
}