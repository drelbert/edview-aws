import { NavLink } from 'react-router-dom';

export const Navigation = ({ children }) => {
  return (
    <nav className="col-span-3 flex flex-col border-r-2 border-slate-400 h-full">
      {children}
    </nav>
  );
};

export const NavigationLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'bg-slate-600 hover:bg-slate-500'
          : 'bg-white hover:bg-slate-100'
      }
    >
      <article className="w-full p-4">{children}</article>
    </NavLink>
  );
};
