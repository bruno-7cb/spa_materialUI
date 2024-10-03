import { Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
