import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/signin");
  };

  return (
    <div className="navbar">
      <div className="logo">
        ♻️ WasteWise
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/scanner">Scanner</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/history">History</Link>

        {isLoggedIn && (
          <Link to="/profile">
            Profile
          </Link>
        )}
      </div>

      <div className="nav-right">
        {!isLoggedIn ? (
          <Link to="/signin">
            <button className="signin-nav-btn">
              Sign In
            </button>
          </Link>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Link to="/profile">
              <button className="signin-nav-btn">
                Profile
              </button>
            </Link>

            <button
              className="signout-nav-btn"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}