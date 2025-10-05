import React, { useState } from "react";

export default function Expense() {
    const [expenses, setExpenses] = useState([
        { name: "Shirts Adidas", amount: 150, date: "2024-04-20" },
    ]);

    const handleAddExpense = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const name = (form.elements.namedItem("expenseName") as HTMLInputElement).value;
        const amount = parseFloat((form.elements.namedItem("expenseAmount") as HTMLInputElement).value);
        const date = (form.elements.namedItem("expenseDate") as HTMLInputElement).value;

        if (name && amount && date) {
            setExpenses((prevExpenses) => [...prevExpenses, { name, amount, date }]);
            form.reset();
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen sm:overflow-x-hidden">
            <h2 className="text-3xl font-bold mb-6">My Expenses</h2>

            {/* Expense Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-bold">Shopping</h3>
                    <p className="text-gray-600">1 item</p>
                    <p className="text-indigo-600 text-2xl">$2300</p>
                    <div className="mt-4 bg-gray-200 rounded-full h-4">
                        <div className="bg-indigo-600 h-4 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                </div>

                {/* Add Expense Form */}
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-bold mb-4">Add Expense</h3>
                    <form className="space-y-4" onSubmit={handleAddExpense}>
                        <input
                            type="text"
                            name="expenseName"
                            placeholder="Expense Name (e.g. Bedroom Decor)"
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="number"
                            name="expenseAmount"
                            placeholder="Expense Amount (e.g. 1000)"
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="date"
                            name="expenseDate"
                            className="w-full p-2 border rounded"
                            required
                        />
                        <div className="flex justify-end space-x-4">
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                            >
                                Add New Expense
                            </button>
                            <button
                                type="button"
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                onClick={() => setExpenses([])}
                            >
                                Delete All
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Latest Expenses Table */}
            <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold mb-4">Latest Expenses</h3>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 text-left">Name</th>
                            <th className="border border-gray-300 p-2 text-left">Amount</th>
                            <th className="border border-gray-300 p-2 text-left">Date</th>
                            <th className="border border-gray-300 p-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-2">{expense.name}</td>
                                <td className="border border-gray-300 p-2">${expense.amount}</td>
                                <td className="border border-gray-300 p-2">{expense.date}</td>
                                <td className="border border-gray-300 p-2">
                                    <button className="text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


