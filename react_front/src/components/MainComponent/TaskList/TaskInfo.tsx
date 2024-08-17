import {TaskProgress} from "./TaskProgress.tsx";

interface TaskInfoProps {
    title: string
    total_time: number
    isCompleted: boolean
}

export function TaskInfo({title, total_time, isCompleted} : TaskInfoProps) {
    return (
        <div>
            <div className={`${
                isCompleted? 
                "text-ligth-tertiary dark:text-dark-tertiary line-through"
                : 
                "text-ligth-primary dark:text-dark-primary"}`}>
                {title}
            </div>
            <div className="flex flex-row">
                <TaskProgress total_time={total_time}/>
            </div>
        </div>
    );
}
