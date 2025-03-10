import Timer from './components/timer';
import { useState } from 'react';

const App = () => {

  interface timerInterface {
    time: number,
    formatTimeMinute: number,
    formatTimeSecond: number,
    on: boolean
  }

  const MAX_TIME = 900000 * 4;
  const MAX_MINUTES = 60;
  const MAX_SECONDS = 60;

  const [timer, setTimer] = useState<timerInterface>({
    time: 1500000,
    formatTimeMinute: 25,
    formatTimeSecond: 0,
    on: false
  });

  const updateTimer = (newTime: number) => {
    const clampedTime = Math.min(Math.max(newTime, 0), MAX_TIME);
    const newMinutes = Math.min(Math.max(Math.floor(clampedTime / 60000), 0), MAX_MINUTES);
    const newSeconds = Math.min(Math.max(Math.floor((clampedTime % 60000) / 1000), 0), MAX_SECONDS);

    setTimer({
      ...timer,
      time: clampedTime,
      formatTimeMinute: newMinutes,
      formatTimeSecond: newSeconds
    });
  }

  const addSecond = () => updateTimer(timer.time + 1000);
  const addMinute = () => updateTimer(timer.time + 60000);
  const subSecond = () => updateTimer(timer.time - 1000);
  const subMinute = () => updateTimer(timer.time - 60000);

  return (
    <div className="flex flex-col gap-10 w-screen h-screen items-center justify-center bg-red-500">
      <Timer onAddSecond={addSecond} onAddMinute={addMinute} onSubSecond={subSecond} onSubMinute={subMinute} timeSecond={timer.formatTimeSecond} timeMinute={timer.formatTimeMinute}></Timer>
    </div>
  )
}

export default App