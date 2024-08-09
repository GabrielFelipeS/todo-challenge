import {Task} from "../../types/Task.ts";

export const mockTasks: Task[] = [
    {
        id: 1,
        user_id: 101,
        title: 'Task 1',
        description: 'Description for Task 1',
        total_task_time: 120,
        status: 'pending',
        due_date: new Date('2024-08-08T10:00:00'),
        assigned_at: new Date('2024-08-01T09:00:00'),
        completed_at: new Date('2024-08-15T12:00:00')
    },
    {
        id: 2,
        user_id: 102,
        title: 'Task 2',
        description: 'Description for Task 2',
        total_task_time: 90,
        status: 'in_progress',
        due_date: new Date('2024-08-08T10:00:00'),
        assigned_at: new Date('2024-08-05T11:00:00'),
        completed_at: new Date('2024-08-20T15:30:00')
    },
    {
        id: 3,
        user_id: 103,
        title: 'Task 3',
        description: 'Description for Task 3',
        total_task_time: 60,
        status: 'completed',
        due_date: new Date('2024-08-09T16:00:00'),
        assigned_at: new Date('2024-08-9T13:00:00'),
        completed_at: new Date('2024-08-10T17:00:00')
    },
    {
        id: 4,
        user_id: 104,
        title: 'Task 4',
        description: 'Description for Task 4',
        total_task_time: 45,
        status: 'canceled',
        due_date: new Date('2024-08-15T09:00:00'),
        assigned_at: new Date('2024-08-10T08:00:00'),
        completed_at: new Date('2024-08-25T09:45:00')
    },
    {
        id: 5,
        user_id: 105,
        title: 'Task 5',
        description: 'Description for Task 5',
        total_task_time: 150,
        status: 'pending',
        due_date: new Date('2024-08-09T11:00:00'),
        assigned_at: new Date('2024-08-15T10:00:00'),
        completed_at: new Date('2024-09-01T13:30:00')
    },
    {
        id: 6,
        user_id: 106,
        title: 'Task 6',
        description: 'Description for Task 6',
        total_task_time: 30,
        status: 'in_progress',
        due_date: new Date('2024-08-18T15:00:00'),
        assigned_at: new Date('2024-08-05T14:00:00'),
        completed_at: new Date('2024-08-18T15:30:00')
    },
    {
        id: 7,
        user_id: 107,
        title: 'Task 7',
        description: 'Description for Task 7',
        total_task_time: 75,
        status: 'completed',
        due_date: new Date('2024-09-12T13:00:00'),
        assigned_at: new Date('2024-08-01T12:00:00'),
        completed_at: new Date('2024-08-12T14:15:00')
    },
    {
        id: 8,
        user_id: 108,
        title: 'Task 8',
        description: 'Description for Task 8',
        total_task_time: 200,
        status: 'canceled',
        due_date: new Date('2024-08-30T17:00:00'),
        assigned_at: new Date('2024-08-10T16:00:00'),
        completed_at: new Date('2024-08-30T17:00:00')
    },
    {
        id: 9,
        user_id: 109,
        title: 'Task 9',
        description: 'Description for Task 9',
        total_task_time: 110,
        status: 'pending',
        due_date: new Date('2024-09-05T10:00:00'),
        assigned_at: new Date('2024-08-20T09:00:00'),
        completed_at: new Date('2024-09-05T11:50:00')
    },
    {
        id: 10,
        user_id: 110,
        title: 'Task 10',
        description: 'Description for Task 10',
        total_task_time: 95,
        status: 'in_progress',
        due_date: new Date('2024-08-22T14:00:00'),
        assigned_at: new Date('2024-08-05T13:00:00'),
        completed_at: new Date('2024-08-22T15:35:00')
    },
    {
        id: 11,
        user_id: 111,
        title: 'Task 11',
        description: 'Description for Task 11',
        total_task_time: 80,
        status: 'pending',
        due_date: new Date('2024-08-25T10:00:00'),
        assigned_at: new Date('2024-08-10T09:00:00'),
        completed_at: new Date('2024-08-25T11:20:00')
    },
    {
        id: 12,
        user_id: 112,
        title: 'Task 12',
        description: 'Description for Task 12',
        total_task_time: 140,
        status: 'completed',
        due_date: new Date('2024-08-28T12:00:00'),
        assigned_at: new Date('2024-08-01T11:00:00'),
        completed_at: new Date('2024-08-28T14:20:00')
    },
    {
        id: 13,
        user_id: 113,
        title: 'Task 13',
        description: 'Description for Task 13',
        total_task_time: 50,
        status: 'in_progress',
        due_date: new Date('2024-08-30T15:00:00'),
        assigned_at: new Date('2024-08-05T14:00:00'),
        completed_at: new Date('2024-08-30T16:10:00')
    },
    {
        id: 14,
        user_id: 114,
        title: 'Task 14',
        description: 'Description for Task 14',
        total_task_time: 100,
        status: 'canceled',
        due_date: new Date('2024-09-01T16:00:00'),
        assigned_at: new Date('2024-08-10T15:00:00'),
        completed_at: new Date('2024-09-01T17:40:00')
    },
    {
        id: 15,
        user_id: 115,
        title: 'Task 15',
        description: 'Description for Task 15',
        total_task_time: 60,
        status: 'pending',
        due_date: new Date('2024-09-05T11:00:00'),
        assigned_at: new Date('2024-08-20T10:00:00'),
        completed_at: new Date('2024-09-05T12:00:00')
    },
    {
        id: 16,
        user_id: 116,
        title: 'Task 16',
        description: 'Description for Task 16',
        total_task_time: 130,
        status: 'completed',
        due_date: new Date('2024-09-10T13:00:00'),
        assigned_at: new Date('2024-09-01T12:00:00'),
        completed_at: new Date('2024-09-10T15:10:00')
    },
    {
        id: 17,
        user_id: 117,
        title: 'Task 17',
        description: 'Description for Task 17',
        total_task_time: 70,
        status: 'in_progress',
        due_date: new Date('2024-09-15T14:00:00'),
        assigned_at: new Date('2024-09-05T13:00:00'),
        completed_at: new Date('2024-09-15T15:10:00')
    },
    {
        id: 18,
        user_id: 118,
        title: 'Task 18',
        description: 'Description for Task 18',
        total_task_time: 90,
        status: 'canceled',
        due_date: new Date('2024-09-20T15:00:00'),
        assigned_at: new Date('2024-09-10T14:00:00'),
        completed_at: new Date('2024-09-20T16:30:00')
    }
]