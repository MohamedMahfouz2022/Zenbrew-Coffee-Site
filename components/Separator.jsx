import React from "react"
import Image from "next/image"

const Separator = ({ bg = "accent" }) => {
  const imgSrc = bg === "accent"
    ? "/assets/separator-accent.svg"
    : "/assets/separator-white.svg"
  return (
    <div className="relative w-[200px] h-[25px] mx-auto">
      <Image src={imgSrc} alt="" fill />
    </div>
  )
}

export default Separator