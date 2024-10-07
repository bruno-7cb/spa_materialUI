import { createTheme } from '@mui/material';
import { red, teal } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark', // Tema escuro
    primary: {
      main: '#D32F2F', // Cor principal: Vermelho tomate/escuro
      dark: red[900],  // Variante mais escura do vermelho
      light: red[500], // Variante mais clara do vermelho
      contrastText: '#ffffff', // Texto branco para bom contraste com o vermelho
    },
    secondary: {
      main: teal[300], // Teal mais claro para manter o contraste no modo escuro
    },
    background: {
      default: '#121212', // Fundo padrão bem escuro (um cinza muito escuro)
      paper: '#1E1E1E',   // Fundo para elementos de "papel" (como cartões), ligeiramente mais claro
    },
  },
});
