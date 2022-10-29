import Input from "./components/Input";
import Result from "./components/Result";
import { AppProvider } from './context/context'

const App = () => {
  return (
    <AppProvider>
      <Input />
      <Result />
    </AppProvider>
  );
}

export default App;
