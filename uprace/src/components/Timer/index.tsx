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

  /*function upgradeAfterThreeSecond(timer: number) {
    if (timer>3) {
      return
    } else {
      setTimeout(() => {
        setTimer(timer+1);
        upgradeAfterThreeSecond(timer)
    }, 1000);

 

    }
    


    /*for (let i = 1; i < 4; i++) {
      setTimeout(() => setTimer(timer+1), 2000);
    }*/

    
    
    /*return new Promise(resolve => {
      setTimeout(() => {
        resolve(timer+1);
      }, 3000);
    });*/
  

  /*async function handleTimerCounting(timer: number){
    const x: number = await upgradeAfterThreeSecond(timer);
    setTimer(x)
    console.log(timer); // 10
  }*/

  
   
