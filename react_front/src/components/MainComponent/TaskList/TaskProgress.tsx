import timerConcluded from "../../../assets/timerConcluded.png";
import timerNotConcluded from "../../../assets/timerNotConcluded.png";

interface TaskProgressProps {
    total_time: number
}

export function TaskProgress({ total_time }: TaskProgressProps) {
    return (
        <>
            <img src={timerConcluded} alt="Imagem" className="w-4 h-4 dark:invert"/>
            <img src={timerConcluded} alt="Imagem" className="w-4 h-4 dark:invert"/>
            <img src={timerConcluded} alt="Imagem" className="w-4 h-4 dark:invert"/>
            <img src={timerNotConcluded} alt="Imagem" className="w-4 h-4 dark:invert"/>
            <img src={timerNotConcluded} alt="Imagem" className="w-4 h-4 dark:invert"/>
        </>
    );
}
