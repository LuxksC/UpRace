import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

import '../Timer/index.scss'

export function Timer() {
  const history = useHistory();
  const [timer,setTimer]= useState(3)

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(timer-1)
    }, 1000)

    if (timer<1) {
      clearInterval(interval)
      history.push('/race')
    }

    return () => clearInterval(interval)
  }, [timer])

  return (
    <>
    <div id='timer'>
      <h2 className='timerText'>{timer}</h2>
    </div>
    </>
   
  )
}