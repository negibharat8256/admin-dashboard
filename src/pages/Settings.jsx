import { useTheme } from "../context/ThemeContext";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>

      {/* Account Settings */}
      <div className="settings-card">
        <h3>Account Settings</h3>

        <div className="form-group">
          <label>Admin Name</label>
          <input type="text" placeholder="Admin User" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="admin@test.com" />
        </div>

        <button>Save Changes</button>
      </div>

      {/* Preferences */}
      <div className="settings-card">
        <h3>Preferences</h3>

        <div className="form-group horizontal">
          <label>Enable Notifications</label>
          <input type="checkbox" />
        </div>

        <div className="form-group horizontal">
          <label>Dark Mode</label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </div>
      </div>

      {/* Danger Zone */}
      <div className="settings-card danger-zone">
        <h3>Danger Zone</h3>

        <p className="danger-text">
          Logging out will end your current session.
        </p>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;
