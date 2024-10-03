import Link from "next/link"
import { motion } from "framer-motion"

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "Abuot" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
]
const letterAnim = {
  initial: {
    y: "100%",
    opacity: 0
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 2, ease: [0.6, 0, 0.2, 1], deley: i[i] }
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.8, ease: [0.6, 0, 0.2, 1], deley: i[i] }
  }),
}

const getLetter = (name) => {
  const letters = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 1, (name.length - index) * .1]}
        key={index}>
        {letter}
      </motion.span>)
  })
  return letters
}
const NavList = () => {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => {
        return <Link href={link.href} key={index} className="flex overflow-hidden hover:text-white transition-all">
          {getLetter(link.name)}</Link>
      })}
    </ul>
  )
}

export default NavList