const Heading = ({tag, title}) => {
  return (
    <div  className="text-center space-y-1 xsm:space-y-2 lg:space-y-4 xxl:space-y-6">
        <h3 className="font-poppins text-gray text-lg xsm:text-[1.3rem] md:text-2xl xxl:text-4xl">{tag}</h3>
        <h1 className="font-volkhov text-black font-bold text-2xl xsm:text-[1.8rem] md:text-4xl lg:text-[2.7rem] xxl:text-[3.2rem]">{title}</h1>
    </div>
  )
}

export default Heading
