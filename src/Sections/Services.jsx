import Heading from "../Components/Heading"
import ServiceComp from "../Components/ServiceComp"

const Services = () => {
  return (
    <div className="w-full relative h-auto contain space-y-8 xxl:space-y-12">
      <img src="Group_4.png" alt="" className="hidden lg:block absolute -z-50 right-10 top-20"/>
      <div>
        <Heading tag={"CATEGORY"} title={"We Offer Best Services"}/>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ServiceComp img={"Group 2.png"} tag={"Calculated Weather"} pera={"Built Wicket longer admire do barton vanity itself do in it."}/>
            <ServiceComp img={"Group 3.png"} tag={"Best Flights"} pera={"Engrossed listening. Park gate sell they west hard for the."}/>
            <ServiceComp img={"Group 4.png"} tag={"Local Events"} pera={"Barton vanity itself do in it. Preferd to men it engrossed listening. "}/>
            <ServiceComp img={"Group_5.png"} tag={"Customization"} pera={"We deliver outsourced aviation services for military customers"}/>
      </div>
    </div>
  )
}

export default Services
