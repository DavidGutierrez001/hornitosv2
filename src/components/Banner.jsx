import combos from "../assets/combos.webp";
import madre from "../assets/madre.webp";
import panadero from "../assets/panadero.webp";
import tarta from "../assets/tarta.webp";
import tiramisu from "../assets/tiramisu.webp";
import crujiente from "../assets/crujiente.webp";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay"

function Banner() {

    const banners = [
        { src: madre, alt: "Banner 1" },
        { src: combos, alt: "Banner 2" },
        { src: panadero, alt: "Banner 3" },
        { src: tarta, alt: "Banner 4" },
        { src: tiramisu, alt: "Banner 5" },
        { src: crujiente, alt: "Banner 6" }
    ]

    return (
        <div className="w-full relative bg-banner">
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
            >
                <CarouselContent className="relative w-[calc(100vw+3rem)]">
                    {banners.map((banner, index) => (
                        <CarouselItem key={index} className="h-60 lg:h-[calc(100svh-68px-250px)] flex items-center justify-center lg:px-15">
                            <img
                                className="md:h-fit object-cover w-full max-w-11/12 cursor-pointer lg:rounded-[5rem] shadow"
                                src={banner.src}
                                alt={banner.alt}
                                fetchPriority="high"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-43 md:top-0 h-10 w-10 md:h-15 md:w-15 bg-(--white) cursor-pointer shadow-xl hover:bg-white border-0" />
                <CarouselNext className="absolute right-5 top-43 md:top-0 h-10 w-10 md:h-15 md:w-15 bg-(--white) cursor-pointer shadow-xl hover:bg-white border-0" />
            </Carousel>
        </div>
    )
}

export default Banner
