
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function Upgrade() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen sm:overflow-x-hidden">
            <h2 className="text-4xl font-bold text-center mb-6">Upgrade to Premium</h2>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-bold mb-4">Why Upgrade?</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Track unlimited budgets</li>
                        <li>Access advanced analytics</li>
                        <li>Priority customer support</li>
                        <li>Exclusive premium features</li>
                    </ul>
                </div>

                {/* Testimonials */}
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-bold mb-4">What Our Users Say</h3>
                    <blockquote className="text-gray-600 italic">"Upgrading to premium was the best decision! The analytics are amazing."</blockquote>
                    <p className="text-right text-gray-500 mt-2">mudasir ahmad </p>
                </div>
            </div>

            {/* Plan Comparison Table */}
            <div className="bg-white p-6 rounded shadow mb-6">
                <h3 className="text-xl font-bold mb-4">Compare Plans</h3>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 text-left">Feature</th>
                            <th className="border border-gray-300 p-2 text-left">Free</th>
                            <th className="border border-gray-300 p-2 text-left">Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-2">Budgets</td>
                            <td className="border border-gray-300 p-2">Limited</td>
                            <td className="border border-gray-300 p-2">Unlimited</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Analytics</td>
                            <td className="border border-gray-300 p-2">Basic</td>
                            <td className="border border-gray-300 p-2">Advanced</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Support</td>
                            <td className="border border-gray-300 p-2">Standard</td>
                            <td className="border border-gray-300 p-2">Priority</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Upgrade Form */}
            <div className="bg-indigo-500 rounded-xl shadow-lg p-8 flex flex-col items-center text-white">
                <span className="text-2xl font-bold mb-2">Unlock Premium Features!</span>
                <span className="text-lg mb-4">Track unlimited budgets, get advanced analytics, and more.</span>
                <Dialog>
                    <DialogTrigger>
                        <button className="bg-white text-indigo-600 font-bold rounded px-6 py-2 shadow-lg transition-all hover:bg-orange-100">Upgrade Now</button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Upgrade to Premium</DialogTitle>
                            <DialogDescription>
                                Choose your plan and payment method below.
                            </DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4">
                            <select className="w-full p-2 border rounded">
                                <option>Monthly - $5</option>
                                <option>Yearly - $50</option>
                            </select>
                            <input type="text" placeholder="Card Number" className="w-full p-2 border rounded" />
                            <input type="text" placeholder="Cardholder Name" className="w-full p-2 border rounded" />
                            <input type="text" placeholder="Expiry Date (MM/YY)" className="w-full p-2 border rounded" />
                            <input type="text" placeholder="CVV" className="w-full p-2 border rounded" />
                            <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Upgrade</button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}


