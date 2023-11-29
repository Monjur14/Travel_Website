import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="contain section_padding font-poppins grid grid-cols-1 gap-6 xsm:gap-y-8 text-center md:grid-cols-3 md:gap-10 lg:grid-cols-5">
      <div className="space-y-1 xsm:space-y-3 lg:space-y-4">
        <h1 className="font-bold text-4xl xsm:text-[3rem]">Jadoo.</h1>
        <p className="text-gray xsm:text-lg">Book your trip in minute, get full Control for much longer.</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2 lg:mb-3 xsm:text-2xl">Company</h3>
        <ul className="text-lg xsm:text-xl">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2 lg:mb-3 xsm:text-2xl">Contact</h3>
            <ul className="text-lg xsm:text-xl">
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affilates</li>
            </ul>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2 lg:mb-3 xsm:text-2xl">More</h3>
            <ul className="text-lg xsm:text-xl">
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
            </ul>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-5">
            <span className="inline-block p-3  rounded-full shadow-xl text-2xl"><FaFacebookF /></span>
            <span className="inline-block p-3  rounded-full shadow-xl text-2xl"><FaInstagram /></span>
            <span className="inline-block p-3  rounded-full shadow-xl text-2xl"><FaLinkedinIn /></span>
        </div>
        <div><h4 className="text-xl font-semibold">Discover our app</h4></div>
        <div className="flex gap-3">
            <img src="Google Play.png" alt="" />
            <img src="Apple Store.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
