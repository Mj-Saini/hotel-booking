
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);
    const [showSearchPopup, setShowSearchPopup] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    
    const hotels = [
        "Umaid Bhawan Palace",
        "Taj Lake Palace",
        "The Oberoi Rajvilas",
        "Rambagh Palace",
        "Leela Palace",
        "ITC Rajputana",
        "Trident Hotel",
        "Hotel Indana Palace",
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔍 Filter suggestions dynamically
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchText(value);

        if (value.trim() === "") {
            setSuggestions([]);
        } else {
            const filtered = hotels.filter((hotel) =>
                hotel.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setShowSearchPopup(false);
        if (!searchText.trim()) return;
        navigate(`/rooms?search=${encodeURIComponent(searchText)}`);
        setSuggestions([]);
    };

    const handleSuggestionClick = (text) => {
        setSearchText(text);
        navigate(`/rooms?search=${encodeURIComponent(text)}`);
        setShowSearchPopup(false);
        setSuggestions([]);
    };

    return (
        <>
            {/* 🔹 Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled
                    ? "bg-black/60 backdrop-blur-lg shadow-md"
                    : "bg-black/60 backdrop-blur-lg shadow-md"
                    } text-white py-3 md:py-4`}
            >
                {/* Logo */}
                <Link to="/">
                    <img src={assets.logo} alt="logo" className="h-9" />
                </Link>

                {/* Nav Tabs */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {["Home", "Hotels", "Experience", "About"].map((name, i) => {
                        const path =
                            name === "Home"
                                ? "/"
                                : name === "Hotels"
                                    ? "/rooms"
                                    : name === "About"
                                        ? "/about"
                                        : name === "Experience"
                                            ? "/experience"
                                            : "/";
                        return (
                            <Link
                                key={i}
                                to={path}
                                className="group flex flex-col gap-0.5 text-white"
                            >
                                {name}
                                <div className="bg-white h-0.5 w-0 group-hover:w-full transition-all duration-300" />
                            </Link>
                        );
                    })}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    {/* Search Icon */}
                    <button
                        onClick={() => setShowSearchPopup((prev) => !prev)}
                        className="text-xl hover:scale-110 transition-transform cursor-pointer"
                        title="Search hotels"
                    >
                        <FaSearch size={18} />
                    </button>

                    {user ? (
                        <UserButton />
                    ) : (
                        <button
                            onClick={openSignIn}
                            className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-gray-900 transition"
                        >
                            Login
                        </button>
                    )}
                </div>
            </nav>

            {/* 🔍 Floating Search Bar with Suggestions */}
            {showSearchPopup && (
                <div
                    className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-white shadow-2xl rounded-2xl p-4 z-40 animate-fadeIn border border-gray-200"
                    style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                >
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleSearchChange}
                            placeholder="Search by city, area, or hotel..."
                            autoFocus
                            className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-5 py-1.5 rounded-full hover:bg-indigo-700 transition"
                        >
                            Search
                        </button>
                    </form>

                    {/* Suggestions dropdown */}
                    {suggestions.length > 0 && (
                        <ul className="mt-2 bg-white border border-gray-200 rounded-xl shadow-md max-h-60 overflow-y-auto">
                            {suggestions.map((s, i) => (
                                <li
                                    key={i}
                                    onClick={() => handleSuggestionClick(s)}
                                    className="px-4 py-2 hover:bg-indigo-50 cursor-pointer text-gray-700"
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    );
};

export default Navbar;
