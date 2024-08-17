import styled from "styled-components";
import checkImg from "../../../assets/check.png"
import {Task} from "../../../types/Task.ts";

const Completed = styled.div.attrs({
    className: "bg-ligth-accent border " +
    "border-ligth-accent dark:bg-dark-accent " +
        "dark:border-dark-accent w-5 h-5 rounded-full"
})``;

const UnCompleted = styled.div.attrs({
    className: "bg-ligth-detail border border-ligth-secondary " +
        "dark:bg-dark-detail dark:border-dark-border w-5 h-5 rounded-full"
})``;

interface CheckButtonProps {
    task: Task
    isCompleted: boolean
    setisCompleted: React.Dispatch<React.SetStateAction<boolean>>
}

export function CheckButton({task, isCompleted, setisCompleted}: CheckButtonProps) {

    function handlerState(idTask: number) {
        console.log("Inicio do click "  + idTask)
        console.log(setisCompleted(state => !state))
        console.log(task.status)
        task.status = !isCompleted? "completed" : "pending";
        task.task_time_progress = !isCompleted? task.total_task_time : 0
        console.log(task.task_time_progress)
        console.log(task.total_task_time)
        console.log("Fim do click")
    }

    function getButtonFor(isCompleted: boolean) {
        return (
            isCompleted?
                <Completed>
                    <img src={checkImg} alt={"check image"} className={"dark:invert"} />
                </Completed>
                :
                <UnCompleted/>
        )
    }

    return (
        <button onClick={() => handlerState(task.id)}>
            {getButtonFor(isCompleted)}
        </button>
    )
}