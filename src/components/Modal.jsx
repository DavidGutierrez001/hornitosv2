import { RiCloseLargeLine } from "@remixicon/react";
import { useState, useEffect } from "react";

export default function Modal({ isOpen, onClose, title }) {

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setModalVisible(true);
        } else {
            setModalVisible(false);
        }
    }, [isOpen]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setModalVisible(false);
            onClose(false);
        }
    };

    return (
        <div
            className={`fixed inset-0 bg-black/50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out
                ${modalVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
            onClick={handleOverlayClick}
        >
            <div
                className={`bg-white rounded-sm shadow max-w-xl w-full h-100 text-black flex flex-col gap-2 m-3 transition-all duration-300 ease-in-out
                    ${modalVisible ? "opacity-100 zoom-100" : "opacity-0 zoom-90"}`}
            >
                <div className="border-b h-15 px-3 border-black/10 flex justify-between items-center p-2">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <button
                        className="bg-accent p-2 rounded-full cursor-pointer"
                        type="button"
                        onClick={() => {
                            setModalVisible(false);
                            onClose(false);
                        }}
                    >
                        <RiCloseLargeLine />
                    </button>
                </div>

                <div className="p-3">
                    (Ejemplo de componente modal + uso de props)
                </div>
            </div>
        </div>
    );
}