import {Task} from "../../../types/Task.ts";
import {TaskItem} from "./TaskItem.tsx";

interface ContainerTaskInfoProps {
    filteredTasks: Task[]
}

export function TaskList({filteredTasks}: ContainerTaskInfoProps) {
    return (
        <div className="flex flex-col gap-5 mt-9">
            {filteredTasks.map(task => {
               return (
                  <TaskItem task={task}/>
               )
            })}
        </div>
    )
}