import Navbar from "./myComponents/Navbar"
// import Hero from "./myComponents/Hero"
// import Dasboard from "./myComponents/Dasboard"

import { Routes, Route } from "react-router-dom";
import Budgets from "./pages/Budgets";
import Expense from "./pages/Expense";
import Upgrade from "./pages/Upgrade";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {


  return (
    <>
      {/* <Hero /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          < Route path="Dashboard" element={<Dashboard />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="expense" element={<Expense />} />
          <Route path="Upgrade" element={<Upgrade />} />
          < Route path="Profile" element={<Profile />} />

          {/* Add more pages here */}
        </Route>
      </Routes>

    </>
  );
}

export default App
