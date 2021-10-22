import { ReactNode, useLayoutEffect, useState } from 'react';

import { Timer } from '../Timer';

import keyAImg from '../../assets/images/teclaAImg.svg';
import keySImg from '../../assets/images/teclaSImg.svg';
import keyDImg from '../../assets/images/teclaDImg.svg';
import keyArrowLeftImg from '../../assets/images/teclaEsquerdaImg.svg';
import keyArrowRightImg from '../../assets/images/teclaDireitaImg.svg';
import modalTutorialBackground from '../../assets/images/backgroundImgTutorialModal.svg';

import '../TutorialModal/index.scss'

type TutorialModalProps = {
  formSubmited: boolean,
  setFormSubmited: React.Dispatch<React.SetStateAction<boolean>>
  /* children?: ReactNode, */
}

export function TutorialModal({
  formSubmited = true,
  setFormSubmited,
}: TutorialModalProps) {

  const [startTimer, setStartTimer] = useState(false);

  function handleStartTimer() {
    setStartTimer(true);
  }

  function handleCloseModal() {
    setFormSubmited(false)
  }

  return(
    <>
    {startTimer && <Timer/>}
    <div className="modal-background"></div>
    <main id="tutorial-modal">
      <h2>Tutorial</h2>
      <div className="letter-keys">
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
      <div className="arrow-keys">
        <div className="key-instruction">
          <img src={keyArrowLeftImg} alt="Tecla seta esquerda" />
          <p>Move carro para esquerda</p>
        </div>
        <div className="key-instruction">
          <img src={keyArrowRightImg} alt="Tecla seta direita" />
          <p>Move carro para direita</p>
        </div>
      </div>
      <button className = 'start-race'
      onClick = {handleStartTimer}
      >
        Hora de rodar!
      </button>
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