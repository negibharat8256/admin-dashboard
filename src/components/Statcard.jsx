const StatCard = ({ title, value, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-icon">{icon}</span>
        <p className="stat-title">{title}</p>
      </div>
      <h2 className="stat-value">{value}</h2>
    </div>
  );
};

export default StatCard;
