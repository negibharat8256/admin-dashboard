import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

const data = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "Apr", sales: 700 },
    { name: "May", sales: 600 },
];

const SalesChart = () => {
    return (
        <div className="chart-card">
            <div className="chart-header">
                <h3>Sales Overview</h3>

                <select>
                    <option>Last 6 months</option>
                    <option>Last year</option>
                </select>
            </div>

            <ResponsiveContainer width="100%" height={240}>
                <LineChart data={data}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(148, 163, 184, 0.15)"
                    />

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#2563eb"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesChart;
