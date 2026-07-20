import combosDesktop from "../../assets/banners/combos@1x.webp";
import combosMobile from "../../assets/banners/combos@2x.webp";
import madreDesktop from "../../assets/banners/madre@1x.webp";
import madreMobile from "../../assets/banners/madre@2x.webp";
import tiramisuDesktop from "../../assets/banners/tiramisu@1x.webp";
import tiramisuMobile from "../../assets/banners/tiramisu@2x.webp";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

function Banner() {
    const banners = [
        { desktop: combosDesktop, mobile: combosMobile, alt: "Banner 2" },
        { desktop: madreDesktop, mobile: madreMobile, alt: "Banner 1" },
        { desktop: tiramisuDesktop, mobile: tiramisuMobile, alt: "Banner 3" },
    ];

    return (
        <div className="relative w-full bg-banner">
            <Carousel
                opts={{ loop: true }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent>
                    {banners.map((banner, index) => (
                        <CarouselItem
                            key={index}
                            className="h-auto w-full md:py-10 object-cover flex items-center justify-center"
                        >
                            <picture className="w-full flex justify-center">
                                <source media="(min-width: 640px)" srcSet={banner.desktop} />
                                <img
                                    src={banner.mobile}
                                    alt={banner.alt}
                                    className="md:h-fit w-full cursor-pointer shadow"
                                    fetchPriority="high"
                                    decoding="async"
                                />
                            </picture>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="absolute cursor-pointer left-2 h-9 w-9 md:left-6 md:h-15 md:w-15 border-0 bg-white shadow-lg hover:bg-white" />
                <CarouselNext className="absolute cursor-pointer right-2 h-9 w-9 md:right-6 md:h-15 md:w-15 border-0 bg-white shadow-lg hover:bg-white" />
            </Carousel>
        </div>
    );
}

export default Banner;