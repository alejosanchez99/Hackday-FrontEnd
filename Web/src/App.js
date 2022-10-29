import Home from "./components/Home";
import Input from "./components/Input";
import Result from "./components/Result";
import { AppProvider } from './context/context'
import LoginScreen from "./screens/Login/LoginScreen";
import Main from "./screens/Main/Main";
import { AuthProvider } from "./services/authContext";

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Main />
      </AppProvider>
  </AuthProvider>
  );
}

export default App;
