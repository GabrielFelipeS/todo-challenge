import styled from "styled-components";
import {TaskData} from "./TaskData.tsx";
import {Task} from "../../types/Task.ts";
import {useContext} from "react";
import {TaskContext} from "../../context/TaskContext.tsx";
import {COMPLETED_TASKS_FILTER, PENDING_OR_IN_PROGRESS} from "../AsideBarMenu/PredicateFilters.ts";

const Container = styled.div.attrs({
    className: "flex max-sm:flex-row justify-around items-center mt-3 h-[93px] w-full rounded-lg bg-ligth-container dark:bg-dark-container"
})``;

interface ContainerTaskInfoProps {
    predicate: (task: Task) => boolean
}

export function ContainerTaskInfo({predicate}: ContainerTaskInfoProps) {
    const tasks = useContext(TaskContext)?.tasks ?? []
    const filteredTasks = tasks.filter(predicate);
    const pendingTasks = filteredTasks.filter(PENDING_OR_IN_PROGRESS);

    const time_estipuled = pendingTasks
                        .map((task: Task) => task.total_task_time)
                        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const count_pending_tasks = pendingTasks.length;
    const concluded_tasks = filteredTasks.filter(COMPLETED_TASKS_FILTER).length

    return (
        <Container>
           <TaskData time_estipuled={time_estipuled} pending_tasks={count_pending_tasks} concluded_tasks={concluded_tasks}/>
        </Container>
    )
}