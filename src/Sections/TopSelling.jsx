import Heading from "../Components/Heading"
import TravelComp from "../Components/TravelComp"

const TopSelling = () => {
  return (
    <div className="relative contain section_padding space-y-8 md:space-y-14 lg:space-y-16">
        <img src="Decore3.png" className="hidden lg:block absolute right-0 top-1/3 " alt="" />
      <div>
            <Heading tag={"Top Selling"} title={"Top Destinations"}/>
      </div>
      <div className="flex flex-col gap-7 lg:flex-row z-50">
            <TravelComp day={"10 Days Trip"} des={"Santorini, Greek"} price={"$5,42k"} bg={"bg-[url('img1.png')] bg1"} />
            <TravelComp day={"12 Days Trip"} des={"Desert, Africa"} price={"$4.2k"} bg={"bg-[url('img2.png')] bg2"}/>
            <TravelComp day={"10 Days Trip"} des={"Full Dubai"} price={"$15k"} bg={"bg-[url('img3.png')] bg3"}/>
      </div>
    </div>
  )
}

export default TopSelling
