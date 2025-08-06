import { createContext, useContext, type ReactNode } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
    danger: string;
  };
};

export const defaultTheme: Theme = {
  colors: {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-600 hover:bg-red-700",
  },
};

export const ThemeContext = createContext(defaultTheme);
export const useThemeContext = () => useContext(ThemeContext)
interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
}) => {

    console.log(theme)
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
