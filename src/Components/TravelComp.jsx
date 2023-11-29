import { IoPaperPlaneSharp } from "react-icons/io5";
import {motion} from "framer-motion"

const TravelComp = ({bg, des, price, day}) => {
  return (
    <motion.div
    initial={{scale: 0.8, y: 60, opacity: 0}} whileInView={{scale: 1, y: 0, opacity: 1, transition: {duration: 1.5, type: "tween", ease: "easeInOut"}}} viewport={{once: true, margin: "-15%"}}
    className="flex z-50 flex-col h-[30rem] md:h-[20rem] lg:w-full lg:h-[30rem] md:flex-row lg:flex-col rounded-3xl box_shadow cursor-pointer hover:scale-105 transition-all duration-300">
      <div className={`w-full overflow-hidden basis-3/4 md:basis-1/2 lg:basis-3/4 rounded-tl-3xl rounded-tr-3xl ${bg} md:rounded-bl-3xl lg:rounded-bl-none md:rounded-tr-none lg:rounded-tl-3xl lg:rounded-tr-3xl`}></div>
      <div className="font-poppins z-50 p-4 md:basis-1/2 lg:basis-1/4 flex flex-col justify-between">
        <div className="flex justify-between text-lg font-semibold md:text-xl w-full">
          <p>{des}</p>
          <p>{price}</p>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <span>
            <IoPaperPlaneSharp className="md:text-xl" />
          </span>
          <p className="text-gray md:text-lg">{day}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TravelComp;
