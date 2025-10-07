import { useState } from "react";
import { ArrowUpCircle, Home, User, DollarSign, CreditCard, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dasboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLinkClick = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="relative flex h-screen">
            {/* Hamburger Menu */}
            <button
                className={`absolute top-0 left-4 bg-gray-200 p-2 rounded-md z-50 transition-transform md:hidden ${isSidebarOpen ? "translate-x-64" : "translate-x-0"}`}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <Menu size={24} />
            </button>

            {/* Sidebar */}
            <aside
                className={`bg-white text-black flex flex-col w-64 p-4 fixed top-0 left-0 h-full transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-40`}
            >
                <div className="p-4 text-2xl font-bold border-b border-gray-500">
                    Expense Tracker
                </div>
                <nav className="flex-1 p-4 space-y-4">
                    <Link to="/dashboard" className="block p-2 rounded hover:text-white hover:bg-indigo-800" onClick={handleLinkClick}>
                        <Home size={20} />
                        Dashboard
                    </Link>
                    <Link to="/budgets" className="block p-2 rounded hover:text-white hover:bg-indigo-800" onClick={handleLinkClick}>
                        <DollarSign size={20} />
                        Budgets
                    </Link>
                    <Link to="/expense" className="block p-2 rounded hover:text-white hover:bg-indigo-800" onClick={handleLinkClick}>
                        <CreditCard size={20} />
                        Expense
                    </Link>
                    <Link to="/upgrade" className="block p-2 rounded hover:text-white hover:bg-indigo-00" onClick={handleLinkClick}>
                        <ArrowUpCircle size={20} />
                        Upgrade
                    </Link>
                    <Link to="/profile" className="block p-2 rounded hover:text-white hover:bg-indigo-800" onClick={handleLinkClick}>
                        <User size={20} />
                        Profile
                    </Link>
                </nav>
            </aside>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <div className="flex-1 md:ml-64">
                {/* Content goes here */}
            </div>
        </div>
    );
}
