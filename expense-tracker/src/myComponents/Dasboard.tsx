import { ArrowUpCircle, Home, User, DollarSign, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dasboard() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-white text- flex flex-col">
                <div className="p-4 text-2xl font-bold border-b border-gray-700">
                    Expense Traker
                </div>
                <nav className="flex-1 p-4 space-y-4">
                    <Link to="/#" className="block p-2 rounded hover:bg-indigo-600 hover:text-white text-black">
                        <Home size={20} />
                        Dashboard
                    </Link>
                    <Link to="/budgets" className="block p-2 rounded hover:bg-indigo-600 hover:text-white">
                        <DollarSign size={20} />
                        budgets
                    </Link>
                    <Link to="/expense" className="block p-2 rounded hover:bg-indigo-600 hover:text-white">
                        <CreditCard size={20} />
                        expense
                    </Link>
                    <Link to="/upgrade" className="block p-2 rounded hover:bg-indigo-600 hover:text-white">
                        <ArrowUpCircle size={20} />
                        upgrade
                    </Link>
                    <Link to="/profile" className="block p-2 rounded hover:bg-indigo-600 hover:text-white">
                        <User size={20} />
                        profile
                    </Link>
                </nav>
            </aside>


        </div>
    );
}
