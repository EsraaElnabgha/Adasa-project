import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [ searchQuery, setSearchQuery ] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // Optional: clear after search
    }
  };

  const activeLink = "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white";
  const normalLink = "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white";

  const mobileActiveLink = "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-orange-500/10 text-orange-500 border border-orange-500/30";
  const mobileNormalLink = "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white";

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <NavLink
              className="flex items-center gap-3 group"
              to="/"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                <img
                  alt="Photography Logo"
                  className="w-full h-full object-cover"
                  src={logo}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  عدسة
                </span>
                <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </NavLink>
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
                <NavLink
                  className={({ isActive }) => isActive ? activeLink : normalLink}
                  to="/"
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive ? activeLink : normalLink}
                  to="/blog"
                >
                  المدونة
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive ? activeLink : normalLink}
                  to="/about"
                >
                  من نحن
                </NavLink>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <form onSubmit={handleSearch} className="relative group">
                <input
                  type="text"
                  placeholder="بحث..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-0 group-hover:w-40 focus:w-40 px-0 group-hover:px-4 focus:px-4 py-2 rounded-xl bg-[#161616] border border-transparent focus:border-[#262626] text-white transition-all duration-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] absolute left-0 top-0 h-full"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
              <NavLink
                className="bg-[#EF610F] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-white
                hover:bg-orange-600"
                to="/blog"
              >
                ابدأ القراءة
              </NavLink>
            </div>
            <button className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
          <div className="md:hidden overflow-hidden transition-all duration-300 max-h-0">
            <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
              <div className="flex flex-col space-y-1">
                <NavLink
                  className={({ isActive }) => isActive ? mobileActiveLink : mobileNormalLink}
                  to="/"
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive ? mobileActiveLink : mobileNormalLink}
                  to="/blog"
                >
                  المدونة
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive ? mobileActiveLink : mobileNormalLink}
                  to="/about"
                >
                  من نحن
                </NavLink>
                <NavLink
                  className="btn-primary text-sm text-center mt-2"
                  to="/blog"
                >
                  ابدأ القراءة
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
