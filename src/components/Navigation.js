import React from "react";
import { Wrapper } from './styles/Navigation-Styles.js';

import useDarkMode from './hooks/useDarkMode.js';

const Navigation = () => {
  const [darkMode, setDarkMode ] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <Wrapper>
      <div className="navigation">
        <div className="title">
          <p>NASA Photo of the Day</p>
      </div>
      
      <div className="switch-wrapper">
        {darkMode && <div className="sun-white"></div>}
        {!darkMode && <div className="sun"></div>}
            <div className="dark-mode__toggle">
            
              <div
                label="switch"
                id="toggle"
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
              />
            </div>
            {darkMode && <div className="moon-white"></div>}
            {!darkMode && <div className="moon"></div>}
        </div>

    </div>
    </Wrapper>
    
    
      
  )

};

export default Navigation;