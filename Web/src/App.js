import Home from "./components/Home";
import Input from "./components/Input";
import Result from "./components/Result";
import { AppProvider } from './context/context'

const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
