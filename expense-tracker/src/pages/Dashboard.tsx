
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const activityData = [
    { name: "Shopping", totalSpend: 150, amount: 2300 },
    { name: "Home Decor", totalSpend: 3800, amount: 5000 },
    { name: "Garden", totalSpend: 1200, amount: 2000 },
    { name: "Car", totalSpend: 3000, amount: 4000 },
    { name: "Youtube", totalSpend: 4800, amount: 8000 },
];

const latestBudgets = [
    { name: "Shopping", spend: 150, remaining: 2150, total: 2300 },
    { name: "Home Decor", spend: 3800, remaining: 1200, total: 5000 },
];

export default function Dashboard() {
    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            {/* Greeting Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold">Hi, Game Play ✌️</h1>
                <p className="text-gray-600">Here's what's happening with your money. Let's manage your expense.</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                    <span className="text-xl font-bold">Total Budget</span>
                    <span className="text-2xl mt-2">$15100</span>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                    <span className="text-xl font-bold">Total Spend</span>
                    <span className="text-2xl mt-2">$4830</span>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                    <span className="text-xl font-bold">No. Of Budgets</span>
                    <span className="text-2xl mt-2">5</span>
                </div>
            </div>

            {/* Activity Bar Chart */}
            <div className="bg-white rounded-xl shadow p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Activity</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={activityData} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
                        <XAxis type="number" domain={[0, "dataMax"]} tick={{ fontSize: 12 }} />
                        <YAxis dataKey="name" type="category" tick={{ fontSize: 14 }} width={100} />
                        <Tooltip formatter={(value, name) => [`$${value}`, name]} />
                        <Bar dataKey="totalSpend" stackId="a" fill="#a78bfa" barSize={30} />
                        <Bar dataKey="amount" stackId="a" fill="#60a5fa" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Latest Budgets Section */}
            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-bold mb-4">Latest Budgets</h3>
                <div className="space-y-4">
                    {latestBudgets.map((budget) => (
                        <div key={budget.name} className="flex justify-between items-center">
                            <div>
                                <span className="text-lg font-bold">{budget.name}</span>
                                <p className="text-sm text-gray-500">
                                    ${budget.spend} Spend / ${budget.remaining} Remaining
                                </p>
                            </div>
                            <span className="text-lg font-bold">${budget.total}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


