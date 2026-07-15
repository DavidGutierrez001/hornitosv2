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
        { src: combos, alt: "Banner 1" },
        { src: madre, alt: "Banner 2" },
        { src: panadero, alt: "Banner 3" },
        { src: tarta, alt: "Banner 4" },
        { src: tiramisu, alt: "Banner 5" },
        { src: crujiente, alt: "Banner 6" }
    ]

    return (
        <div className="w-full relative">
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
                <CarouselContent>
                    {banners.map((banner, index) => (
                        <CarouselItem key={index} className="bg-(--orange) h-50 lg:h-[calc(100svh-68px-180px)] flex items-center justify-center lg:px-10">
                            <img
                                className="h-40 md:h-fit object-cover object-right w-full cursor-pointer lg:rounded-[5rem]"
                                src={banner.src}
                                alt={banner.alt}
                                fetchPriority="high"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Banner
