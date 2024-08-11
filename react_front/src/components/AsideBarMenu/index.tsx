import {AsideBarRoot} from "./AsideBarRoot.tsx";
import {AsideBarIcon} from "./AsideBarIcon.tsx";
import {AsideBarTitle} from "./AsideBarTitle.tsx";
import {AsideBarTaskInfo} from "./AsideBarTaskInfo.tsx";
import {AsideBarList} from "./AsideBarList.tsx";
import {
    ALL_TASKS_FILTER,
    COMPLETED_TASKS_FILTER,
    NEXT_SEVEN_TASKS_FILTER,
    PLANNED_TASKS_FILTER,
    THIS_WEEK_TASKS_FILTER,
    TODAY_TASKS_FILTER,
    TOMORROW_TASKS_FILTER
} from "./PredicateFilters.ts";

const AsideBarMenuToday = () => {
    return (
        <AsideBarList endPoints={["/", "/today", "/home"]}>
            <AsideBarIcon path="/src/assets/todayIcon.png" alt="sun icon"/>
            <AsideBarTitle title={"Hoje"}/>
            <AsideBarTaskInfo predicate={TODAY_TASKS_FILTER}/>
        </AsideBarList>
    )
}

const AsideBarMenuTomorrow = () => {
    return (
        <AsideBarList endPoints={["/tomorrow"]}>
            <AsideBarIcon path="/src/assets/tomorrowIcon.png" alt="tomorrow icon"/>
            <AsideBarTitle title={"Amanhã"}/>
            <AsideBarTaskInfo predicate={TOMORROW_TASKS_FILTER}/>
        </AsideBarList>
    );
}

const AsideBarMenuThisWeek = () => {
    return (
        <AsideBarList endPoints={["/calendar"]}>
            <AsideBarIcon path="/src/assets/calendarIcon.png" alt="calendar icon"/>
            <AsideBarTitle title={"Esta Semana"}/>
            <AsideBarTaskInfo predicate={THIS_WEEK_TASKS_FILTER}/>
        </AsideBarList>
    );
}

const AsideBarMenuNextSevenDays = () => {
    return (
        <AsideBarList endPoints={["/sevendays"]}>
            <AsideBarIcon path="/src/assets/7DaysIcon.png" alt="7 Days Icon icon"/>
            <AsideBarTitle title={"Próximos 7 Dias"}/>
            <AsideBarTaskInfo predicate={NEXT_SEVEN_TASKS_FILTER}/>
        </AsideBarList>
    );
}

const AsideBarMenuPlanned = () => {
    return (
        <AsideBarList endPoints={["/planned"]}>
            <AsideBarIcon path="/src/assets/plannedIcon.png" alt="Planned Icon icon"/>
            <AsideBarTitle title={"Planejado"}/>
            <AsideBarTaskInfo predicate={PLANNED_TASKS_FILTER}/>
        </AsideBarList>
    );
}

const AsideBarMenuCompleted = () => {
    return (
        <AsideBarList endPoints={["/concluded"]}>
            <AsideBarIcon path="/src/assets/concludedIcon.png" alt="concluded Icon icon"/>
            <AsideBarTitle title={"Concluido"}/>
            <AsideBarTaskInfo predicate={COMPLETED_TASKS_FILTER}/>
        </AsideBarList>
    );
}

const AsideBarMenuTasks = () => {
    return (
        <AsideBarList endPoints={["/tasklist"]}>
            <AsideBarIcon path="/src/assets/TasksIcon.png" alt="task list Icon icon"/>
            <AsideBarTitle title={"Tarefas"}/>
            <AsideBarTaskInfo predicate={ALL_TASKS_FILTER}/>
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