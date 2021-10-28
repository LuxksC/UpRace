import { ReactNode, useLayoutEffect, useState } from 'react';

import { Timer } from '../Timer';

import keyAImg from '../../assets/images/teclaAImg.svg';
import keySImg from '../../assets/images/teclaSImg.svg';
import keyDImg from '../../assets/images/teclaDImg.svg';
import keyArrowLeftImg from '../../assets/images/teclaEsquerdaImg.svg';
import keyArrowRightImg from '../../assets/images/teclaDireitaImg.svg';
import keyEscapeImg from '../../assets/images/teclaEscImg.svg'
import modalTutorialBackground from '../../assets/images/backgroundImgTutorialModal.svg';

import '../TutorialModal/index.scss'

type TutorialModalProps = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>> | ((value: boolean) => void),
  isInGame?: boolean,
  /* children?: ReactNode, */
}

export function TutorialModal({
  showModal = true,
  setShowModal,
  isInGame=false,
}: TutorialModalProps) {

  const [startTimer, setStartTimer] = useState(false);

  function handleStartTimer() {
    setStartTimer(true);
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  return(
    <>
    {startTimer && <Timer/>}
    <div className="modal-background"></div>
    <main id="tutorial-modal" className={isInGame ? 'in-game' : ''}>
      <h2>Tutorial</h2>
      <div className="keys">
        <div className="key-instruction">
          <img src={keyAImg} alt="Tecla letra a" />
          <p>Move para pista esquerda</p>
        </div>
        <div className="key-instruction">
          <img src={keySImg} alt="Tecla letra S" />
          <p>Move para pista central</p>
        </div>
        <div className="key-instruction">
          <img src={keyDImg} alt="Tecla letra D" />
          <p>Move para pista direita</p>
        </div>
      </div>
      <div className="keys down">
        <div className="key-instruction">
          <img src={keyArrowLeftImg} alt="Tecla seta esquerda" />
          <p>Move carro para esquerda</p>
        </div>
        <div className="key-instruction">
          <img src={keyArrowRightImg} alt="Tecla seta direita" />
          <p>Move carro para direita</p>
        </div>
        <div className="key-instruction">
          <img src={keyEscapeImg} alt="Tecla esc" />
          <p>Pausar / Retomar</p>
        </div>
      </div>

      {!isInGame && 
      <button className = 'start-race'
      onClick = {handleStartTimer}
      >
        Hora de rodar!
      </button>}
      
      <img src={modalTutorialBackground} alt="Carro no por do sol." />
      <button className='close-modal'
      onClick = {handleCloseModal}
      >
        <div className="one"></div>
        <div className="two"></div>
      </button>
    </main>
    </>
  )
}