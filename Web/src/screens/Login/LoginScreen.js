import { useEffect, useState } from 'react';
import { useAuth } from '../../services/authContext';
import {useNavigate} from "react-router-dom";

const LoginScreen = () => {
  const [user, setUser] = useState({
    user: "",
    password: ""
  });
  const [error, setError] = useState("");
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setError("");
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      var res = await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/home");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="card mt-4 p-2" style={{width: "400px"}}>
      <div className='card-header'>
        Login
      </div>
      <div className='card-body'>
        <form
          onSubmit={handleSubmit}
        >
          <div className='mb-3'>
            <label>Email</label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="youremail@company.com" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div className="mb-3">
            <label>Password</label>
            <div className="mb-3">
              <input type="password" placeholder="*************" onChange={handleChange} name="password" id="password" className="form-control" />
            </div>
          </div>

          <div className="d-flex justify-content-evenly">
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
          {
            error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )
          }
        </form>


      </div>
    </div>

  )
}

export default LoginScreen;