
const BookingComp = ({icon, title, pera, color}) => {
  return (
    <div className="flex items-start gap-4 md:gap-8 xsm:gap-5">
      <span className={`text-xl xsm:text-2xl ${color} p-3 xsm:p-4 md:p-5 md:text-[2rem] inline-block rounded-lg text-white`}>{icon}</span>
      <div className="font-poppins">
        <h3 className="font-semibold text-base -mt-1 xsm:text-lg md:text-2xl">{title}</h3>
        <p className="text-gray text-sm xsm:text-base md:text-xl md:max-w-[500px] md:mt-1">
          {pera}
        </p>
      </div>
    </div>
  );
};

export default BookingComp;
