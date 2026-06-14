import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function EditProfile() {
    const navigate = useNavigate();
const [name, setName] = useState(
  localStorage.getItem("name") || ""
);

const [email, setEmail] = useState(
  localStorage.getItem("email") || ""
);

const [phone, setPhone] = useState(
  localStorage.getItem("phone") || ""
);

const [city, setCity] = useState(
  localStorage.getItem("city") || ""
);
const handleSave = () => {
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("city", city);

  navigate("/profile");
};
  return (
    <>
      <Navbar />

      <div className="edit-profile-page">

        <div className="edit-profile-card">

          <div className="avatar">
            WW
          </div>

          <h1>Edit Profile</h1>

          <p>
            Update your WasteWise profile information.
          </p>

          <div className="form-group">
            <label>Full Name</label>

            <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

           <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>City</label>

            <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <button
            className="save-btn"
            onClick={handleSave}
            >
            Save Changes
            </button>

        </div>

      </div>
    </>
  );
}