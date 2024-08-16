import {Task} from "../../../types/Task.ts";
import timerConcluded from "../../../assets/timerConcluded.png"
import timerNotConcluded from "../../../assets/timerNotConcluded.png"
import arrow from "../../../assets/arrow_rightIcon.png"

type TaskItemProps = {
    task: Task
}

export function TaskItem({task}: TaskItemProps) {
    return (
        <div className="bg-ligth-container dark:bg-dark-container h-[64px] rounded-lg
        flex flex-row justify-between

        ">
            <div className="flex gap-2 items-center ml-2">
                <div>
                    <div className="bg-ligth-detail border border-ligth-secondary
                dark:bg-dark-detail dark:border-dark-border w-5 h-5 rounded-full">
                    </div>
                </div>
                <div>
                    <div className="text-ligth-primary dark:text-dark-primary">
                        {task.title}
                    </div>
                    <div className="flex flex-row">
                        <img src={timerConcluded} alt="Imagem" className="w-4 h-4 dark:invert"/>
                        <img src={timerConcluded} alt="Imagem" className="w-4 h-4 dark:invert"/>
                        <img src={timerConcluded} alt="Imagem" className="w-4 h-4 dark:invert"/>
                        <img src={timerNotConcluded} alt="Imagem" className="w-4 h-4 dark:invert"/>
                        <img src={timerNotConcluded} alt="Imagem" className="w-4 h-4 dark:invert"/>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 mr-2">
                <div className="text-xs text-ligth-highlight dark:text-dark-highlight">
                    {task.task_date.getDate()} ago
                </div>

                <div>
                    <img src={arrow} alt="Imagem" className="w-5 h-5"/>
                </div>
            </div>
        </div>
    );
}