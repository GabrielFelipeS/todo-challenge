import {Task} from "../../types/Task.ts";
import {useContext} from "react";
import {TaskContext} from "../../context/TaskContext.tsx";
import {ContainerTaskInfo} from "./ContainerTaskInfo/ContainerTaskInfo";

interface MainComponentProps {
    title: string
    predicate: (task: Task) => boolean
}

export function MainComponent({title, predicate}: MainComponentProps) {
    const tasks = useContext(TaskContext)?.tasks ?? []
    const filteredTasks = tasks.filter(predicate);

    return (
        <div className="mt-12 ml-5 w-3/4 ">
            <h1 className=" text-ligth-primary dark:text-dark-primary">
                {title}
            </h1>
            <ContainerTaskInfo
                filteredTasks={filteredTasks}
            />


        </div>
    );
}