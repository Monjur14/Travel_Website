const ServiceComp = ({img, tag, pera}) => {
  return (
    <div className="flex flex-col items-center gap-2 lg:gap-4 xxl:gap-6 w-fit px-7 py-9 xsm:px-10 xsm:py-14 rounded-3xl hover:shadow-xl lg:h-[24rem] cursor-pointer hover:scale-105 transition-all duration-300">
                <img src={img} alt="" className="lg:w-[6rem] xxl:w-[6rem]"/>
                <h3 className="font-bold font-opensans text-xl xsm:text-2xl lg:text-xl xxl:text-2xl">{tag}</h3>
                <p className="font-poppins text-lg max-w-[200px] xsm:text-xl xsm:max-w-[250px] lg:max-w-[350px] lg:text-lg xxl:text-xl text-center text-gray">{pera}</p>
    </div>
  )
}

export default ServiceComp
