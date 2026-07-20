import bannerContactanos from "../../assets/contact/banner-contact.webp"

export default function Contact() {
    return (
        <div className="flex flex-col w-full justify-center">
            <div className="">
                <img
                    className="object-cover h-[60svh] w-screen"
                    src={bannerContactanos}
                    alt="Contactanos" />
            </div>
        </div>
    )
}