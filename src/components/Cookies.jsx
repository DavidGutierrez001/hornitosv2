import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import { useEffect, useState } from "react";

function Cookies() {
    const [aceptCookies, setAceptCookies] = useState(() => {
        return localStorage.getItem("aceptCookies") === "true";
    });

    useEffect(() => {
        localStorage.setItem("aceptCookies", aceptCookies);
    },
        [aceptCookies]
    );

    return (
        <div className={aceptCookies ? "hidden" : "block"}>
            <div className="overlay bg-black fixed w-screen h-screen inset-0 z-50 opacity-60"></div>

            <div className="fixed bottom-0 w-screen flex bg-white min-h-40 px-5 justify-center border-t shadow-lg z-50">
                <Alert className="max-w-7xl h-full flex flex-col py-5 border-none px-0 m-0">
                    <AlertTitle className="text-xl text-center mb-1 md:text-start">
                        Consentimiento de Cookies
                    </AlertTitle>

                    <div className="flex flex-col md:flex-row gap-5 text-center md:text-start">
                        <AlertDescription className="text-sm font-light text-black flex-2">
                            En Hornitos utilizamos cookies propias y de terceros con fines analíticos y a fin de garantizar la funcionalidad de la web, mejorar tu experiencia y mostrar publicidad relacionada con tus preferencias. Puedes "Aceptar" o seleccionar aquellas que quieras en "Configurar cookies". Para conocer más, consulta nuestra Política.
                        </AlertDescription>

                        <div className="flex-1 flex gap-5 underline justify-center items-center">
                            <button className="text-xs cursor-not-allowed">
                                Configurar cookies
                            </button>

                            <button
                                onClick={() => setAceptCookies(true)}
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