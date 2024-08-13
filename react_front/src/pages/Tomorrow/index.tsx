import {AsideContainer} from "../../components/AsideContainer.tsx";
import {ContainerTaskInfo} from "../../components/ContainerTaskInfo/ContainerTaskInfo.tsx";
import {TOMORROW_TASKS_FILTER} from "../../components/AsideBarMenu/PredicateFilters.ts";

export default function Tomorrow() {
    return (
        <>
            <AsideContainer/>
            <div className="mt-12 ml-5 w-3/4 ">
                <h1 className=" text-ligth-primary dark:text-dark-primary">
                    Tomorrow
                </h1>
                <ContainerTaskInfo predicate={TOMORROW_TASKS_FILTER}/>
            </div>
        </>
    )
}