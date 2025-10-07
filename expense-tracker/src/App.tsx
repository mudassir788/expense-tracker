import Navbar from "./myComponents/Navbar"
// import Hero from "./myComponents/Hero"
// import Dasboard from "./myComponents/Dasboard"

import { Routes, Route, Navigate } from "react-router-dom";
import Budgets from "./pages/Budgets";
import Expense from "./pages/Expense";
import Upgrade from "./pages/Upgrade";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashBoardLayout";

function App() {


  return (
    <>
      {/* <Hero /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="expense" element={<Expense />} />
          <Route path="upgrade" element={<Upgrade />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>

    </>
  );
}

export default App
