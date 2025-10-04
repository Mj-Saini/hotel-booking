/* eslint-disable no-unused-vars */



import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);

    // ✅ search text synced with URL
    const searchParams = new URLSearchParams(location.search);
    const initialSearch = searchParams.get("search") || "";
    const [searchText, setSearchText] = useState(initialSearch);

    useEffect(() => {
        // update scroll state
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ update searchText when URL changes
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setSearchText(params.get("search") || "");
    }, [location.search]);

    const handleSearch = (e) => {
        e.preventDefault();

        if (location.pathname === "/rooms") {
            const params = new URLSearchParams(location.search);

            if (!searchText.trim()) {
                // Empty search -> remove param to show all hotels
                params.delete("search");
            } else {
                params.set("search", searchText);
            }

            navigate(`${location.pathname}?${params.toString()}`, { replace: true });
        } else {
            // from other pages
            if (!searchText.trim()) {
                navigate(`/rooms`);
            } else {
                navigate(`/rooms?search=${encodeURIComponent(searchText)}`);
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 bg-black/30 shadow-md text-white backdrop-blur-lg py-3 md:py-4`}
        >
            {/* Logo */}
            <Link to="/">
                <img
                    src={assets.logo}
                    alt="logo"
                    className={`h-9`}
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {["Home", "Hotels", "Experience", "About"].map((name, i) => {
                    const path =
                        name === "Home"
                            ? "/"
                            : name === "Hotels"
                                ? "/rooms"
                                : name === "About"
                                    ? "/about"
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

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                {/* Search input */}
                <form onSubmit={handleSearch} className="relative w-72">
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search by city, area, or hotel..."
                        className="w-full px-4 py-2 rounded-full bg-white border border-gray-300 shadow-sm text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />

                   

                    {/* Search button */}
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white  px-3 py-1.5 rounded-full text-sm transition"
                    >
                        🔍
                    </button>
                </form>

                {user ? (
                    <UserButton />
                ) : (
                    <button
                        onClick={openSignIn}
                        className="px-8 py-2.5 rounded-full ml-4 bg-black text-white hover:bg-gray-900 transition"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
