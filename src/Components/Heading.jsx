import { motion} from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const Heading = ({tag, title}) => {
  const isMoblie = useMediaQuery({
    query: '(min-width: 550px)'
  })
  return (
    <motion.div  className="text-center overflow-hidden py-2 space-y-1 xsm:space-y-2 lg:space-y-4 xxl:space-y-6">
        <motion.h3
        initial={{opacity: 0, scale: 1.3}} whileInView={{opacity: 1, scale: 1, transition: {duration: 1.5}}}  viewport={{once: true, margin: "-20%"}}
        className="font-poppins text-gray text-lg xsm:text-[1.3rem] md:text-2xl xxl:text-4xl"
        >{tag}</motion.h3>
        <motion.h1
        initial={{ y: isMoblie ? 280 : 170, rotateZ: 55, opacity: 0}}
        whileInView={{y: 0, rotateZ: 0, opacity: 1}}
        transition={{duration: 1.5}} viewport={{once: true, margin: "-20%"}}
        className="font-volkhov text-black font-bold text-2xl xsm:text-[1.8rem] md:text-4xl lg:text-[2.7rem] xxl:text-[3.2rem] z-50"
        >{title}</motion.h1>
    </motion.div>
  )
}

export default Heading
