import Input from "./components/Input";
import Result from "./components/Result";
import { AppProvider } from './context/context'
import LoginScreen from "./screens/Login/LoginScreen";
import { AuthProvider } from "./services/authContext";

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Input />
        <Result />
        <LoginScreen />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
