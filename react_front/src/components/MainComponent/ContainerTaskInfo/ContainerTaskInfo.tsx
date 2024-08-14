import styled from "styled-components";
import {TaskData} from "./TaskData.tsx";
import {Task} from "../../../types/Task.ts";
import {COMPLETED_TASKS_FILTER} from "../../AsideBarMenu/PredicateFilters.ts";

const Container = styled.div.attrs({
    className: "flex max-sm:flex-row justify-around items-center mt-3 h-[93px] w-full rounded-lg bg-ligth-container dark:bg-dark-container"
})``;

interface ContainerTaskInfoProps {
    filteredTasks: Task[]
    pendingTasks: Task[]
}

export function ContainerTaskInfo({filteredTasks, pendingTasks}: ContainerTaskInfoProps) {
    const time_estipuled = pendingTasks
                        .map((task: Task) => task.total_task_time)
                        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const count_pending_tasks = pendingTasks.length;
    const concluded_tasks = filteredTasks.filter(COMPLETED_TASKS_FILTER).length

    return (
        <Container>
           <TaskData
               time_estipuled={time_estipuled}
               pending_tasks={count_pending_tasks}
               concluded_tasks={concluded_tasks}
           />
        </Container>
    )
}