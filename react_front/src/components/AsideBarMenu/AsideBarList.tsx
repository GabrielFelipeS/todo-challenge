import {ReactNode} from "react";
import {disapleAllSelectedInUl} from "./AsideBarRoot.tsx";

interface AsideBarProps {
    endPoints: string[],
    children: ReactNode
}

export function AsideBarList({endPoints, children}: AsideBarProps) {
    const currentEndpoint = window.location.pathname;
    const condition = endPoints.includes(currentEndpoint);

    function handlerPage(e: React.MouseEvent<HTMLLIElement>) {
        disapleAllSelectedInUl()
        e.currentTarget.classList.add('bg-ligth-selected', 'dark:bg-dark-selected')
    }

    return(
        <li
            onClick={handlerPage}
            className={`grid items-center pt-3 grid-cols-6 cursor-pointer
            hover:bg-ligth-selected dark:hover:bg-dark-selected
            hover:rounded
            max-md:grid-cols-3 max-md:p-2
            max-sm:grid-cols-1 max-sm:justify-items-center
            ${condition ? 'bg-ligth-selected dark:bg-dark-selected' : ''} `}
        >
            {children}
        </li>
    );
}