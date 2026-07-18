import combos1x from "../assets/banners/combos@1x.webp";
import combos2x from "../assets/banners/combos@2x.webp";
import madre1x from "../assets/banners/madre@1x.webp";
import madre2x from "../assets/banners/madre@2x.webp";
import tiramisu1x from "../assets/banners/tiramisu@1x.webp";
import tiramisu2x from "../assets/banners/tiramisu@2x.webp";

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
        { src: madre1x, srcSet: `${madre1x} 1x, ${madre2x} 2x`, alt: "Banner 1" },
        { src: combos1x, srcSet: `${combos1x} 1x, ${combos2x} 2x`, alt: "Banner 2" },
        { src: tiramisu1x, srcSet: `${tiramisu1x} 1x, ${tiramisu2x} 2x`, alt: "Banner 4" },
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
                        <CarouselItem key={index} className="h-auto lg:h-[calc(100svh-68px-250px)] flex items-center justify-center lg:px-15">
                            <img
                                className="md:h-fit object-cover w-full max-w-11/12 cursor-pointer lg:rounded-[5rem] shadow"
                                src={banner.src}
                                srcSet={`${banner.srcSet || undefined}`}
                                sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 90vw, 80vw"
                                alt={banner.alt}
                                fetchPriority="high"
                                decoding="async"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 md:top-0 h-10 w-10 md:h-15 md:w-15 bg-(--white) cursor-pointer shadow-xl hover:bg-white border-0" />
                <CarouselNext className="absolute right-5 md:top-0 h-10 w-10 md:h-15 md:w-15 bg-(--white) cursor-pointer shadow-xl hover:bg-white border-0" />
            </Carousel>
        </div>
    )
}

export default Banner
