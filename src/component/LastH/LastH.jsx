import { MdOutlineArrowOutward } from "react-icons/md";

const LastH = () => {
  return (
    <div className="bg-contain " style={{backgroundImage: 'linear-gradient(to bottom, #ffffff30, #ffffff94), url("Frame.png")'}}>
      <div
    className="p-10 w-[1160px] h-[477px] mx-auto rounded-[32px] bg-cover my-40  text-white "
    style={{
      backgroundImage: `linear-gradient(to right, #020043, #0200434d),url("lastH.png")`,
    }}
  >
    <div>  
    <div className="flex justify-end mt-6 mb-4">
      <img src="logo light.png" alt="" />
    </div>
   <div className="space-y-3 ">
   <div >
      <h3 className="text-[40px] font-semibold">Get Your <br /> First Appointment <br /> at 50% Off!</h3>
    </div>
    <div className="flex gap-4 ">

    <button className="bg-[#FFC637] text-black flex gap-1 items-center pl-6 py-3 pr-4 font-medium  rounded-xl"> Appointment <MdOutlineArrowOutward  className="font-semibold"/> </button>

    <button className=" flex gap-1 items-center pl-6 py-3 pr-4  font-medium border-white border rounded-xl"> Learn More <MdOutlineArrowOutward className="font-semibold" /> </button>
    </div>
   </div>
    </div>
  </div>
    </div>
  );
};

export default LastH;
