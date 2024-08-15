type Status = 'pending' | 'in_progress' | 'completed' | 'canceled';

export type Task = {
    id: number
    user_id: number
    title: string
    description: string
    total_task_time: number
    status: Status
    task_date: Date
    due_date: Date
    assigned_at: Date
    completed_at: Date
}