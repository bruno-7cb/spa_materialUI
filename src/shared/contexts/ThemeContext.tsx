import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  Box,
  ThemeProvider as MUIThemeProvider,
  GlobalStyles,
} from "@mui/material";
import { LightTheme, DarkTheme } from "../themes";

interface IThemeContextData {
  /* 
    Cria uma interface para o contexto que irá 
    conter o nome do tema e a função para alternar entre os temas.
*/
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

// Cria um contexto para o tema da aplicação.
const ThemeContext = createContext<IThemeContextData | undefined>(undefined);

export const useAppThemeContext = () => {
  // Cria um hook personalizado para acessar o contexto do tema.
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useAppThemeContext must be used within an AppThemeProvider"
    );
  }
  return context;
};

interface IThemeProviderProps {
  // Define o tipo de children que o componente irá receber.
  children: ReactNode;
}

export const AppThemeProvider = ({ children }: IThemeProviderProps) => {
  // Cria um componente que irá prover o contexto do tema para toda a aplicação.
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
/*
 Cria uma função para alternar entre os temas.
 O useCallback é utilizado para salvar a função e evitar que a função seja recriada a cada renderização, já que ela não depende de nenhum valor externo [].
*/
    setThemeName((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);


  const currentTheme = useMemo(() => {
/*
Escolhe o tema atual com base no nome do tema.
O useMemo é utilizado para salvar o tema atual e só rederizar novamente quando [themeName] mudar..
*/
    return themeName === "light" ? LightTheme : DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
    {/* Prove o contexto com o nome do tema e a função para mudar o tema para toda a aplicação. */}
      <MUIThemeProvider theme={currentTheme}>
    {/* Aplica o tema a todos os filhos*/}
        <GlobalStyles
          styles={{
            "*": {
              boxSizing: "border-box",
              margin: 0,
              padding: 0,
            },
          }}
        />
        <Box
          sx={{ minWidth: "100vw", minHeight: "100vh" }}
          bgcolor={currentTheme.palette.background.default}
        >
          {children}
        </Box>
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
