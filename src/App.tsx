import { MuiMode } from './components';
import { AppProviders } from './providers';

const App = () => {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
};

export default App;
