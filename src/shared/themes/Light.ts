import { createTheme } from '@mui/material';
import { red, teal } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light', // Tema claro
    primary: {
      main: '#D32F2F', // Cor principal mais próxima do vermelho (tomate/vermelho escuro)
      dark: red[900],  // Variante mais escura
      light: red[500], // Variante mais clara
      contrastText: '#ffffff', // Texto em branco para contraste
    },
    secondary: {
      main: teal[500], // Cor secundária: Teal (verde-azulado)
    },
    background: {
      default: '#f5f5f5', // Fundo padrão claro
      paper: '#ffffff',   // Fundo branco para elementos de "papel"
    },
  },
});
''