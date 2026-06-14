import { useState } from "react";
import Navbar from "../components/Navbar";

export default function History() {
  const currentUser =
  localStorage.getItem("currentUser");

const scans =
  JSON.parse(
    localStorage.getItem(
      `scans_${currentUser}`
    )
  ) || [];
  const [filter, setFilter] = useState("All");

  const filteredScans =
    filter === "All"
      ? scans
      : scans.filter(
          (scan) =>
            scan.category.toLowerCase() ===
            filter.toLowerCase()
        );

  return (
    <>
      <Navbar />

      <div className="history-page">
        <h1>Scan History</h1>

        <p>
          Every item you've classified with WasteWise.
        </p>

        <div className="history-filters">
          <button
            className={
              filter === "All"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            className={
              filter === "Recyclable"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setFilter("Recyclable")}
          >
            Recyclable
          </button>

          <button
            className={
              filter === "Organic"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setFilter("Organic")}
          >
            Organic
          </button>

          <button
            className={
              filter === "Hazardous"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setFilter("Hazardous")}
          >
            Hazardous
          </button>

          <button
            className={
              filter === "E-WASTE"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setFilter("E-WASTE")}
          >
            E-Waste
          </button>

          <button
            className={
              filter === "Landfill"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setFilter("Landfill")}
          >
            Landfill
          </button>
        </div>

        <div className="history-table">

          <div className="history-header">
            <span>CATEGORY</span>
            <span>CONFIDENCE</span>
            <span>DATE</span>
          </div>

          {filteredScans.length === 0 ? (
            <div className="empty-history">
              No scans found.
            </div>
          ) : (
            filteredScans.map((scan, index) => (
              <div
                className="history-row"
                key={index}
              >
                <div>
                  <span
                    className={`category-pill ${
                      scan.category.toLowerCase() ===
                      "recyclable"
                        ? "pill-recyclable"
                        : scan.category.toLowerCase() ===
                          "organic"
                        ? "pill-organic"
                        : scan.category.toLowerCase() ===
                          "hazardous"
                        ? "pill-hazardous"
                        : scan.category.toLowerCase() ===
                          "e-waste"
                        ? "pill-ewaste"
                        : "pill-landfill"
                    }`}
                  >
                    {scan.category}
                  </span>
                </div>

                <div className="confidence-cell">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: scan.confidence,
                      }}
                    ></div>
                  </div>

                  <span>{scan.confidence}</span>
                </div>

                <div className="date-cell">
                  {scan.date}
                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </>
  );
}