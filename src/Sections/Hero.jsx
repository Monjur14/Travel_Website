import { MdPlayCircleFilled } from "react-icons/md";
const Hero = () => {
  return (
    <div className="contain section_padding w-full h-screen">
      <div className="space-y-4 xsm:space-y-6">
        <p className="text-orange font-bold text-lg xsm:text-xl">Best Destinations around the world</p>
        <h1 className="font-volkhov text-[2.9rem] xsm:text-[3.3rem] leading-tight font-extrabold">Travel, <span className="relative z-30">enjoy <img src="Decore.png" alt="" className="w-96 h-2 absolute bottom-2 left-0 -z-30"/></span> and live a new and full life</h1>
        <p className="text-base text-gray font-poppins font-medium xsm:text-lg">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
        <div className="flex gap-5">
            <div><button className="px-4 py-3 xsm:px-6 xsm:py-4  bg-yellow rounded-lg text-white box_shadow font-poppins text-lg">Find out more</button></div>
            <div className="flex items-center font-poppins gap-1 xsm:text-xl">
                <div><MdPlayCircleFilled color="#DF6951" size={45} className="shadow-2xl"/></div>
                <div>Play Demo</div>
            </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Hero
