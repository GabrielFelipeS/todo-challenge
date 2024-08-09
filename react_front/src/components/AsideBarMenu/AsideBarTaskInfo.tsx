import {Task} from "../../types/Task.ts";
import {useContext} from "react";
import {TaskContext} from "../../context/TaskContext.tsx";

interface AsideBarProps {
    predicate: (task: Task) => boolean;
}

export function AsideBarTaskInfo({predicate}: AsideBarProps) {
    const tasks = useContext(TaskContext)?.tasks ?? []
    const filteredTasks = tasks.filter(predicate)

    const totalTime =
        filteredTasks.map(task => task.total_task_time)
        .reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0);

    const hour = Math.floor(totalTime / 60);
    const minute = totalTime % 60;

    const tasksNotCompleted = filteredTasks.length;

    return (
        <>
            <div
                className="col-span-1 pt-1
                text-ligth-tertiary dark:text-dark-tertiary text-teen
                max-md:hidden">
                {hour}h {minute}m
            </div>
            <div
                className="col-start-auto pt-1 text-center
                text-ligth-tertiary dark:text-dark-tertiary text-teen
                max-md:hidden ">
                {tasksNotCompleted}
            </div>
        </>
    );
}