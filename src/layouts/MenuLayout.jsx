import { NavLink, Outlet } from "react-router-dom";
import "../pages/Menu/App.css";

export default function MenuLayout({ menuItems }) {
    return (
        <div className="flex min-h-[calc(100svh-168px)] w-full justify-center">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 max-w-7xl w-full">
                <aside className="md:sticky md:top-42 self-start flex flex-col md:col-span-1 lg:col-span-1 p-5 gap-5 md:border-r">
                    <h2 className="text-5xl font-bold uppercase font-cinzel text-(--brown-dark) text-center border-b py-7">
                        MENÚ
                    </h2>

                    <div className="flex flex-col">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `btn-category transition-all duration-300 border-b font-medium ${isActive
                                        ? "selected-category"
                                        : "text-(--brown-dark) hover:bg-(--brown) hover:text-white"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </aside>

                <section className="md:col-span-2 lg:col-span-3 flex p-5">
                    <Outlet />
                </section>
            </div>
        </div>
    );
}