import React from 'react'

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = React.useState("light");

    React.useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);
