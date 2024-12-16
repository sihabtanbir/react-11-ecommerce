import React from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {

    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme")? localStorage.getItem("theme"): "light"
    );

    const element =document.documentElement; //html element 
    React.useEffect(()=> {
        if (theme == "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

  return (
    <div className='relative'>
        <MdOutlineDarkMode  
        onClick={()=> setTheme(theme == "light" ? "dark" : "light" )}
        className='text-2xl cursor-pointer drop-shadow-md transition-all duration-300 absolute right-0 z-10'/>
        <MdDarkMode 
         onClick={()=> setTheme(theme == "light" ? "dark" : "light" )}
          className='text-2xl cursor-pointer drop-shadow-md transition-all duration-300 '/>
    </div>
  )
}

export default DarkMode