import {Task} from "../../../types/Task.ts";
import {TaskItem} from "./TaskItem.tsx";

interface ContainerTaskInfoProps {
    filteredTasks: Task[]
}

export function TaskList({filteredTasks}: ContainerTaskInfoProps) {
    console.log("sim")
    return (
        <main className="flex flex-col gap-5 mt-9">
            {filteredTasks.map((task, index) => {
               return (
                  <TaskItem task={task} key={index} />
               )
            })}
        </main>
    )
}