import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Dashboard />} />
        <Route path="/tasks" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/timelog" element={<Dashboard />} />
        <Route path="/resource" element={<Dashboard />} />
        <Route path="/users" element={<Dashboard />} />
        <Route path="/template" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
