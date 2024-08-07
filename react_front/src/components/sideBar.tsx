

export default function SideBar() {
    return (
        <aside className="w-[275px] max-md:w-[137px] max-sm:w-12  h-dvh bg-ligth-container dark:bg-dark-container">
            <div className="pt-16 pl-5  max-sm:pl-3">
                <p className="grid pt-3 grid-cols-6 max-md:grid-cols-2">
                    <img className=""
                         src="/src/assets/todayIcon.png" alt="teste" width="24" height="24"/>
                    <div
                        className="col-span-2 max-md:col-span-1 max-sm:hidden text-ligth-primary dark:text-dark-primary font-sans">
                        Hoje
                    </div>
                    <div
                        className="col-span-2 max-md:col-span-1 max-md:hidden text-ligth-tertiary dark:text-dark-tertiary text-sm leading-normal">
                        22h 30m
                    </div>
                    <div
                        className="col-start-auto max-md:hidden text-ligth-tertiary dark:text-dark-tertiary text-sm leading-normal">
                        0
                    </div>
                </p>

                <p className="grid pt-3 grid-cols-6 max-md:grid-cols-2">
                    <img className=""
                         src="/src/assets/todayIcon.png" alt="teste" width="24" height="24"/>
                    <div
                        className="col-span-2 max-md:col-span-1 max-sm:hidden text-ligth-primary dark:text-dark-primary font-sans">
                        Hoje
                    </div>
                    <div
                        className="col-span-2 max-md:col-span-1 max-md:hidden text-ligth-tertiary dark:text-dark-tertiary text-sm leading-normal">
                        22h 30m
                    </div>
                    <div
                        className="col-start-auto max-md:hidden text-ligth-tertiary dark:text-dark-tertiary text-sm leading-normal">
                        0
                    </div>
                </p>

                <p className="grid pt-3 grid-cols-6 max-md:grid-cols-2">
                    <img className=""
                         src="/src/assets/todayIcon.png" alt="teste" width="24" height="24"/>
                    <div
                        className="col-span-2 max-md:col-span-1 max-sm:hidden text-ligth-primary dark:text-dark-primary font-sans">
                        Hoje
                    </div>
                    <div
                        className="col-span-2 max-md:col-span-1 max-md:hidden text-ligth-tertiary dark:text-dark-tertiary text-sm leading-normal">
                        22h 30m
                    </div>
                    <div
                        className="col-start-auto max-md:hidden text-ligth-tertiary dark:text-dark-tertiary text-sm leading-normal">
                        0
                    </div>
                </p>

            </div>
        </aside>
    );
}