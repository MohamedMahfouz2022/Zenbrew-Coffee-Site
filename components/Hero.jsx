"use client"
import Separator from "./Separator"
import Badge from "./Badge"

const Hero = () => {
  return (
    <section className="h-[100vh] xl:h-screen relative text-white">
      {/* ovarlay */}
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[.90]">

      </div>
      {/* video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        {/* <source src="/assets/hero/video.mp4" type="video/mp4" /> */}
        Your browser dose not support the video tag.
      </video>
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        {/* text */}
        <div data-scroll data-scroll-speed="0.4" className="flex-1 flex flex-col text-center justify-center items-center xl:pd-10 gap-5 h-full">
          {/* badge & h1 */}
          <div className="flex flex-col items-center">
            <Badge containerStyles=" xl:flex xl:w-[180px] xl:h-[180px] " />
            <h1 className="h1 text-white">
              <span className="text-accent">Coffee</span> & Joy
            </h1>
          </div>
          {/* saparator */}
          <Separator />
          <p className="lead front-light max-w-[300px] md:max-w-[430px] xl:max-w-[468px]">
            Experience the joy of exceptional coffee in our cozy space, where every cup is crafted with passion and warmth
          </p>
          <button className="btn">Our menu</button>
        </div>
      </div>
    </section>
  )
}

export default Hero