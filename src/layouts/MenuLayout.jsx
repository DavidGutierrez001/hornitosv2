import { NavLink, Outlet, useLocation, Link } from "react-router-dom";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import "../pages/Menu/App.css";

export default function MenuLayout({ menuItems }) {
    const location = useLocation();

    return (
        <div className="flex min-h-[calc(100svh-168px)] w-full justify-center items-start">
            <section className="flex flex-col w-full max-w-7xl gap-5">
                <div className="breadcrumb h-15 flex mt-5 items-center px-5 md:px-0 uppercase font-medium">
                    <Breadcrumb>
                        <BreadcrumbList className="text-sm">
                            <BreadcrumbItem>
                                <BreadcrumbLink render={<Link to="/" />}>Inicio</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink render={<Link to="/menu" />}>
                                    Menú
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-black font-medium">
                                    {location.pathname.split("/").pop() === "menu" ? "" : location.pathname.split("/").pop().replace(/-/g, " ")}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 w-full">
                    <aside className="hidden md:sticky md:top-42 self-start md:flex flex-col md:col-span-1 lg:col-span-1 pe-5 gap-5 md:border-r">
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

                    <section className="md:col-span-2 lg:col-span-3 flex flex-col px-5">
                        <Outlet />
                    </section>
                </div>
            </section>
        </div>
    );
}