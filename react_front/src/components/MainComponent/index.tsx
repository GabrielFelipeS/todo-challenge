import {Task} from "../../types/Task.ts";
import {useContext} from "react";
import {TaskContext} from "../../context/TaskContext.tsx";
import {PENDING_OR_IN_PROGRESS} from "../AsideBarMenu/PredicateFilters.ts";
import {ContainerTaskInfo} from "./ContainerTaskInfo/ContainerTaskInfo.tsx";

interface MainComponentProps {
    title: string
    predicate: (task: Task) => boolean
}

export function MainComponent({title, predicate}: MainComponentProps) {
    const tasks = useContext(TaskContext)?.tasks ?? []
    const filteredTasks = tasks.filter(predicate);
    const pendingTasks = filteredTasks.filter(PENDING_OR_IN_PROGRESS);

    return (
        <div className="mt-12 ml-5 w-3/4 ">
            <h1 className=" text-ligth-primary dark:text-dark-primary">
                {title}
            </h1>
            <ContainerTaskInfo filteredTasks={filteredTasks} pendingTasks={pendingTasks}/>
            <div className="mt-6">
                Tarefas - 25min
            </div>
        </div>
    );
}