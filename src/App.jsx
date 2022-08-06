import { createContext, useReducer } from "react";
import { useRoutes } from "react-router-dom";
import HandleScroll from "./components/HandleScroll";
import Layout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";

export const ThemeContext = createContext();

function App() {
  const [theme, toggleTheme] = useReducer((state) => {
    return state === "dark" ? "light" : "dark";
  }, "light");
  const routes = useRoutes([
    {
      element: <HandleScroll />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className={theme === "dark" ? "dark" : ""}>{routes}</div>
    </ThemeContext.Provider>
  );
}

export default App;
