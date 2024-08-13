import {AsideContainer} from "../../components/AsideContainer.tsx";
import {ContainerTaskInfo} from "../../components/ContainerTaskInfo/ContainerTaskInfo.tsx";
import {NEXT_SEVEN_DAYS_TASKS_FILTER} from "../../components/AsideBarMenu/PredicateFilters.ts";


export default function SevenDays() {
    return (
        <>
            <AsideContainer/>
            <div className="mt-12 ml-5 w-3/4 ">
                <h1 className=" text-ligth-primary dark:text-dark-primary">
                    Próximos 7 dias
                </h1>
                <ContainerTaskInfo predicate={NEXT_SEVEN_DAYS_TASKS_FILTER}/>
            </div>
        </>
    )
}