import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contain section_padding">
      <div className="w-full h-auto bg-color2 rounded-tl-[3rem] rounded-tr-xl rounded-b-xl py-10 px-3 space-y-7 xsm:space-y-10 xsm:rounded-tl-[5rem] xsm:rounded-tr-2xl xsm:rounded-b-2xl xsm:py-14 xsm:px-4 md:px-6 xxl:rounded-tl-[12rem] xxl:rounded-tr-3xl xxl:rounded-b-3xl xxl:py-24">
            <h1 className="font-bold text-gray text-left text-2xl xsm:text-3xl md:text-[2.4rem] lg:text-center lg:leading-normal xxl:text-[3.5rem]">
                Subscribe to get information, latest news and other interesting offers about Cobham
            </h1>
            <div className="space-y-4 xsm:space-y-5 flex flex-col md:flex-row md:items-center md:justify-between md:gap-4 lg:max-w-screen-md lg:mx-auto">
                <div className="flex bg-white items-center p-2 xxl:p-5 rounded-lg gap-2 xsm:p-3 md:w-full">
                    <MdOutlineMail className="text-xl xsm:text-3xl md:text-4xl"/>
                    <input type="text" className="outline-none xsm:text-xl w-full"/>
                </div>
                <div className="md:my-">
                    <button className="font-opensans px-7 py-3 xsm:px-6 xsm:py-4 xxl:px-8 xxl:py-5 bg-orange rounded-lg text-white box_shadow text-lg xxl:text-xl md:mb-5">Subscribe</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Contact
