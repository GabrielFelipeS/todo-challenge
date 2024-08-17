import {Task} from "../../types/Task";

const today = new Date();

const firstDayOfWeek = today.getDate() - today.getDay()

const lastDayOfNextWeek = today.getDate() - today.getDay() + 13

export const mockTasks: Task[] = [
    {
        id: 1,
        user_id: 101,
        title: 'Task 1',
        description: 'Description for Task 1',
        task_time_progress: 0,
        total_task_time: 125,
        status: 'pending',
        task_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        due_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    },
    {
        id: 2,
        user_id: 102,
        title: 'Task 2',
        description: 'Description for Task 2',
        task_time_progress: 50,
        total_task_time: 100,
        status: 'in_progress',
        task_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        due_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    },
    {
        id: 3,
        user_id: 103,
        title: 'Task 3',
        description: 'Description for Task 3',
        task_time_progress: 60,
        total_task_time: 60,
        status: 'completed',
        task_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        due_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    },
    {
        id: 4,
        user_id: 104,
        title: 'Task 4',
        description: 'Description for Task 4',
        task_time_progress: 0,
        total_task_time: 50,
        status: 'canceled',
        task_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        due_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    },
    {
        id: 5,
        user_id: 105,
        title: 'Task 5',
        description: 'Description for Task 5',
        task_time_progress: 0,
        total_task_time: 150,
        status: 'pending',
        task_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        due_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    },
    {
        id: 6,
        user_id: 106,
        title: 'Task 6',
        description: 'Description for Task 6',
        task_time_progress: 25,
        total_task_time: 50,
        status: 'in_progress',
        task_date: new Date(today.getFullYear(), today.getMonth(),  today.getDate()),
        due_date: new Date(today.getFullYear(), today.getMonth(),  today.getDate()),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    },
    {
        id: 7,
        user_id: 107,
        title: 'Task 7',
        description: 'Description for Task 7',
        task_time_progress: 75,
        total_task_time: 75,
        status: 'completed',
        task_date:  new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        due_date:  new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    },
    {
        id: 8,
        user_id: 108,
        title: 'Task 8',
        description: 'Description for Task 8',
        task_time_progress: 0,
        total_task_time: 200,
        status: 'canceled',
        task_date:  new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        due_date:  new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at:  new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    },
    {
        id: 9,
        user_id: 109,
        title: 'Task 9',
        description: 'Description for Task 9',
        task_time_progress: 0,
        total_task_time: 110,
        status: 'pending',
        task_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        due_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    },
    {
        id: 10,
        user_id: 110,
        title: 'Task 10',
        description: 'Description for Task 10',
        task_time_progress: 50,
        total_task_time: 75,
        status: 'in_progress',
        task_date:  new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        due_date:  new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        completed_at:  new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
    },
    {
        id: 11,
        user_id: 111,
        title: 'Task 11',
        description: 'Description for Task 11',
        task_time_progress: 0,
        total_task_time: 80,
        status: 'pending',
        due_date:  new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        task_date:  new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        completed_at: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
    },
    {
        id: 12,
        user_id: 112,
        title: 'Task 12',
        description: 'Description for Task 12',
        task_time_progress: 150,
        total_task_time: 150,
        status: 'completed',
        task_date: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        due_date: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        completed_at: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
    },
    {
        id: 13,
        user_id: 113,
        title: 'Task 13',
        description: 'Description for Task 13',
        task_time_progress: 25,
        total_task_time: 50,
        status: 'in_progress',
        task_date: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        due_date: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        completed_at: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
    },
    {
        id: 14,
        user_id: 114,
        title: 'Task 14',
        description: 'Description for Task 14',
        task_time_progress: 0,
        total_task_time: 100,
        status: 'canceled',
        task_date: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        due_date: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
        completed_at: new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek),
    },
    {
        id: 15,
        user_id: 115,
        title: 'Task 15',
        description: 'Description for Task 15',
        task_time_progress: 0,
        total_task_time: 60,
        status: 'pending',
        task_date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        due_date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    },
    {
        id: 16,
        user_id: 116,
        title: 'Task 16',
        description: 'Description for Task 16',
        task_time_progress: 125,
        total_task_time: 125,
        status: 'completed',
        task_date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        due_date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        completed_at:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    },
    {
        id: 17,
        user_id: 117,
        title: 'Task 17',
        description: 'Description for Task 17',
        task_time_progress: 50,
        total_task_time: 75,
        status: 'in_progress',
        task_date:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        due_date:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    },
    {
        id: 19,
        user_id: 119,
        title: 'Task 19',
        description: 'Description for Task 19',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        due_date:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    },
    {
        id: 20,
        user_id: 120,
        title: 'Task 20',
        description: 'Description for Task 20',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        due_date:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    },
    {
        id: 21,
        user_id: 121,
        title: 'Task 21',
        description: 'Description for Task 21',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        due_date:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        completed_at: new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
    },
    {
        id: 22,
        user_id: 122,
        title: 'Task 22',
        description: 'Description for Task 22',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        due_date:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        completed_at: new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
    },
    {
        id: 23,
        user_id: 123,
        title: 'Task 23',
        description: 'Description for Task 23',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        due_date:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        completed_at: new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
    },
    {
        id: 24,
        user_id: 124,
        title: 'Task 24',
        description: 'Description for Task 24',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        due_date:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        completed_at: new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
    },
    {
        id: 25,
        user_id: 125,
        title: 'Task 25',
        description: 'Description for Task 25',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        due_date:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        assigned_at:  new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
        completed_at: new Date(today.getFullYear(), today.getMonth(), lastDayOfNextWeek),
    },
    {
        id: 26,
        user_id: 126,
        title: 'Task 26',
        description: 'Description for Task 26',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth() + 1, 1),
        due_date:  new Date(today.getFullYear(), today.getMonth() + 1, 1),
        assigned_at:  new Date(today.getFullYear(), today.getMonth() + 1, 1),
        completed_at: new Date(today.getFullYear(), today.getMonth()+ 1, 1),
    },
    {
        id: 27,
        user_id: 127,
        title: 'Task 27',
        description: 'Description for Task 27',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth() + 1, 1),
        due_date:  new Date(today.getFullYear(), today.getMonth() + 1, 1),
        assigned_at:  new Date(today.getFullYear(), today.getMonth() + 1, 1),
        completed_at: new Date(today.getFullYear(), today.getMonth() + 1, 1),
    },
    {
        id: 28,
        user_id: 128,
        title: 'Task 28',
        description: 'Description for Task 28',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth() + 2, 1),
        due_date:  new Date(today.getFullYear(), today.getMonth() + 2, 1),
        assigned_at:  new Date(today.getFullYear(), today.getMonth() + 2, 1),
        completed_at: new Date(today.getFullYear(), today.getMonth() + 2, 1),
    },
    {
        id: 29,
        user_id: 129,
        title: 'Task 29',
        description: 'Description for Task 29',
        task_time_progress: 0,
        total_task_time: 90,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth() + 2, 1),
        due_date:  new Date(today.getFullYear(), today.getMonth() + 2, 1),
        assigned_at:  new Date(today.getFullYear(), today.getMonth() + 2, 1),
        completed_at: new Date(today.getFullYear(), today.getMonth() + 2, 1),
    },
    {
        id: 30,
        user_id: 130,
        title: 'Task 30',
        description: 'Description for Task 30',
        task_time_progress: 0,
        total_task_time: 9000,
        status: 'pending',
        task_date:  new Date(today.getFullYear(), today.getMonth() + 2, 1),
        due_date:  new Date(today.getFullYear(), today.getMonth() + 2, 1),
        assigned_at:  new Date(today.getFullYear(), today.getMonth()+ 2, 1),
        completed_at: new Date(today.getFullYear(), today.getMonth()+ 2, 1),
    }
]