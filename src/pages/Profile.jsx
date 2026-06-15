import Navbar from "../components/Navbar";
import { ScanSearch, Trophy, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Profile() {
  const navigate = useNavigate();
  const isLoggedIn =
  localStorage.getItem("isLoggedIn");

useEffect(() => {
  if (!isLoggedIn) {
    navigate("/signin");
  }
}, [isLoggedIn, navigate]);
 const handleSignOut = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");

  navigate("/signin");
};
  const currentUser =
  localStorage.getItem("currentUser");

const scans =
  JSON.parse(
    localStorage.getItem(
      `scans_${currentUser}`
    )
  ) || [];
  const totalScans = scans.length;

  const ecoPoints = totalScans * 5;

  const categories = [
    ...new Set(scans.map((scan) => scan.category))
  ].length;

  const nextMilestone =
    ecoPoints < 50
      ? 50
      : ecoPoints < 100
      ? 100
      : ecoPoints < 250
      ? 250
      : 500;

  const progress =
    (ecoPoints / nextMilestone) * 100;

  return (
    <>
      <Navbar />

      <div className="profile-page">

        <div className="profile-grid">

          {/* LEFT SIDE */}
          <div className="profile-card">

            <div className="avatar">
              WW
            </div>

            <h2>
  {localStorage.getItem("name") || "WasteWise User"}
</h2>

<p>
  {localStorage.getItem("email") || "No email added"}
</p>

<p>
 {localStorage.getItem("phone") || "No phone added"}
</p>

<p>
{localStorage.getItem("city") || "No city added"}
</p>

           <div className="profile-actions">

  <button
    className="edit-btn"
    onClick={() => navigate("/edit-profile")}
  >
    Edit Profile
  </button>

  <button
    className="signout-btn"
    onClick={handleSignOut}
  >
    Sign Out
  </button>

</div>

            <div className="profile-stat">
              <div>
                <ScanSearch size={20} />
                <span>Total Scans</span>
              </div>

              <strong>{totalScans}</strong>
            </div>

            <div className="profile-stat">
              <div>
                <Trophy size={20} />
                <span>Eco Points</span>
              </div>

              <strong>{ecoPoints}</strong>
            </div>

            <div className="profile-stat">
              <div>
                <Sparkles size={20} />
                <span>Badges</span>
              </div>

              <strong>
                {[
                  totalScans >= 1,
                  totalScans >= 10,
                  totalScans >= 25,
                  ecoPoints >= 100,
                  ecoPoints >= 500,

                ].filter(Boolean).length}
              </strong>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="profile-right">

            {/* Progress */}
            <div className="progress-card">

              <div className="progress-top">

                <div>
                  <h2>Progress to next milestone</h2>

                  <p>
                    {ecoPoints} / {nextMilestone} eco points
                  </p>
                </div>

                <h1>
                  {Math.min(progress, 100).toFixed(0)}%
                </h1>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${Math.min(
                      progress,
                      100
                    )}%`,
                  }}
                />

              </div>

            </div>

           {/* Badges */}
<div className="badges-card">

  <h2>Achievement Badges</h2>

  <p className="badge-subtitle">
    Earned through your sustainability actions.
  </p>

  <div className="badge-grid">

    <div
      className={`badge-box ${
        totalScans >= 1 ? "earned" : ""
      }`}
    >
      <h3>🌱 First Scan</h3>

      <p>Completed your first scan</p>

      {totalScans >= 1 && (
        <span className="earned-tag">
          EARNED
        </span>
      )}
    </div>

    <div
      className={`badge-box ${
        totalScans >= 10 ? "earned" : ""
      }`}
    >
      <h3>🛡️ Eco Warrior</h3>

      <p>Reached 10 scans</p>

      {totalScans >= 10 && (
        <span className="earned-tag">
          EARNED
        </span>
      )}
    </div>

    <div
      className={`badge-box ${
        totalScans >= 25 ? "earned" : ""
      }`}
    >
      <h3>🌍 Planet Saver</h3>

      <p>Reached 25 scans</p>

      {totalScans >= 25 && (
        <span className="earned-tag">
          EARNED
        </span>
      )}
    </div>

    <div
      className={`badge-box ${
        ecoPoints >= 100 ? "earned" : ""
      }`}
    >
      <h3>♻️ Recycling Pro</h3>

      <p>Earned 100 eco points</p>

      {ecoPoints >= 100 && (
        <span className="earned-tag">
          EARNED
        </span>
      )}
    </div>

    <div
      className={`badge-box ${
        ecoPoints >= 500 ? "earned" : ""
      }`}
    >
      <h3>🏆 Green Champion</h3>

      <p>Earned 500 eco points</p>

      {ecoPoints >= 500 && (
        <span className="earned-tag">
          EARNED
        </span>
      )}
    </div>

  </div>

</div>
<div className="milestones-card">

  <h2>Sustainability Milestones</h2>

  <div className="milestone-item">
    <div className="milestone-left">
      <div className="milestone-circle">50</div>

      <div>
        <h3>Eco Apprentice</h3>
        <p>Show the planet you care</p>
      </div>
    </div>

    <span>50 pts</span>
  </div>

  <div className="milestone-item">
    <div className="milestone-left">
      <div className="milestone-circle">100</div>

      <div>
        <h3>Recycling Pro</h3>
        <p>You've got the habit down</p>
      </div>
    </div>

    <span>100 pts</span>
  </div>

  <div className="milestone-item">
    <div className="milestone-left">
      <div className="milestone-circle">250</div>

      <div>
        <h3>Sustainability Star</h3>
        <p>Inspiring those around you</p>
      </div>
    </div>

    <span>250 pts</span>
  </div>

  <div className="milestone-item">
    <div className="milestone-left">
      <div className="milestone-circle">500</div>

      <div>
        <h3>Green Champion</h3>
        <p>A true changemaker</p>
      </div>
    </div>

    <span>500 pts</span>
  </div>

  <div className="milestone-item">
    <div className="milestone-left">
      <div className="milestone-circle">1000</div>

      <div>
        <h3>Planet Guardian</h3>
        <p>Top 1% eco-citizens</p>
      </div>
    </div>

    <span>1000 pts</span>
  </div>

</div>
          </div>

        </div>

      </div>
    </>
  );
}