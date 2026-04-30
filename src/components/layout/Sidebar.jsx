import { NavLink } from "react-router-dom";

const navItems = [
  {
    label: "Dashboard",
    to: "/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Production Planner",
    to: "/production",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z" /><path d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    label: "Transactions",
    to: "/transactions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col flex-shrink-0">
      {/* Brand */}
      <div className="mb-10">
        <h2 className="text-yellow-400 font-bold text-xl tracking-wide leading-tight">
          ⚔️ Albion
        </h2>
        <p className="text-gray-400 text-xs mt-1 tracking-wider uppercase">
          Economy Planner
        </p>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ label, to, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-yellow-400 text-gray-900"
                  : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
              }`
            }
          >
            {icon}
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="pt-6 border-t border-gray-700">
        <p className="text-gray-500 text-xs text-center">
          Albion Online • Economy Tools
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
