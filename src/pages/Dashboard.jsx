import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import Section from "../components/Section";

const Dashboard = () => {
    return (
        <div>

            <Section title="Overview">
                <div className="stats-grid">
                    <StatCard title="Users" value="1,240" icon="👤" />
                    <StatCard title="Orders" value="320" icon="🛒" />
                    <StatCard title="Revenue" value="$12,400" icon="💰" />
                    <StatCard title="Growth" value="+18%" icon="📈" />
                </div>

                <Section title="Sales Overview">
                    <SalesChart />
                </Section>
            </Section>
        </div>
    );
};

export default Dashboard;
