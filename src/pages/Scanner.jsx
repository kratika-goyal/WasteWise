import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";
import { Upload } from "lucide-react";
export default function Scanner() {
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadModel() {
      const modelURL = "/model/model.json";
      const metadataURL = "/model/metadata.json";

      const loadedModel = await tmImage.load(
        modelURL,
        metadataURL
      );

      setModel(loadedModel);
    }

    loadModel();
  }, []);

  const wasteInfo = {
  Recyclable: {
    color: "#3b82f6",
    bin: "Blue Bin",
    icon: "♻️",
    points: "+12 pts",
    dispose: "Place clean recyclable items in the blue recycling bin.",
    tips: [
      "Remove food residue before recycling.",
      "Separate glass and plastic when possible."
    ]
  },

  organic: {
    color: "#16a34a",
    bin: "Green Bin",
    icon: "🌿",
    points: "+8 pts",
    dispose: "Compost in your green organic waste bin or home compost pile.",
    tips: [
      "Great for compost — high in nutrients.",
      "Cut large pieces to speed decomposition."
    ]
  },

  "E-WASTE": {
    color: "#eab308",
    bin: "E-Waste Center",
    icon: "🔋",
    points: "+20 pts",
    dispose: "Take electronics and batteries to an authorized e-waste center.",
    tips: [
      "Never throw batteries in regular bins.",
      "Store damaged batteries safely."
    ]
  },

  Hazardous: {
    color: "#ef4444",
    bin: "Hazardous Waste Facility",
    icon: "⚠️",
    points: "+25 pts",
    dispose: "Dispose at approved hazardous waste collection facilities.",
    tips: [
      "Keep away from children and pets.",
      "Do not mix with household waste."
    ]
  },

  Landfill: {
    color: "#6b7280",
    bin: "General Waste Bin",
    icon: "🗑️",
    points: "+2 pts",
    dispose: "Place in the regular household waste bin.",
    tips: [
      "Reduce landfill waste whenever possible.",
      "Reuse items before discarding."
    ]
  }
};
  const handleImage = async (e) => {
    const file = e.target.files[0];

    if (!file || !model) return;

    const imageURL = URL.createObjectURL(file);
    setImage(imageURL);

    setLoading(true);

    const img = document.createElement("img");
    img.src = imageURL;

    img.onload = async () => {
      const predictions = await model.predict(img);

      const bestPrediction = predictions.reduce((prev, current) =>
        prev.probability > current.probability
          ? prev
          : current
      );

      setPrediction(bestPrediction);

     const newScan = {
  item: file.name, // image ka naam
  category: bestPrediction.className,
  confidence: (
    bestPrediction.probability * 100
  ).toFixed(2) + "%",
  date: new Date().toLocaleDateString(),
};

      const currentUser =
  localStorage.getItem("currentUser");

const existingScans =
  JSON.parse(
    localStorage.getItem(
      `scans_${currentUser}`
    )
  ) || [];

existingScans.push(newScan);

localStorage.setItem(
  `scans_${currentUser}`,
  JSON.stringify(existingScans)
);
      setLoading(false);
    };
  };
const info =
  prediction
    ? wasteInfo[prediction.className] || wasteInfo["Landfill"]
    : null;
    
  return (
 <>
  <Navbar />

  <div className="scanner-page">

    <div className="scanner-header">
      <div className="scanner-badge">
        ✨ AI Classification
      </div>

      <h1>Identify your waste in seconds</h1>

      <p>
        Upload an image or snap a photo.
        We'll tell you exactly where it goes.
      </p>
    </div>

    <div className="scanner-grid">

      {/* Upload Section */}
      <div className="scanner-card">

        <h2>Upload Image</h2>

        <label className="upload-area">

  <input
    type="file"
    accept="image/*"
    onChange={handleImage}
    hidden
  />

  {!image ? (
    <>
      <div className="upload-icon">
  <Upload size={30} strokeWidth={2} color="white" />
</div>

      <h3>Drop an Image or Drag to upload</h3>

      <p>PNG, JPG up to 10MB</p>
    </>
  ) : (
    <img
      src={image}
      alt="preview"
      className="preview-image"
    />
  )}

</label>
<label className="choose-image-btn">
  <Upload size={15} />
  Choose Image

  <input
    type="file"
    accept="image/*"
    onChange={handleImage}
    hidden
  />
</label>
</div>

      {/* Result Section */}
      <div className="scanner-card">

        <h2>Classification Result</h2>

        {loading && (
          <div className="result-placeholder">
            <h3>.... Analyzing Image...</h3>
          </div>
        )}

        {!loading && !prediction && (
          <div className="result-placeholder">
            <h3>✨ Waiting for Image</h3>
            <p>Upload an image to see results</p>
          </div>
        )}

        {prediction && (
  <div className="result-card">

    <div className="result-top">

      <div>
  <span
    className="result-badge"
    style={{
      background: info.color
    }}
  >
    {prediction.className}
  </span>

  <h2 className="result-item">
    {prediction.className}
  </h2>
</div>

      <div className="confidence-box">
        <p>Confidence</p>
        <h2>
          {(prediction.probability * 100).toFixed(0)}%
        </h2>
      </div>

    </div>

 
   <div className="dispose-box">

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "18px"
    }}
  >
    <div
      className="bin-icon"
      style={{
        background: info.color
      }}
    >
      {info.icon}
    </div>

    <div className="dispose-text">
      <p>Dispose in</p>
      <h3>{info.bin}</h3>
    </div>
  </div>

  <div className="points">
    {info.points}
  </div>

</div>

    <div className="info-card">
      <h3>✓ How to dispose</h3>

      <p>{info.dispose}</p>
    </div>

    <div className="info-card">
      <h3>💡 Recycling tips</h3>

      <ul>
  {info.tips.map((tip, index) => (
    <li key={index}>{tip}</li>
  ))}
</ul>
    </div>

  </div>
)}

      </div>

    </div>

  </div>
</>
  );
}