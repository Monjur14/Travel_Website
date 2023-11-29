import { BsBoundingBoxCircles } from "react-icons/bs";
import BookingComp from "../Components/BookingComp";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";

const Booking = () => {
  return (
    <div className="contain section_padding flex flex-col lg:flex-row lg:items-center">
      <div className="basis-1/2 space-y-8 xsm:space-y-10 xxl:space-y-14">
        <div  className="text-left space-y-1 xsm:space-y-2 lg:space-y-4 xxl:space-y-6">
            <h3 className="font-poppins text-gray text-lg xsm:text-[1.3rem] md:text-2xl xxl:text-4xl">Easy and Fast</h3>
            <h1 className="font-volkhov text-black font-bold text-2xl xsm:text-[1.8rem] md:text-4xl lg:text-[2.7rem] xxl:text-[3.2rem] xsm:max-w-[300px] md:max-w-[350px] lg:max-w-[450px] xsm:leading-normal xxl:max-w-[550px] md:leading-[3rem] ">Book your next trip in 3 easy steps</h1>
        </div>
        <div className="space-y-5 xsm:space-y-6 md:space-y-9">
            <BookingComp icon={<BsBoundingBoxCircles />} title={"Choose Destination"} pera={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."} color={"bg-yellow"}/>
            <BookingComp icon={<FaHouseFloodWaterCircleArrowRight />} title={"Make Payment"} pera={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."} color={"bg-orange2"}/>
            <BookingComp icon={<GiCommercialAirplane />} title={"Reach Airport on Selected Date"} pera={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."}
            color={"bg-green"}/>
        </div>
      </div>
      <div className="basis-1/2 mx-auto">
        <img src="ImageGirl.png" alt=""/>
      </div>
    </div>
  )
}

export default Booking
