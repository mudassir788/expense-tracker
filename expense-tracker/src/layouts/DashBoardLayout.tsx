import Dasboard from "../myComponents/Dasboard";
import { Outlet } from "react-router-dom";

export default function DashBoardLayout() {
    return (
        <div className="flex h-screen">
            <Dasboard />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}
