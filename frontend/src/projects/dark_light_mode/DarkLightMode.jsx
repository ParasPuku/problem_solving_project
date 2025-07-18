import { useEffect, useState } from "react";
import Toggle from "../components/Toggle";
import "./DarkLightMode.css";
function DarkLightMode() {
  const [theme, setTheme] = useState("light");

  // On load, check localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);
  const handleToggleChange = (isDark) => {
    const newTheme = isDark ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div
      className="dark-light-wrapper"
      style={{ width: "1080px", height: "800px" }}
    >
      <div className="top-header" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <h3>{theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}</h3>
      </div>
      <div className="toggle-right-section">
        <Toggle label="Dark Mode" onToggle={handleToggleChange} />
      </div>
      <div className="user-container">
        <div class="user-card">
          <div class="user-placeholder">User 1</div>
          <div class="user-info">
            <h3>John Doe</h3>
            <p>
              <span class="label">Email:</span> john.doe@example.com
            </p>
            <p>
              <span class="label">Phone:</span> +1 234 567 8901
            </p>
            <div class="address">
              <p>
                <span class="label">Address:</span>
              </p>
              <p>12 Rose Street</p>
              <p>New York, 10001</p>
              <p>New York, USA</p>
            </div>
          </div>
        </div>

        {/*  User 2 (Right aligned) */}
        <div class="user-card">
          <div class="user-placeholder">User 2</div>
          <div class="user-info">
            <h3>Jane Smith</h3>
            <p>
              <span class="label">Email:</span> jane.smith@example.com
            </p>
            <p>
              <span class="label">Phone:</span> +44 789 123 4567
            </p>
            <div class="address">
              <p>
                <span class="label">Address:</span>
              </p>
              <p>88 Maple Avenue</p>
              <p>London, NW1 4LE</p>
              <p>England, UK</p>
            </div>
          </div>
        </div>
        <div class="user-card">
          <div class="user-placeholder">User 1</div>
          <div class="user-info">
            <h3>John Doe</h3>
            <p>
              <span class="label">Email:</span> john.doe@example.com
            </p>
            <p>
              <span class="label">Phone:</span> +1 234 567 8901
            </p>
            <div class="address">
              <p>
                <span class="label">Address:</span>
              </p>
              <p>12 Rose Street</p>
              <p>New York, 10001</p>
              <p>New York, USA</p>
            </div>
          </div>
        </div>

        {/*  User 2 (Right aligned) */}
        <div class="user-card">
          <div class="user-placeholder">User 2</div>
          <div class="user-info">
            <h3>Jane Smith</h3>
            <p>
              <span class="label">Email:</span> jane.smith@example.com
            </p>
            <p>
              <span class="label">Phone:</span> +44 789 123 4567
            </p>
            <div class="address">
              <p>
                <span class="label">Address:</span>
              </p>
              <p>88 Maple Avenue</p>
              <p>London, NW1 4LE</p>
              <p>England, UK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DarkLightMode;
