import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center
    font-display">
      <Header />
      <Outlet />
    </div>
  );
}
