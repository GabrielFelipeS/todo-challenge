import {AsideBarRoot} from "./AsideBarRoot.tsx";
import {AsideBarIcon} from "./AsideBarIcon.tsx";
import {AsideBarTitle} from "./AsideBarTitle.tsx";
import {AsideBarTaskInfo} from "./AsideBarTaskInfo.tsx";
import {AsideBarList} from "./AsideBarList.tsx";

const AsideBarMenuToday = () => {
    return (
        <AsideBarList endPoints={["/", "/today", "/home"]}>
            <AsideBarIcon path="/src/assets/todayIcon.png" alt="sun icon"/>
            <AsideBarTitle title={"Hoje"}/>
            <AsideBarTaskInfo predicate={task => {
                const today = new Date();
                const taskDay = task.due_date;

                return (task.status == 'pending' || task.status == 'in_progress') &&
                    taskDay.getDate() == today.getDate() &&
                    taskDay.getMonth() == today.getMonth() &&
                    taskDay.getFullYear() == today.getFullYear();

            }}/>
        </AsideBarList>
    )
}

const AsideBarMenuTomorrow = () => {
    return (
        <AsideBarList endPoints={["/tomorrow"]}>
            <AsideBarIcon path="/src/assets/tomorrowIcon.png" alt="tomorrow icon"/>
            <AsideBarTitle title={"Amanhã"}/>
            <AsideBarTaskInfo predicate={task => {
                const today = new Date();
                const taskDay = task.due_date;
                const tomorrow = today.getDate() + 1;

                return (task.status == 'pending' || task.status == 'in_progress') &&
                    taskDay.getDate() == tomorrow &&
                    taskDay.getMonth() == today.getMonth() &&
                    taskDay.getFullYear() == today.getFullYear();

            }}/>
        </AsideBarList>
    );
}

const AsideBarMenuThisWeek = () => {
    return (
        <AsideBarList endPoints={["/calendar"]}>
            <AsideBarIcon path="/src/assets/calendarIcon.png" alt="calendar icon"/>
            <AsideBarTitle title={"Esta Semana"}/>
            <AsideBarTaskInfo predicate={task => {
                const todayDate = new Date();
                const taskDay = task.due_date;

                const firtsDayOfWeek = todayDate.getDate() - todayDate.getDay();
                const lastDayOfWeek = firtsDayOfWeek + 6

                return (task.status == 'pending' || task.status == 'in_progress') &&
                    taskDay.getDate() >= firtsDayOfWeek &&
                    taskDay.getDate() <= lastDayOfWeek &&
                    taskDay.getMonth() == todayDate.getMonth() &&
                    taskDay.getFullYear() == todayDate.getFullYear();

            }}/>
        </AsideBarList>
    );
}

const AsideBarMenuNextSevenDays = () => {
    return (
        <AsideBarList endPoints={["/sevendays"]}>
            <AsideBarIcon path="/src/assets/7DaysIcon.png" alt="7 Days Icon icon"/>
            <AsideBarTitle title={"Próximos 7 Dias"}/>
            <AsideBarTaskInfo predicate={task => {
                const todayDate = new Date();
                const taskDay = task.due_date;

                const today = todayDate.getDate();
                const next7Days = today + 7;

                return (task.status == 'pending' || task.status == 'in_progress') &&
                    taskDay.getDate() > today &&
                    taskDay.getDate() <= next7Days &&
                    taskDay.getMonth() == todayDate.getMonth() &&
                    taskDay.getFullYear() == todayDate.getFullYear();
            }}/>
        </AsideBarList>
    );
}

const AsideBarMenuPlanned = () => {
    return (
        <AsideBarList endPoints={["/planned"]}>
            <AsideBarIcon path="/src/assets/plannedIcon.png" alt="Planned Icon icon"/>
            <AsideBarTitle title={"Planejado"}/>
            <AsideBarTaskInfo predicate={task => {
                const todayDate = new Date();
                const taskDate = task.due_date;

                const monthCurrent = todayDate.getMonth();

                return (task.status == 'pending' || task.status == 'in_progress') &&
                    taskDate.getMonth() >= monthCurrent;
            }}/>
        </AsideBarList>
    );
}

const AsideBarMenuCompleted = () => {
    return (
        <AsideBarList endPoints={["/concluded"]}>
            <AsideBarIcon path="/src/assets/concludedIcon.png" alt="concluded Icon icon"/>
            <AsideBarTitle title={"Concluido"}/>
            <AsideBarTaskInfo predicate={task => task.status == "completed"}/>
        </AsideBarList>
    );
}

const AsideBarMenuTasks = () => {
    return (
        <AsideBarList endPoints={["/tasklist"]}>
            <AsideBarIcon path="/src/assets/TasksIcon.png" alt="task list Icon icon"/>
            <AsideBarTitle title={"Tarefas"}/>
            <AsideBarTaskInfo predicate={task => task.id == task.id}/>
        </AsideBarList>
    );
}

export const AsideBarMenu = {
    Root: AsideBarRoot,
    Today: AsideBarMenuToday,
    Tomorrow: AsideBarMenuTomorrow,
    ThisWeek: AsideBarMenuThisWeek,
    NextSevenDays: AsideBarMenuNextSevenDays,
    Planned: AsideBarMenuPlanned,
    Completed: AsideBarMenuCompleted,
    Tasks: AsideBarMenuTasks,
}