import { useEffect, useState } from "react";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

function Cookies() {
    // Leer localstorage para ver si el usuario ya aceptó las cookies
    const [aceptCookies, setAceptCookies] = useState(() => {
        return localStorage.getItem("aceptCookies") === "true";
    });

    const [visibleCookies, setVisible] = useState(false);

    // Controlamos la aparición del overlay solo si NO ha aceptado
    useEffect(() => {
        if (aceptCookies) return;

        const timer = setTimeout(() => {
            setVisible(true);
        }, 50);

        return () => clearTimeout(timer);
    }, [aceptCookies]);

    // Función para cuando el usuario hace clic en "Aceptar"
    const manejarAceptarCookies = () => {
        setAceptCookies(true);
        localStorage.setItem("aceptCookies", "true");
    };

    return (
        <div className="transition-opacity duration-500 ease-in-out">

            <div className={`fixed inset-0 z-50 h-screen w-screen bg-black/50 transition-opacity duration-500 ease-in-out 
                ${visibleCookies && !aceptCookies ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            <div className={`fixed bottom-0 w-screen flex bg-white min-h-40 px-5 justify-center border-t border-t-black z-60 shadow-lg transition-transform duration-500 ease-in-out
                ${visibleCookies && !aceptCookies ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-full"}
                `}>

                <Alert className="max-w-7xl h-full flex flex-col py-5 border-none px-0 m-0">
                    <AlertTitle className="text-xl text-center mb-1 md:text-start">
                        Consentimiento de Cookies
                    </AlertTitle>

                    <div className="flex flex-col md:flex-row gap-5 text-center md:text-start">
                        <AlertDescription className="text-sm text-black/60 flex-2">
                            En Hornitos utilizamos cookies con fines analíticos y a fin de garantizar la funcionalidad de la web, mejorar tu experiencia. Puedes "Aceptar" o seleccionar aquellas que quieras en "Configurar cookies". Para conocer más, puedes consultar nuestra Política.
                        </AlertDescription>

                        <div className="flex-1 flex gap-5 underline justify-center items-center">
                            <button className="text-xs cursor-not-allowed">
                                Configurar cookies
                            </button>

                            <button
                                onClick={() => manejarAceptarCookies(true)}
                                className="bg-black/90 hover:bg-black text-white w-40 py-3 rounded-full text-sm cursor-pointer"
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </Alert>
            </div>
        </div>
    );
}

export default Cookies;