import { NavLink } from 'react-router-dom';



export default function Navbar() {
  
  return (
<nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md p-4 z-50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center sm:justify-end items-center text-sm sm:text-base">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-green-500 text-white rounded-full px-2 py-2"
              : "text-blue-600"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-green-500 text-white rounded-full px-2 py-2"
              : "text-blue-600"
          }
        >
          Chi sono
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-green-500 text-white rounded-full px-2 py-2"
              : "text-blue-600"
          }
        >
          Portfolio
        </NavLink>
<NavLink
  to="/services"
  className={({ isActive }) =>
    isActive
      ? "font-semibold bg-green-500 text-white rounded-full px-2 py-2"
      : "text-blue-600"
  }
>
  Servizi
</NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-green-500 text-white rounded-full px-2 py-2"
              : "text-blue-600"
          }
        >
          Contatti
        </NavLink>
        <NavLink
  to="/support"
  className={({ isActive }) =>
    isActive
      ? "font-semibold bg-green-500 text-white rounded-full px-2 py-2 "
      : "text-blue-600"
  }
>
  Supportami
</NavLink>

      </div>
    </nav>
  );
}
