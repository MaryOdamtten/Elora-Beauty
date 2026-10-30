import Image from "../../assets/Glow.png"

const Hero = () => {
    return (
        <section className=" relative h-120 bg-cover bg-center md:bg-cover md:bg-center bg-no-repeat flex items-center w-full px-6 md:px-8" style={{ backgroundImage: `url(${Image})` }}>

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 max-w-xl text-white text-left w-full md:translate-y-0 translate-y-8">
                <h1 className="text-2xl font-bold md:text-5xl">Elora Skin & Beauty</h1>
                <p className="mt-3 text-xl md:text-3xl">Your Glow, your Rules.</p>
                <p className="mt-3 text-base text-gray-200 md:text-lg ">From skincare essentials to makeup favourites, discover your everyday glow.</p>
                <button className="bg-pink-300 px-4 py-3 mt-8 font-semibold rounded-md">Shop Now!</button>
            </div>



        </section>

    )
}

export default Hero
