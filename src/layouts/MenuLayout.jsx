import { Link, Outlet } from "react-router-dom";
import "../pages/Menu/App.css";
import { useLocation } from "react-router-dom";

import { useState } from "react";

export default function MenuLayout() {

    const location = useLocation();

    const [selectedCategory, setSelectedCategory] = useState(null);

    const menuItems = [
        { name: "Lanzamientos", path: "lanzamientos" },
        { name: "Promociones", path: "promociones" },
        { name: "Tardes santafereñas", path: "tardes-santafereñas" },
        { name: "Para seguir el día", path: "para-seguir-el-dia" },
        { name: "Acompañamientos", path: "acompañamientos" },
        { name: "Antojos", path: "antojos" },
        { name: "Tortas y ponqués", path: "tortas-y-ponqués" },
        { name: "Panes para la mesa", path: "panes-para-la-mesa" },
        { name: "Panes para ensamble", path: "panes-para-ensamble" },
        { name: "Repostería", path: "repostería" },
        { name: "La alacena", path: "la-alacena" },
    ];

    return (
        <div className="flex min-h-[calc(100svh-168px)] w-full justify-center">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 max-w-7xl w-full ">
                <aside className="md:sticky md:top-42 self-start flex flex-col md:col-span-1 lg:col-span-1 p-5 gap-5 md:border-r">
                    <h2 className="text-5xl font-bold uppercase font-cinzel text-(--brown-dark) text-center border-b py-7">MENÚ</h2>

                    <div className="flex flex-col">
                        {menuItems.map((item) => (
                            <Link className={`btn-category transition-all text-white duration-300 border-b font-medium
                                ${location.pathname === `/menu/${item.path}` ? "selected-category" : "text-(--brown-dark) hover:bg-(--brown) hover:text-white"}`}
                                to={item.path}
                                key={item.path}
                                onClick={() => setSelectedCategory(item.name)}>
                                {item.name}
                            </Link>
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