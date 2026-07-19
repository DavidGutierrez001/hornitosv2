import React, { useState } from "react";
import {
    RiTruckFill,
    RiStore2Fill,
    RiArrowDownSFill,
    RiMapPin2Fill,
} from "@remixicon/react";
import Modal from "@/components/Modal";

function SelectButtons({
    label,
    icon,
    active = false,
    onClick,
    className = "",
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "flex items-center px-5 h-10 text-xs gap-2 cursor-pointer transition-colors",
                active ? "selected-order" : "bg-black/5 hover:bg-black/10",
                className,
            ].join(" ")}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}

function SubNavbar() {
    const [orderType, setOrderType] = useState("delivery");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        if (!isModalOpen) {
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <nav className="flex h-17 w-full justify-center bg-(--yellow-light) text-[0.8rem] font-semibold px-3 shadow-xl/10 z-50">
                <div className="flex w-full max-w-7xl">
                    <ul className="flex items-center gap-0 md:gap-3">
                        <li className="flex items-center gap-1 md:gap-3">
                            <div className="flex items-center overflow-hidden rounded-full bg-black/5">
                                <SelectButtons
                                    icon={<RiTruckFill size={18} aria-hidden="true" />}
                                    label="Domicilio"
                                    active={orderType === "delivery"}
                                    onClick={() => setOrderType("delivery")}
                                    className="rounded-l-full"
                                />

                                <SelectButtons
                                    icon={<RiStore2Fill size={18} aria-hidden="true" />}
                                    label="Recoger/Consumir"
                                    active={orderType === "pickup"}
                                    onClick={() => setOrderType("pickup")}
                                    className="rounded-r-full"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={showModal}
                                className="flex items-center md:gap-2 px-3 h-10 rounded-full hover:bg-black/5 cursor-pointer"
                            >
                                <span className="hidden md:inline">Selecciona tu ubicación</span>
                                <span className="block md:hidden">
                                    <RiMapPin2Fill />
                                </span>
                                <RiArrowDownSFill size={18} aria-hidden="true" />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <Modal
                isOpen={isModalOpen}
                onClose={setIsModalOpen}
                title="Selecciona tu ubicación"
            />
        </>
    );
}

export default SubNavbar;