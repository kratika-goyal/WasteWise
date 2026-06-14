import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  ScanSearch,
  BarChart3,
  History
} from "lucide-react";
import { Trophy } from "lucide-react";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="hero-content">

          <div className="badge">
            ♻️ UN SDG 12 · Responsible Consumption & Production
          </div>

         <h1>WasteWise</h1>
            <h3
            style={{
                color: "#15803d",
                fontWeight: "600",
                marginTop: "-10px",
                marginBottom: "25px",
            }}
            >
            AI-Powered Waste Classification & Disposal Assistant
            </h3>

            <p>
            A smart waste classification platform that helps you
            identify items, understand disposal rules, and track
            your contribution to a cleaner planet.
            </p>
          <div className="hero-buttons">
            <Link to="/scanner">
              <button className="primary-btn">
                ⛶   Start Scanning
             </button>
            </Link>

            <Link to="/dashboard">
              <button className="secondary-btn">
                View Dashboard  →
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mission-section">
  <div className="mission-left">
    <div className="mission-badge">
      🌍 Our Mission
    </div>

    <h2>
      Aligned with UN Sustainable
      Development Goal 12
    </h2>

    <p>
      SDG 12 calls for responsible consumption and production
      patterns. WasteWise tackles a root cause of recycling
      failure: people simply don't know where things go.
      We make the right choice the easy choice.
    </p>

    <ul>
      <li>✓ Reduce recycling contamination through accurate classification</li>
      <li>✓ Educate communities on proper waste segregation</li>
      <li>✓ Gamify sustainable behavior with rewards and badges</li>
      <li>✓ Track personal environmental impact over time</li>
    </ul>
  </div>

  <div className="stats-grid">
    <div className="stat-card">
      <h3>2B</h3>
      <p>Tons of waste produced globally each year</p>
    </div>

    <div className="stat-card">
      <h3>33%</h3>
      <p>Of food produced is wasted</p>
    </div>

    <div className="stat-card">
      <h3>9%</h3>
      <p>Of plastics get recycled worldwide</p>
    </div>

    <div className="stat-card">
      <h3>50M</h3>
      <p>Tons of e-waste discarded annually</p>
    </div>
  </div>
</div>
<div className="categories-section">
  <h2>Categories We Identify</h2>
  <p>
    Every item belongs somewhere — we help you find it.
  </p>

  <div className="categories-grid">
    <div className="category-card">
      <div className="icon recycle">♻️</div>
      <h3>Recyclable</h3>
      <p>Paper, plastic, glass & metal</p>
    </div>

    <div className="category-card">
      <div className="icon organic">🌿</div>
      <h3>Organic</h3>
      <p>Food scraps & garden waste</p>
    </div>

    <div className="category-card">
      <div className="icon ewaste">🔋</div>
      <h3>E-Waste</h3>
      <p>Electronics & batteries</p>
    </div>

    <div className="category-card">
      <div className="icon hazardous">⚠️</div>
      <h3>Hazardous</h3>
      <p>Chemicals & medical waste</p>
    </div>
    <div className="category-card">
  <div className="icon general">🗑️</div>
  <h3>General Waste</h3>
  <p>Non-recyclable household waste</p>
</div>
  </div>
</div>
<section className="features-section">
  <h2>Everything you need to waste less</h2>
  <p>Simple tools, real impact.</p>

  <div className="features-grid">

    <div className="feature-card">
      <div className="feature-icon">
        <ScanSearch size={25} />
      </div>

      <h3>Waste Scanner</h3>

      <p>
        Upload an image and get instant disposal
        guidance with confidence scores.
      </p>

      <Link to="/scanner" className="feature-link">
  Explore →
</Link>
    </div>

    <div className="feature-card">
      <div className="feature-icon">
        <BarChart3 size={25} />
      </div>

      <h3>Impact Dashboard</h3>

      <p>
        Track scans, eco points, and waste categories
        with clean analytics.
      </p>

      <Link to="/dashboard" className="feature-link">
  Explore →
</Link>
    </div>

    <div className="feature-card">
      <div className="feature-icon">
        <History size={25} />
      </div>

      <h3>Scan History</h3>

      <p>
        Review past scans and learn from your
        sustainability journey.
      </p>

      <Link to="/history" className="feature-link">
  Explore →
</Link>
    </div>

  </div>
</section>
<section className="cta-section">

  <div className="cta-card">

    <div className="cta-icon">
  <Trophy size={40} stroke="white" />
</div>

    <h2>Ready to make every scan count?</h2>

    <p>
      Join a community building a cleaner planet —
      one item at a time.
    </p>

    <Link to="/scanner">
      <button className="cta-btn">
        Start Your First Scan →
      </button>
    </Link>

  </div>

</section>
<footer className="footer">

  <div className="footer-content">

    <div className="footer-left">
      <h3>♻️ WasteWise</h3>

      <p>
        Empowering responsible consumption and production.
        Identify waste, learn proper disposal methods,
        and track your environmental impact.
      </p>
    </div>

    <div className="footer-links">
      <h4>Product</h4>
      <p>Waste Scanner</p>
      <p>Dashboard</p>
      <p>Scan History</p>
    </div>

    <div className="footer-links">
      <h4>Mission</h4>
      <p>SDG 12 Goals</p>
      <p>Sustainability Tips</p>
      <p>Community Impact</p>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 WasteWise • Built for SDG 12: Responsible Consumption & Production
  </div>

</footer>
    </>
  );
}