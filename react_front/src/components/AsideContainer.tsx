import styled from "styled-components";
import 'tailwindcss/tailwind.css';
import {AsideBarMenu} from "./AsideBarMenu";

const Aside = styled.aside.attrs( {
   className: 'fixed w-[275px] max-md:w-[165px] max-md:pr-2 max-sm:w-12 ' +
               'max-sm:p-0 h-dvh bg-ligth-container dark:bg-dark-container'
})``;

const Container = styled.div.attrs({
    className: 'pt-16 pl-2  max-sm:pl-0'
})``;

export  function AsideContainer() {
    return (
       <Aside>
           <Container>
              <AsideBarMenu.Root>
                  <AsideBarMenu.Today/>
                  <AsideBarMenu.Tomorrow/>
                  <AsideBarMenu.ThisWeek/>
                  <AsideBarMenu.NextSevenDays/>
                  <AsideBarMenu.Planned/>
                  <AsideBarMenu.Tasks/>
                  <AsideBarMenu.Completed/>
              </AsideBarMenu.Root>
           </Container>
       </Aside>
    );
}