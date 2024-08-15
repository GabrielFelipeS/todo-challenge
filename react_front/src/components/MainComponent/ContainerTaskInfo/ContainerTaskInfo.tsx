import styled from "styled-components";
import {TaskData} from "./TaskData.tsx";
import {Task} from "../../../types/Task.ts";
import {PENDING_OR_IN_PROGRESS} from "../../AsideBarMenu/PredicateFilters.ts";

const Container = styled.div.attrs({
    className: "flex max-sm:flex-row justify-around items-center mt-3 h-[93px] w-full rounded-lg bg-ligth-container dark:bg-dark-container"
})``;

interface ContainerTaskInfoProps {
    filteredTasks: Task[]
}

export function ContainerTaskInfo({filteredTasks}: ContainerTaskInfoProps) {
    const pendingTasks = filteredTasks.filter(PENDING_OR_IN_PROGRESS);

    const time_estipuled = pendingTasks
        .map((task: Task) => task.total_task_time)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const hours = Math.floor(time_estipuled / 60);
    const minutes = time_estipuled % 60;
    const containsHours = hours != 0;

    return (
        <>
            <Container>
                <TaskData
                    hours={hours}
                    minutes={minutes}
                    pendingTasks={pendingTasks}
                    filteredTasks={filteredTasks}
                />
            </Container>

            <div className="mt-6">
                Tarefas -  {containsHours ? <> {hours}h </> : ''}  {minutes}min
            </div>
        </>
    )
}