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

    console.log(timer)
  }

  const addMinute = () => {
    const newTimer = {
      ...timer,
      formatTimeMinute: timer.formatTimeMinute + 1,
      time: timer.time + 60000
    }

    setTimer(newTimer);

    console.log(timer)
  }

  const subSecond = () => {
    const newTimer = {
      ...timer,
      formatTimeSecond: timer.formatTimeSecond - 1,
      time: timer.time - 1000
    }

    setTimer(newTimer);

    console.log(timer)
  }

  const subMinute = () => {
    const newTimer = {
      ...timer,
      formatTimeMinute: timer.formatTimeMinute - 1,
      time: timer.time - 60000
    }

    setTimer(newTimer);

    console.log(timer)
  }



  return (
    <div className="flex flex-col gap-10 w-screen h-screen items-center justify-center bg-red-500">
      <Timer onAddSecond={addSecond} onAddMinute={addMinute} onSubSecond={subSecond} onSubMinute={subMinute} timeSecond={timer.formatTimeSecond} timeMinute={timer.formatTimeMinute}></Timer>
    </div>
  )
}

export default App