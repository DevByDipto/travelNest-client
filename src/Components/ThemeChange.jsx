
import React, { useState } from 'react'
import { MdLightMode, MdOutlineNightlightRound } from 'react-icons/md';

const ThemChange = () => {
     const [lightTheme, setLightTheme] = useState(false);
      const handleTheme = () => {
        if (lightTheme) {
          document
            .getElementsByTagName("html")[0]
            .setAttribute("data-theme", "dark");
        } else {
          document
            .getElementsByTagName("html")[0]
            .setAttribute("data-theme", "light");
        }
      };
  return (
    <div   className=" "
    onClick={() => handleTheme(setLightTheme(!lightTheme))}>
        
          {lightTheme ?<MdLightMode size={25} /> : <MdLightMode size={25} />}
    </div>
  )
}

export default ThemChange
