import React, { useContext,useState, useEffect } from "react";

const CountryContext = React.createContext();

export function useCountry(){
    return useContext(CountryContext);
}
export function CountryProvider({children}){
    const [country, setCountry] = useState(JSON.parse(localStorage.getItem("country")) ?? null);

    return (
        <CountryContext.Provider value={{ country, setCountry}}>
            {children}
        </CountryContext.Provider>
    );
}