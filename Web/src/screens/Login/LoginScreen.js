import { useState } from 'react';
import { useAuth } from '../../services/authContext';

const LoginScreen = () => {
  const [user, setUser] = useState({
    user: "",
    password: ""
  });
  const [error, setError] = useState("");

  const { login, loginWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      var res = await login(user.email, user.password);
      //navigate("/");t
      console("Login ok", res);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      //navigate("/");
      console.log("google")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="card col-md-6 offset-md-3">
      <div className='card-header'>
        Login
      </div>
      <div className='card-body'>
        <form
          onSubmit={handleSubmit}
        >
          <div className='mb-3'>
            <label>Email</label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">@</span>
              <input type="email" name="email" onChange={handleChange} class="form-control" placeholder="youremail@company.tld" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div className="mb-3">
            <label>Password</label>
            <div class="mb-3">
              <input type="password" placeholder="*************" onChange={handleChange} name="password" id="password" class="form-control" />
            </div>
          </div>

          <div className="flex">
            <button
              className="btn btn-primary"
              type="submit"
            >
              Iniciar
            </button>
            <button
              onClick={handleGoogleSignin}
              className="btn btn-success"
            >
              Entrar con Google
            </button>
          </div>
        </form>

        <p className="my-4 text-sm flex justify-between px-3">
          Crear Cuenta?
        </p>
      </div>
    </div>

  )
}

export default LoginScreen;