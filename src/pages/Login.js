import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
// import { UseAuthContext } from "../hooks/useAuthContext";
// import { useValidator } from "../hooks/useValidator";
function Login() {
  // const { verifiy } = useValidator();

  // const { user } = UseAuthContext();
  const { isLoading, error, login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handle_submit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    await login(email, password);
    // if (user) {
    //   verifiy();
    //   // navigate('/profile')
    // }
  };
  return (
    <React.Fragment>
      <div className="container" onSubmit={handle_submit}>
        <form class="form">
          <p class="title">Login </p>
          <p class="message">Login now and get full access to our app. </p>
          <label>
            <input
              class="input"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label>
            <input
              class="input"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>

          <button class="submit" type="submit" disabled={isLoading}>
            Submit
          </button>
          {error && <div className="error">{error}</div>}
          <p class="signin">
            Don't have an acount ? <Link to="/signup">Signin</Link>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
