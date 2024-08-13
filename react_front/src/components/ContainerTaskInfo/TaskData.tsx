import styled from "styled-components";

interface taskDataProps {
    time_estipuled: number
    pending_tasks: number
    concluded_tasks: number
}

const TaskAttribute = styled.div.attrs({
    className: "flex flex-col items-center"
})``;

const Span = styled.span.attrs({
    className: "text-ligth-highlight dark:text-dark-highlight text-3xl"
})``;

const TaskInfo = styled.div.attrs({
    className: "text-ligth-secondary dark:text-dark-secondary"
})``;

export function TaskData({time_estipuled, pending_tasks, concluded_tasks}: taskDataProps) {
    const hours = Math.floor(time_estipuled / 60);
    const minutes = time_estipuled % 60;
    const containsHours = hours != 0;

    return(
        <>
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
                    <Span>{pending_tasks}</Span>
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
        </>
    );
}