import { Mail, Lock, Leaf } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    const savedEmail =
      localStorage.getItem("email");

    const savedPassword =
      localStorage.getItem("password");

   if (
  email === savedEmail &&
  password === savedPassword
) {
  localStorage.setItem(
    "isLoggedIn",
    "true"
  );

  localStorage.setItem(
    "currentUser",
    email
  );

  navigate("/profile");
} else {
  alert(
    "Invalid email or password. Please create an account first."
  );
}
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <Leaf size={38} />
        </div>

        <h1>Welcome back</h1>

        <p>
          Sign in to track your eco impact.
        </p>

        <button className="google-btn">
          Continue with Google
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <form onSubmit={handleSignIn}>

          <div className="input-group">
            <Mail size={20} />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="input-group">
            <Lock size={20} />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className="signin-btn"
          >
            Sign In
          </button>

        </form>

        <p className="auth-footer">
          New here?{" "}
          <Link to="/signup">
            Create an account
          </Link>
        </p>

        <Link
          to="/"
          className="back-home"
        >
          ← Back to home
        </Link>

      </div>

    </div>
  );
}