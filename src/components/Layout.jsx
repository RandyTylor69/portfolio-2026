import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-screen h-full flex justify-center items-center flex-col
    font-display">
      <Header />
      <Outlet />
    </div>
  );
}
