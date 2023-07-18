import { ThemeProvider, CssBaseline } from '@mui/material';
import { ProvidersProps } from './providers';
import { darkTheme } from "./dark.theme";

const AppProviders = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
};


export default AppProviders;
