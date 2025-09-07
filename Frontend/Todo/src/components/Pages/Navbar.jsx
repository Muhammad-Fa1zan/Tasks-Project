import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="bg-zinc-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <Link to="/" className="text-2xl font-bold">
        TodoApp
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>

        {isLoggedIn ? (
          <>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-zinc-500 px-4   py-2 flex items-center gap-2 cursor-pointer hover:bg-zinc-600 rounded-3xl  transition"
            >
              <span className="text-[17px]">Logout</span> <span className="text-[18px]"><TbLogout2 /></span>
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-white cursor-pointer focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-zinc-800 flex flex-col items-center gap-4 py-4 md:hidden">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" onClick={closeMenu}>
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-zinc-500 px-2 py-2 flex items-center gap-2 cursor-pointer hover:bg-zinc-600 rounded-3xl  transition"
              >
                <span className="md:text-[17px]">Logout</span> <span className="md:text-[18px]"><TbLogout2 /></span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>
              <Link
                to="/register"
                onClick={closeMenu}
                className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
