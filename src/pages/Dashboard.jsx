import Navbar from "../components/Navbar";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  ScanSearch,
  Leaf,
  Trophy,
  TrendingUp,
} from "lucide-react";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#eab308",
  "#ef4444",
  "#6b7280",
];

export default function Dashboard() {
  const currentUser =
  localStorage.getItem("currentUser");

const scans =
  JSON.parse(
    localStorage.getItem(
      `scans_${currentUser}`
    )
  ) || [];

  const totalScans = scans.length;

  const categoryData = [
    {
      name: "Recyclable",
      value: scans.filter(
        (s) =>
          s.category.toLowerCase() ===
          "recyclable"
      ).length,
    },
    {
      name: "Organic",
      value: scans.filter(
        (s) =>
          s.category.toLowerCase() ===
          "organic"
      ).length,
    },
    {
      name: "E-Waste",
      value: scans.filter(
        (s) =>
          s.category.toLowerCase() ===
          "e-waste"
      ).length,
    },
    {
      name: "Hazardous",
      value: scans.filter(
        (s) =>
          s.category.toLowerCase() ===
          "hazardous"
      ).length,
    },
    {
      name: "Landfill",
      value: scans.filter(
        (s) =>
          s.category.toLowerCase() ===
          "landfill"
      ).length,
    },
  ];

  const categories = [
    ...new Set(scans.map((s) => s.category)),
  ].length;

  const ecoPoints = scans.length * 5;

  const sustainability = Math.min(
    ecoPoints,
    100
  );

  return (
    <>
      <Navbar />

      <div className="dashboard-page">

        <div className="dashboard-header">
          <h1>Your Impact Dashboard</h1>

          <p>
            A snapshot of your sustainability
            journey.
          </p>
        </div>

        <div className="dashboard-stats">

          <div className="stat-card">
            <div className="stat-icon">
              <ScanSearch size={26} />
            </div>

            <h4>TOTAL SCANS</h4>
            <h2>{totalScans}</h2>
            <p>All-time</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Leaf size={26} />
            </div>

            <h4>CATEGORIES</h4>
            <h2>{categories}</h2>
            <p>Identified</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Trophy size={26} />
            </div>

            <h4>ECO POINTS</h4>
            <h2>{ecoPoints}</h2>
            <p>Earned</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <TrendingUp size={26} />
            </div>

            <h4>SUSTAINABILITY</h4>
            <h2>{sustainability}/100</h2>
            <p>Score</p>
          </div>

        </div>

        <div className="dashboard-charts">

          <div className="chart-card">
            <h2>Waste by Category</h2>

            <p>
              Breakdown of what you've scanned.
            </p>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChart>
                <Pie
                  data={categoryData}
                  innerRadius={70}
                  outerRadius={110}
                  dataKey="value"
                >
                  {categoryData.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
<div className="chart-card tips-card">
  <h2>🌱 Sustainability Tips</h2>

  <p className="tips-subtitle">
    Small actions create a big environmental impact.
  </p>

  <div className="tip-item">
    ♻️ Clean recyclable items before disposal
  </div>

  <div className="tip-item">
    🌿 Compost organic waste whenever possible
  </div>

  <div className="tip-item">
    🔋 Take batteries to e-waste centers
  </div>

  <div className="tip-item">
    💧 Reuse containers and bottles
  </div>

  <div className="tip-item">
    🌍 Reduce single-use plastics
  </div>
</div>
        </div>

        <div className="chart-card recent-card">
          <h2>Recent Activity</h2>

          {scans.length === 0 ? (
            <p>
              No scans yet. Start scanning ♻️
            </p>
          ) : (
            [...scans]
              .reverse()
              .slice(0, 5)
              .map((scan, index) => (
                <div
                  className="recent-item"
                  key={index}
                >
                  <div className="recent-left">

                    <strong>
                      {scan.category.toLowerCase() ===
                        "recyclable" &&
                        "♻️ "}

                      {scan.category.toLowerCase() ===
                        "organic" &&
                        "🌿 "}

                      {scan.category.toLowerCase() ===
                        "e-waste" &&
                        "🔋 "}

                      {scan.category.toLowerCase() ===
                        "hazardous" &&
                        "⚠️ "}

                      {scan.category.toLowerCase() ===
                        "landfill" &&
                        "🗑️ "}

                      {scan.item}
                    </strong>

                    <p>
                      Confidence:{" "}
                      {scan.confidence}
                    </p>

                  </div>

                  <span>{scan.date}</span>
                </div>
              ))
          )}
        </div>

      </div>
    </>
  );
}