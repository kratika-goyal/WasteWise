import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 const handleSignup = (e) => {
  e.preventDefault();

  // if (localStorage.getItem("email")) {
  //   alert("Account already exists. Please sign in.");
  //   navigate("/signin");
  //   return;
  // }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("city", city);
  localStorage.setItem("password", password);

  alert("Account created successfully!");

  navigate("/signin");
};

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Create Account</h1>

        <p>
          Join WasteWise and start tracking your impact.
        </p>

        <form onSubmit={handleSignup}>

          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password (min 6 chars)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="signin-btn"
          >
            Create Account
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/signin">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}