import { FaStar } from "react-icons/fa"

const Hero = () => {
  return (
    <div className=" mb-20 bg-contain " style={{backgroundImage: 'linear-gradient(to bottom, #ffffff6E, #ffffff94), url("Frame.png")' }}>
      <div className="w-[1160px] mx-auto " >
      <div
        className="h-[470px]  mb-14 bg-cover rounded-[44px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, #00C19D00, #02004378),url("Rectangle 5.png")`,
        }}
      ></div>

      <div className="grid grid-cols-5 justify-items-center  ">

        {/* 90% */}
        <div className="  w-[216px] h-[312px] border rounded-2xl border-[#02004333] bg-[#FBFBFB] flex flex-col justify-between p-5 ">
            <h4 className="text-[40px] font-semibold"> 90% </h4>
            <p className="text-sm">Patient satisfaction rate, reflecting our commitment.</p>
            <img className="h-[130px] w-[130px]" src="Group 12.png" alt="" />
        </div>

        {/* middle one */}
        <div className="col-span-3 flex flex-col  justify-between ">
           
        <div className="text-center font-semibold">
            <h3 className="text-5xl text-[#020043]">
            Comprehensive Care <br /> for Every Patient
            </h3>
        </div>

      <div className="flex justify-between gap-4">
          {/* 500+ */}
          <div className="h-[190px] flex w-[216px] border-[#02004333]  bg-[#FFFFF5]  border p-3 rounded-2xl">
           <div>
           <h3 className="text-[40px] font-semibold">500+</h3>
           <p>Board-certified doctors</p>
           </div>
           <div className=" flex items-end">
           <img className=" h-[77px] w-[77px]" src="Icons.png" alt="" />
           </div>
        </div>

        {/* 4.8 */}
        <div className="mt-7 w-[216px] h-[162px] border-[#02004333] bg-[#FBFBFB] border rounded-2xl p-3 space-y-3">
            <h2 className="text-[40px] font-semibold flex gap-2 items-center">4.8 <FaStar className="text-yellow-400" /> </h2>
            <p className="text-sm">Over 20,000 Patient</p>
            <img src="Group 7.png" alt="" />
        </div>

        {/* $5000 */}
        <div className=" h-[190px] w-[216px] border-[#02004333] bg-[#FFFFF5]  border p-2 pl-5 rounded-2xl ">
            <h3 className="text-[40px] font-semibold">$5000</h3>
            <p className="text-sm">Money spend <br />
            for poor patient</p>
            <div className="flex justify-end">
            <img  src="Group.png" alt="" />
            </div>
        </div>
      </div> 
        </div>

        {/* 50+ */}
        <div className=" w-[216px] h-[312px] border border-[#02004333] rounded-2xl bg-[#FBFBFB] flex flex-col justify-between p-5 ">
            <h4 className="text-[40px] font-semibold"> 50+ </h4>
            <p className="text-sm">Free lession video 
            for patient</p>
            <img className="h-[130px] w-[130px]" src="Group (1).png" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
