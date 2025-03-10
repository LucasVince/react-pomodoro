import Timer from './components/timer';
import { useState } from 'react';

const App = () => {

  interface timerInterface {
    time: number,
    formatTimeMinute: number,
    formatTimeSecond: number,
    on: boolean
  }

  const [timer, setTimer] = useState<timerInterface>({
    time: 1500000,
    formatTimeMinute: 25,
    formatTimeSecond: 0,
    on: false
  });

  // const onStartCick = () => {
  //   setTimer({
  //     time: 1500000,
  //     on: true
  //   });
  // }

  const addSecond = () => {
    const newTimer = {
      ...timer,
      formatTimeSecond: timer.formatTimeSecond + 1,
      time: timer.time + 1000
    }
    
    setTimer(newTimer);

    if (timer.formatTimeSecond == 59) {
      const newTimer = {
        ...timer,
        formatTimeSecond: 0,
        formatTimeMinute: timer.formatTimeMinute + 1,
      }
      
      setTimer(newTimer);
    }
  }

  const addMinute = () => {
    const newTimer = {
      ...timer,
      formatTimeMinute: timer.formatTimeMinute + 1,
      time: timer.time + 60000
    }

    setTimer(newTimer);

    if (timer.formatTimeMinute == 60) {
      const newTimer = {
        ...timer,
        formatTimeMinute: 60,
        time: 900000 * 4
      }
  
      setTimer(newTimer);
    }
  }

  const subSecond = () => {
    const newTimer = {
      ...timer,
      formatTimeSecond: timer.formatTimeSecond - 1,
      time: timer.time - 1000
    }

    setTimer(newTimer);
  }

  const subMinute = () => {
    const newTimer = {
      ...timer,
      formatTimeMinute: timer.formatTimeMinute - 1,
      time: timer.time - 60000
    }

    setTimer(newTimer);
  }



  return (
    <div className="flex flex-col gap-10 w-screen h-screen items-center justify-center bg-red-500">
      <Timer onAddSecond={addSecond} onAddMinute={addMinute} onSubSecond={subSecond} onSubMinute={subMinute} timeSecond={timer.formatTimeSecond} timeMinute={timer.formatTimeMinute}></Timer>
    </div>
  )
}

export default App