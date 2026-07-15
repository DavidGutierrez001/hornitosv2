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
        {
            src: "src/assets/combos.webp",
            alt: "Banner 1"
        },
        {
            src: "src/assets/madre.webp",
            alt: "Banner 2"
        },
        {
            src: "src/assets/panadero.webp",
            alt: "Banner 3"
        },
        {
            src: "src/assets/tarta.webp",
            alt: "Banner 4"
        },
        {
            src: "src/assets/tiramisu.webp",
            alt: "Banner 5"
        },
        {
            src: "src/assets/crujiente.webp",
            alt: "Banner 6"
        }
    ]

    return (
        <div className="w-full relative">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
            >
                <CarouselContent>
                    {banners.map((banner, index) => (
                        <CarouselItem key={index}>
                            <img
                                className="object-cover  object-top w-full cursor-pointer"
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
