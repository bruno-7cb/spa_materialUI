import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Button variant="contained">Home</Button>} />
      <Route path="/about" element={<h1>About</h1>} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
