import { useState } from "react"
import {motion, AnimatePresence, delay} from "framer-motion"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    return setOpen(!open)
  }
  const variant1 = {
    initial: {
      y: 20,
      opacity: 0
    },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.3,
        duration: 0.5
      }
    })
  }
  const liData = ["Desitnations", "Hotels", "Flights", "Bookings", "Login"]
  return (
    <nav className="contain relative w-full flex justify-between items-center py-5 xxl:py-8 z-50">
        <div>
            <img src="Logo.png" alt="" />
        </div>
        <div className="hidden lg:flex  items-center gap-12 font-opensans text-lg xxl:text-2xl">
            <ul className="flex gap-12 font-semibold">
                <li className="cursor-pointer">Desitnations</li>
                <li className="cursor-pointer">Hotels</li>
                <li className="cursor-pointer">Flights</li>
                <li className="cursor-pointer">Bookings</li>
                <li className="cursor-pointer">Login</li>
            </ul>
            <button className="font-medium border px-5 py-1 rounded-md">Sign Up</button>
        </div>
        <div className="humberger block lg:hidden" onClick={toggle}>
          <div className={open ? "menu_btn open" :  "menu_btn" }></div>
        </div>
        <AnimatePresence>
          { open && 
            <motion.div className="mobile_menu absolute overflow-hidden w-full h-screen bg-white left-0 top-20 flex items-center justify-center"
              initial={{x: "100vw"}}
              animate={{x: 0}}
              transition={{
                type: "tween",
                duration: 0.5,
              }}
              exit={{x: "100vw"}}
            >             
              <motion.ul className="flex flex-col text-2xl md:text-4xl font-bold text-center gap-10  mb-16"
              transition={{
                staggerChildren: 1
              }}
              >
                {liData.map((item, index) => {
                  return (
                    <motion.li key={index}
                    variants={variant1}
                    initial="initial"
                    animate="animate"
                    custom={index}
                    className="cursor-pointer"
                    >{item}</motion.li>
                  )
                })}
              </motion.ul>

            </motion.div>
          }
        </AnimatePresence>
    </nav>
  )
}

export default Navbar
