import {AsideContainer} from "../../components/AsideContainer.tsx";
import {ContainerTaskInfo} from "../../components/ContainerTaskInfo/ContainerTaskInfo.tsx";
import {TODAY_TASKS_FILTER} from "../../components/AsideBarMenu/PredicateFilters.ts";

export default function Home() {
    return (
        <>
            <AsideContainer/>
            <div className="mt-12 ml-5 w-3/4 ">
                <h1 className=" text-ligth-primary dark:text-dark-primary">
                    Hoje
                </h1>
                <ContainerTaskInfo predicate={TODAY_TASKS_FILTER}/>
            </div>
        </>
    )
}