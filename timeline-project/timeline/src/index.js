import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Displayed from "./pages/displayedCard";
import NoPage from "./pages/NoPage";
import "./styles/input.css"
import "./styles/timeline.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/timeline/:id" element={<Displayed/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch