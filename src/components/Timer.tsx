import ButtonControlTime from "./ButtonControlTime";
import { Plus, Minus } from 'lucide-react';
import { FunctionComponent } from "react";

interface TimerProps {
    onAddSecond: () => void;
    onAddMinute: () => void;
    onSubSecond: () => void;
    onSubMinute: () => void;
    timeSecond: number;
    timeMinute: number;
}

const Timer: FunctionComponent<TimerProps> = ({onAddSecond, onAddMinute, onSubSecond, onSubMinute, timeMinute, timeSecond}) => {
    return (
        <div className="bg-red-300 py-8 px-12 rounded-lg text-white flex flex-col gap-5">
            <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                    <ButtonControlTime onClick={onSubMinute}><Minus /></ButtonControlTime>
                    <ButtonControlTime onClick={onSubSecond}><Minus /></ButtonControlTime>
                </div>
                <p className="text-6xl">{String(timeMinute).length == 2? timeMinute : "0"+timeMinute}:{String(timeSecond).length == 2? timeSecond : "0"+timeSecond}</p>
                <div className="flex flex-col gap-2">
                    <ButtonControlTime onClick={onAddMinute}><Plus /></ButtonControlTime>
                    <ButtonControlTime onClick={onAddSecond}><Plus /></ButtonControlTime>
                </div>
            </div>
            <button onClick={() => console.log('clicked')} className="text-3xl bg-red-200 text-red-600 rounded-md p-1 shadow-md hover:bg-red-600 hover:text-white">Start</button>
        </div>
    );
}

export default Timer;