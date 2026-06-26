import { NavLink } from "react-router";


export default function AppSidebar() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'block px-4 py-2 rounded-lg bg-surface text-text font-semibold'
      : 'block px-4 py-2 rounded-lg text-text-secondary hover:bg-surface';

    return (
        <nav>
            <NavLink to="/" className={linkClass}>
                Nuovo preventivo
            </NavLink>
            <NavLink to="archivio" className={linkClass}>
                Archivio
            </NavLink>
            <NavLink to="/fatture" className={linkClass}>
                Fatture
            </NavLink>
        </nav>

    )
}