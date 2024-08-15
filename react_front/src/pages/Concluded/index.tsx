import {AsideContainer} from "../../components/AsideContainer.tsx";
import {COMPLETED_TASKS_FILTER} from "../../components/AsideBarMenu/PredicateFilters.ts";
import {MainComponent} from "../../components/MainComponent";

export default function Concluded() {
    return (
        <>
            <AsideContainer/>
            <MainComponent title="Concluido" predicate={COMPLETED_TASKS_FILTER}/>
        </>
    )
}