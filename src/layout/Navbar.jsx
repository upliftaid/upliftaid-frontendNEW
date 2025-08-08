import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.items)
    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0)
  const navlinklist = [
    { name: "Home", url: "/" },
    {
      name: "About Us",
      url: "/about-us",
      hasSubmenu: true,
      submenu: [
        { name: "Our Story", url: "/about-us/our-story" },
        { name: "What we do", url: "/about-us/what-we-do" },
        { name: "Be a Volunteer", url: "/about-us/be-a-volunteer" },
        { name: "FAQ", url: "/about-us/faq" },
        { name: "Testimonals", url: "/about-us/testimonals" },
      ],
    },
    { name: "Causes", url: "/causes" },
    { name: "Events", url: "/events" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
    { name: "Products", url: "/product" },
    { name: "Career", url: "/career" },
    { name: "Profile", url: "/profile" },
    { name: "Login", url: "/auth" }, // ✅ NEW ROUTE
  ];

  return (
    <header className="bg-[#00733C] text-white w-full h-[70px] min-[1245px]:flex items-center justify-between px-12 fixed top-0 z-50 hidden">
      {/* Logo */}
      <Link
        to="/"
        className="w-16 h-16"
      >
        <img
          src={logo}
          alt="logo"
          className="object-contain w-full h-full"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6 text-[14px] font-[Poppins] items-center">
        {navlinklist.map((item, index) => (
          <div
            key={index + item.name}
            className="relative group flex items-center"
          >
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                `hover:text-[#FFB204] transition duration-200 px-2 py-2 ${
                  isActive ? "text-[#FFB204] font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>

            {/* Submenu */}
            {item.hasSubmenu && (
              <div className="absolute top-full left-0 mt-2 bg-[#00733C] shadow-lg rounded-md w-44 z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.url}
                    className="block px-4 py-2 hover:text-[#FFB204] transition duration-200"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Cart */}
        <NavLink to="/cart" className="relative group">
          {totalItemsInCart > 0 && (
              <div className="h-4 w-4 bg-white rounded-full text-black text-[10px] flex items-center justify-center absolute -top-2 -right-2">
                  <p className="text-[10px] font-black">{totalItemsInCart}</p>
              </div>
          )}
         
          <div className="bg-[#FFB204] hover:bg-[#E69F00] p-2 rounded flex items-center justify-center transition">
            <FaCartShopping
              size={22}
              className="text-black group-hover:text-white"
            />
          </div>
        </NavLink>

        {/* Donate Button */}
        <NavLink
          to="/donate"
          className="bg-[#FFB204] hover:bg-[#E69F00] text-black hover:text-white px-4 py-2 rounded font-semibold transition duration-300"
        >
          Donate
        </NavLink>

        {/* Login Button */}
      </nav>
    </header>
  );
};

export default Navbar;
