import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const initialData = [
    { name: "Shopping", totalSpend: 150, amount: 2300 },
    { name: "Home Decor", totalSpend: 500, amount: 3800 },
    { name: "Garden", totalSpend: 300, amount: 2500 },
    { name: "Car", totalSpend: 800, amount: 4000 },
    { name: "Youtube", totalSpend: 700, amount: 4500 },
];

export default function Budgets() {
    const [budgets, setBudgets] = useState(initialData);

    const handleAddBudget = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const name = (form.elements.namedItem("budgetName") as HTMLInputElement).value;
        const amount = parseFloat((form.elements.namedItem("budgetAmount") as HTMLInputElement).value);

        if (name && amount) {
            setBudgets((prevBudgets) => [...prevBudgets, { name, totalSpend: 0, amount }]);
            form.reset();
        }
    };

    // Calculate total budget and total spend dynamically
    const totalBudget = budgets.reduce((sum, budget) => sum + budget.amount, 0);
    const totalSpend = budgets.reduce((sum, budget) => sum + budget.totalSpend, 0);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Greeting Section */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Hi, manage your income</h1>
                <p className="text-gray-600">Here's what happening with your money, Let's Manage your expense</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Total Budget</h2>
                    <p className="text-indigo-600 text-2xl">${totalBudget}</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Total Spend</h2>
                    <p className="text-indigo-600 text-2xl">${totalSpend}</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">No. of Budgets</h2>
                    <p className="text-indigo-600 text-2xl">{budgets.length}</p>
                </div>
            </div>

            {/* Activity Chart */}
            <div className="bg-white p-6 rounded shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Activity</h2>
                <BarChart width={1100} height={300} data={budgets}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalSpend" fill="#8884d8" />
                    <Bar dataKey="amount" fill="#82ca9d" />
                </BarChart>
            </div>

            {/* Latest Budgets */}
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Latest Budgets</h2>
                <div className="space-y-4">
                    {budgets.map((budget, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">{budget.name}</h3>
                                <p className="text-gray-600">{budget.totalSpend ? `${budget.totalSpend} spent` : "No spend yet"}</p>
                            </div>
                            <p className="text-indigo-600 font-bold">${budget.amount}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dialog for creating a new budget */}
            <div className="flex justify-center mt-10">
                <Dialog>
                    <DialogTrigger>
                        <button className="bg-slate-200 hover:bg-slate-300 text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all">
                            +
                        </button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create a new budget</DialogTitle>
                            <DialogDescription>
                                Fill in the details below to add a new budget category.
                            </DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4" onSubmit={handleAddBudget}>
                            <input
                                type="text"
                                name="budgetName"
                                placeholder="Budget Name"
                                className="w-full p-2 border rounded"
                                required
                            />
                            <input
                                type="number"
                                name="budgetAmount"
                                placeholder="Limit ($)"
                                className="w-full p-2 border rounded"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Create
                            </button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
