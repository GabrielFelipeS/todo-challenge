import styled from "styled-components";
import {COMPLETED_TASKS_FILTER} from "../../AsideBarMenu/PredicateFilters.ts";
import {Task} from "../../../types/Task.ts";

interface taskDataProps {
    hours: number
    minutes: number
    pendingTasks: Task[]
    filteredTasks: Task[]
}

const TaskAttribute = styled.div.attrs({
    className: "flex flex-col items-center break-word"
})``;

const Span = styled.span.attrs({
    className: "text-ligth-highlight dark:text-dark-highlight md:text-3xl tsm:text-xl "
})``;

const TaskInfo = styled.p.attrs({
    className: "text-ligth-secondary dark:text-dark-secondary tsm:text-base xs:text-xs"
})``;

const Container = styled.div.attrs({
    className: "flex max-sm:flex-row justify-around items-center mt-3 h-[93px] " +
        "w-full rounded-lg bg-ligth-container dark:bg-dark-container"
})``;

export function TaskData({hours, minutes, pendingTasks, filteredTasks}: taskDataProps) {
    const containsHours = hours != 0;
    const concluded_tasks = filteredTasks.filter(COMPLETED_TASKS_FILTER).length
    const count_pending_tasks = pendingTasks.length;

    return(
        <Container>
            <TaskAttribute>
                <TaskInfo>
                    {containsHours ? <> <Span>{hours}</Span>h </> : ''}
                    <Span>{minutes}</Span>min
                </TaskInfo>
                <TaskInfo>
                    Prazo estimado
                </TaskInfo>
            </TaskAttribute>

            <TaskAttribute>
                <TaskInfo>
                    <Span>{count_pending_tasks}</Span>
                </TaskInfo>
                <TaskInfo>
                    Tarefas pendentes
                </TaskInfo>
            </TaskAttribute>

            <TaskAttribute>
                <TaskInfo>
                    <Span>{concluded_tasks}</Span>
                </TaskInfo>
                <TaskInfo>
                    Tarefas Concluidas
                </TaskInfo>
            </TaskAttribute>
        </Container>
    );
}