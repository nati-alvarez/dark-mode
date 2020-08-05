import {useEffect} from "react";

import useLocalStorage from "./useLocalStorage";

export function useDarkMode(value){
    const [darkMode, setDarkMode] = useLocalStorage("dark-mode", value);

    useEffect(() =>{
        if(darkMode === true){
            document.body.classList.add('dark-mode');
        }else {
            document.body.classList.remove("dark=mode");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}