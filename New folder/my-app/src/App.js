
import React, { useEffect } from 'react';
import { useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './App.css';


function App  ()  {
  
    const { isDarkMode } = useTheme();

    useEffect(() => {
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (

        <div className="App">
            <h1>this is project
   
            </h1>
            <ThemeToggle />

        </div>
    );
};

export default App;
