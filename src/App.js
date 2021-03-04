import { ThemeProvider } from 'styled-components';
import Home from './components/Home';

import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
