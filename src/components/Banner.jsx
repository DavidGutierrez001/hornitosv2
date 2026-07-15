import ArrowLeft02Icon from '@iconify-react/hugeicons/arrow-left-02';
import ArrowRight02Icon from '@iconify-react/hugeicons/arrow-right-02';

function Banner() {
    return (
        <div className="flex h-[50svh] md:h-[55svh] w-screen relative">
            <img
                className="object-cover object-top w-full cursor-pointer"
                src="src/assets/madre.png"
                alt="" />

            <button className='absolute top-1/2 left-10 shadow p-4 cursor-not-allowed bg-(--orange) text-white rounded-full'>
                <ArrowLeft02Icon height="1.7em" />
            </button>
            <button className='absolute top-1/2 p-4 bg-(--orange) cursor-not-allowed shadow text-white right-10 rounded-full'>
                <ArrowRight02Icon height="1.7em" />
            </button>
        </div>
    )
}

export default Banner
