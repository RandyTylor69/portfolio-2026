import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Work from "./pages/Work";
import Connect from "./pages/Connect";
import Umoja from "./pages/products/Umoja";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Work />} />
          <Route path="connect" element={<Connect />} />
        </Route>
        <Route path="/umoja-foundation-group" element={<Umoja />} />
      </Routes>
    </BrowserRouter>
  );
}
