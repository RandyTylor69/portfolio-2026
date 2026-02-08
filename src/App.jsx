import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Work from "./pages/Work";
import Connect from "./pages/Connect";
import Buster from "./pages/products/Buster"
import Umoja from "./pages/products/Umoja";
import {useEffect, useState} from "react"

export default function App() {

 
  console.log(
    `

███████╗██╗██╗   ██╗██╗███╗   ██╗    ███╗   ███╗ █████╗  ██████╗ 
╚══███╔╝██║╚██╗ ██╔╝██║████╗  ██║    ████╗ ████║██╔══██╗██╔═══██╗
  ███╔╝ ██║ ╚████╔╝ ██║██╔██╗ ██║    ██╔████╔██║███████║██║   ██║
 ███╔╝  ██║  ╚██╔╝  ██║██║╚██╗██║    ██║╚██╔╝██║██╔══██║██║   ██║
███████╗██║   ██║   ██║██║ ╚████║    ██║ ╚═╝ ██║██║  ██║╚██████╔╝
╚══════╝╚═╝   ╚═╝   ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ 

`,
    `\n`,
    `1. It's pronounced "zeen" :)`,
    "\n",
    `2. If you're the owner of the arm on the right of the photo that has a boat in it, 侬好！`
  );

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Work />} />
          <Route path="connect" element={<Connect />} />
        </Route>
        <Route path="/umoja-foundation-group" element={<Umoja />} />
        <Route path="/busters-sea-cove" element={<Buster />} />
      </Routes>
    </BrowserRouter>
  );
}
