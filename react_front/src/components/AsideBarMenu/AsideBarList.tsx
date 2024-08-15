import {ReactNode} from "react";
import {disapleAllSelectedInUl} from "./AsideBarRoot";
import {useNavigate} from "react-router-dom";

interface AsideBarProps {
    endPoints: string[],
    children: ReactNode
}

export function AsideBarList({endPoints, children}: AsideBarProps) {
    const navigate =  useNavigate();
    const currentEndpoint = window.location.pathname;
    const condition = endPoints.includes(currentEndpoint);

    function handlerPage(e: React.MouseEvent<HTMLLIElement>) {
        disapleAllSelectedInUl()
        e.currentTarget.classList.add('bg-ligth-selected', 'dark:bg-dark-selected')
        navigate(endPoints[0]);
    }

    return(
        <li
            onClick={handlerPage}
            className={`grid items-center justify-center pt-2 pb-2 grid-cols-6 cursor-pointer
            hover:bg-ligth-selected dark:hover:bg-dark-selected
            hover:rounded 
            max-md:grid-cols-3
            max-sm:grid-cols-1 max-sm:justify-items-center
            ${condition ? 'bg-ligth-selected dark:bg-dark-selected' : ''} `}
        >
                {children}
        </li>
    );
}