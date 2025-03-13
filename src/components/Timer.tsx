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
    onStartClick: () => void;
    isTimerOn: boolean;
}

const Timer: FunctionComponent<TimerProps> = (props) => {
    return (
        <div className="bg-red-300 py-8 px-12 rounded-lg text-white flex flex-col gap-5">
            <p className="">Select the time you want for studing</p>
            <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                    <ButtonControlTime onClick={props.onSubMinute}><Minus /></ButtonControlTime>
                    <ButtonControlTime onClick={props.onSubSecond}><Minus /></ButtonControlTime>
                </div>
                <p className="text-6xl">{String(props.timeMinute).length == 2? props.timeMinute : "0"+props.timeMinute}:{String(props.timeSecond).length == 2? props.timeSecond : "0"+props.timeSecond}</p>
                <div className="flex flex-col gap-2">
                    <ButtonControlTime onClick={props.onAddMinute}><Plus /></ButtonControlTime>
                    <ButtonControlTime onClick={props.onAddSecond}><Plus /></ButtonControlTime>
                </div>
            </div>
            <button onClick={props.onStartClick} className="text-3xl bg-red-200 text-red-600 rounded-md p-1 shadow-md hover:bg-red-600 hover:text-white">{props.isTimerOn? 'Stop' : 'Start'}</button>
        </div>
    );
}

export default Timer;