import timerConcludedImg from "../../../assets/timerConcluded.png";
import timerNotConcludedImg from "../../../assets/timerNotConcluded.png";
import {ReactElement} from "react";

interface TaskProgressProps {
    progress_time: number
    total_time: number
}

const TimerConcluded = () => <img src={timerConcludedImg} alt="Imagem" className="w-4 h-4 dark:invert"/>
const TimerNotConcluded = () => <img src={timerNotConcludedImg} alt="Imagem" className="w-4 h-4 dark:invert"/>

function generateNonLimitedProgressBar (pomodoros_quantities: number, time_remaining: number) {
    const rows: ReactElement[] = [];
    for (let i = 0; i < pomodoros_quantities; i++) {
        rows.push(<TimerConcluded/>);
    }

    for (let i = 0; i < time_remaining; i++) {
        rows.push(<TimerNotConcluded/>);
    }

    return <> {rows} </>;
}

function generateLimitedProgressBar (pomodoros_quantities: number, time_remaining: number) {
    return <div className="flex flex-row text-xs">
        <TimerConcluded/>
        <span className="mr-0.5 text-ligth-highlight dark:text-dark-highlight">
            {time_remaining}
        </span>
        <span className="text-dark-primary dark:text-dark-accent"> / </span>
        <TimerNotConcluded/>
        <span className="mr-0.5 text-ligth-detailSpan dark:text-dark-detailSpan">
            {pomodoros_quantities}
        </span>
    </div>;
}

function generateProgressBar(pomodoros_quantities: number, progress_quantitite: number) {
    const time_remaining = pomodoros_quantities - progress_quantitite;

    if(pomodoros_quantities <= 5) {
       return generateNonLimitedProgressBar(progress_quantitite, time_remaining);
    } else {
        return generateLimitedProgressBar(progress_quantitite, time_remaining);
    }
}

export function TaskProgress({progress_time, total_time}: TaskProgressProps) {
    const pomodoros_quantities = Math.floor(total_time / 25);
    const progress_quantitite = Math.floor(progress_time / 25);
    console.log(pomodoros_quantities)
    console.log(progress_quantitite)
    const timers = generateProgressBar(pomodoros_quantities, progress_quantitite);

    return ( timers );
}
