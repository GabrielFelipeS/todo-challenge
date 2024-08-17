import timerConcludedImg from "../../../assets/timerConcluded.png";
import timerNotConcludedImg from "../../../assets/timerNotConcluded.png";

interface TaskProgressProps {
    progress_time: number
    total_time: number
}

const TimerConcluded = () => <img src={timerConcludedImg} alt="Imagem" className="w-4 h-4 dark:invert"/>
const TimerNotConcluded = () => <img src={timerNotConcludedImg} alt="Imagem" className="w-4 h-4 dark:invert"/>

function generatedProgress(quantity_pomodoros: number, time_remaining: number) {
    const rows = [];
    for (let i = 0; i < quantity_pomodoros; i++) {
        rows.push(<TimerConcluded/>);
    }

    for (let i = 0; i < time_remaining; i++) {
        rows.push(<TimerNotConcluded/>);
    }

    return rows;
}

export function TaskProgress({progress_time, total_time}: TaskProgressProps) {
    const quantity_pomodoros = Math.floor(total_time / 25);
    const progress_quantity = Math.floor(progress_time / 25);
    const time_remaining = quantity_pomodoros - progress_quantity;

    const timers = generatedProgress(progress_quantity, time_remaining);

    return ( timers );
}
