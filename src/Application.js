import { Routes, Route } from "react-router-dom";

import { Page } from "./Page";

import Header from "./Header";
import Home from "./Home";
import Dashboard from "./Dashboard";
import SearchTalent from "./SearchTalent";
import Manage from "./Manage";

function Application() {
  return (
    <main className="h-screen">
      <Header />
      <section className="col-span-9 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edView/:id" element={<Page />} />
          <Route path="/search" element={<SearchTalent />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </section>
    </main>
  );
}

export default Application;
