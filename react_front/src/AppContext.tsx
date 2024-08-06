import React, {createContext, ReactNode, useState} from 'react';

interface AppContextProps {
    sharedData: string;
    setSharedData: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

// Crie um provedor de contexto
export const AppProvider = ({ children }: AppProviderProps ) => {
    const [sharedData, setSharedData] =
        useState("Este é o dado compartilhado");

    return (
        <AppContext.Provider value={{ sharedData, setSharedData }}>
            {children}
        </AppContext.Provider>
    );
};
