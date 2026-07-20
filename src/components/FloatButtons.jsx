import { RiWhatsappLine, RiArrowUpLine } from "@remixicon/react";
import { useState, useEffect } from "react";

export default function FloatButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed right-5 bottom-10 z-50 flex flex-col transition-opacity duration-300 gap-3`}>
            <button className={`scroll-up h-15 w-15 cursor-pointer bg-[#8B4513] rounded-full flex items-center justify-center text-white shadow transition-transform duration-300 ease-out
            ${isVisible ? 'translate-x-0' : 'translate-x-[calc(100%+2.5rem)]'}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <RiArrowUpLine size={30} />
            </button>
            <button className="h-15 w-15 cursor-not-allowed bg-[#24cc63] rounded-full flex items-center justify-center text-white shadow">
                <RiWhatsappLine size={40} />
            </button>
        </div>
    )
}
