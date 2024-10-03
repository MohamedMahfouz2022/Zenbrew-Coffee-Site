"use client"

import { useEffect } from "react"
import About from "@/components/About"
import Explore from "@/components/Explore"
import Hero from "@/components/Hero"
import Menu from "@/components/Menu"
import Testimonils from "@/components/Testimonils"
import Opining from "@/components/OpiningHours"

const Home = () => {
  // add locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      new LocomotiveScroll
    }
    loadLocomotiveScroll()
  }, [])
  return (
    <div className='h-full overflow-x-hidden'>
      <Hero />
      <Explore />
      <About />
      <Menu />
      <Opining />
      <Testimonils />
    </div>
  )
}
export default Home 