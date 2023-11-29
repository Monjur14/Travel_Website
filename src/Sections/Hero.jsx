import { MdPlayCircleFilled } from "react-icons/md";
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className="contain relative overflow-hidden section_padding w-full h-auto flex flex-col lg:flex-row gap-10 lg:gap-0">
      <div className="space-y-4 xsm:space-y-6 xxl:space-y-10 basis-1/2">
        <motion.p 
        initial={{opacity: 0}} animate={{opacity: 1, transition: { delay: 0.8, duration: 0.8}}}
        className="text-orange font-bold text-lg xsm:text-xl md:text-2xl xxl:text-[2.1rem]">Best Destinations around the world</motion.p>
        <motion.h1 
        initial={{y: 20, scale: 1.2, opacity: 0}} animate={{y: 0, scale: 1, opacity: 1}} transition={{duration: 1}}
        className="font-volkhov text-[2.9rem] xsm:text-[3.5rem] md:text-[5.3rem] lg:text-[5rem] leading-tight font-extrabold xxl:text-[6.5rem]">Travel, <span className="relative z-30">enjoy <img src="Decore1.png" alt="" className="w-96 h-2 absolute bottom-2 left-0 -z-30"/></span> and live a new and full life</motion.h1>
        <motion.p 
          initial={{opacity: 0}} animate={{opacity: 1, transition: { delay: 1, duration: 0.8}}}
        className="text-base text-gray font-poppins font-medium xsm:text-lg md:text-xl xxl:text-2xl">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</motion.p>
        <div className="flex gap-5 xxl:gap-8">
            <div><motion.button 
              initial={{opacity: 0}} animate={{opacity: 1, transition: { delay: 1.2, duration: 0.8}}}
            className="px-4 py-3 xsm:px-6 xsm:py-4 xxl:px-8 xxl:py-5 bg-yellow rounded-lg text-white box_shadow font-poppins text-lg xxl:text-xl">Find out more</motion.button></div>
            <motion.div
              initial={{opacity: 0}} animate={{opacity: 1, transition: { delay: 1.5, duration: 0.8}}}
            className="flex items-center font-poppins gap-1 xsm:text-xl cursor-pointer">
                <span className="text-[2.8rem] lg:text-[3.2rem] xxl:text-[4rem]"><MdPlayCircleFilled color="#DF6951"/></span>
                <div className="xxl:text-xl">Play Demo</div>
            </motion.div>
        </div>
      </div>
      <div className="basis-1/2 mx-auto">
        <img src="Decore.png" alt="" className="absolute lg:top-0 lg:right-0 -z-40 xxl:w-[55rem]"/>
        <motion.img
        initial={{x: "400px", opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1}}
        src="Traveller 1.png" alt="" className="mt-8 md:mt-12 lg:mt-0" />
      </div>
    </div>
  )
}

export default Hero
