import {AsideBarTaskInfo} from "../AsideBarMenu/AsideBarTaskInfo.tsx";
import {render, screen} from "@testing-library/react"

import "@testing-library/jest-dom";

import {TaskContext} from "../../context/TaskContext.tsx";
import {mockTasks} from "./MockTasks.ts"
import {Task} from "../../types/Task.ts";
import {NEXT_SEVEN_TASKS_FILTER, TODAY_TASKS_FILTER, TOMORROW_TASKS_FILTER} from "../AsideBarMenu/PredicateFilters.ts";

const today = new Date();
const mockSetTasks = jest.fn();

function createTask(overrides = {}): Task {
    const task: Task = {
        id: 1,
        user_id: 101,
        title: 'Task 1',
        description: 'Description for Task 1',
        status: 'pending',
        total_task_time: 120,
        due_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate())
    };

    return { ...task, ...overrides };
}

const renderComponent = (predicate: (task: Task) => boolean, mock = mockTasks) => {
    render(
        <TaskContext.Provider value={{tasks : mock, setTasks : mockSetTasks}}>
            <AsideBarTaskInfo predicate={predicate}/>
        </TaskContext.Provider>
    )
}

describe("AsideBarTaskInfo component", () => {
    it('should pick up all tasks', () => {
        renderComponent(task => task.id == task.id);

        expect(screen.getByText("29")).toBeInTheDocument();
    })

    it('should pick up all tasks for today', () => {
        renderComponent(TODAY_TASKS_FILTER);

        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByText("8h 20m")).toBeInTheDocument();
    });

    it('should pick up all tasks for tomorrow', () => {
        renderComponent(TOMORROW_TASKS_FILTER);

        expect(screen.getByText("3")).toBeInTheDocument();
        expect(screen.getByText("4h 10m")).toBeInTheDocument();
    });

    it('should only pick up the tasks for the next seven days', () => {
        renderComponent(NEXT_SEVEN_TASKS_FILTER, [
            createTask(),
            createTask({
                due_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4)
            }),
            createTask({
                due_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
            })
        ])

        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("4h 0m")).toBeInTheDocument();
    });
});