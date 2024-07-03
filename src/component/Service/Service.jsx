import { MdOutlineArrowOutward } from "react-icons/md";


const Service = () => {
    return (
        <div className="mb-40 mt-52 ">
            <div className="grid grid-cols-2 justify-items-center  ">
                {/* box-1 */}
                <div className="flex flex-col justify-center items-start mb-12 w-[85%]">
                <button className="py-[10px] px-6  border-[#4d4c7bb3] border rounded-[30px]">
            Service
            </button>
                   <div className="my-6 space-y-3">
                   <h3 className="text-4xl font-semibold">
                    Empowering Health, <br /> Enriching Lives
                    </h3>
                    <p>
                    We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                   </div>
                    <button className=" flex gap-1 items-center p-3 px-5  rounded-2xl font-semibold bg-[#FFC637] ">Appointment  <MdOutlineArrowOutward /> </button>
                </div>

                {/* box-2 */}
                <div className='w-[524px] h-[394px] relative bg-cover mb-12 rounded-[30px]' style={{backgroundImage: 'url("Rectangle 27-2.png")'}}>
                  <div className="absolute bottom-8 left-8 w-[321px] h-[144px] rounded-3xl bg-[#0200438a] text-[#ffffffd5] p-5 flex justify-between gap-6 ">
                            <div className="space-y-2">
                            <h3 className="text-[20px] font-semibold ">
                            Advanced Technology
                            </h3>
                            <p className="text-xs">
                            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                            </p>
                            </div>
                            <div className="flex items-end">
                            <MdOutlineArrowOutward className="text-white text-5xl p-2 rounded-full bg-[#FFC637] "/>
                            </div>
                  </div>

                </div>

                {/* box-3 */}
                <div className='w-[524px] h-[394px] relative bg-cover rounded-[30px]' style={{backgroundImage: 'url("Rectangle 27-1.png")'}}>
                  <div className="absolute bottom-8 left-8 w-[321px] h-[144px] rounded-3xl bg-[#0200438a] text-[#ffffffd5] p-5 flex justify-between gap-6 ">
                            <div className="space-y-2">
                            <h3 className="text-[20px] font-semibold ">
                            Online Doctor Meet
                            </h3>
                            <p className="text-xs">
                            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                            </p>
                            </div>
                            <div className="flex items-end">
                            <MdOutlineArrowOutward className="text-white text-5xl p-2 rounded-full bg-[#FFC637] "/>
                            </div>
                  </div>

                </div>

                {/* box-4 */}
                <div className='w-[524px] h-[394px] relative bg-cover rounded-[30px]' style={{backgroundImage: 'url("Rectangle 27.png")'}}>
                  <div className="absolute bottom-8 left-8 w-[321px] h-[144px] rounded-3xl bg-[#0200438a] text-[#ffffffd5] p-5 flex justify-between gap-3 ">
                            <div className="space-y-2">
                            <h3 className="text-[20px] font-semibold ">
                            Consultancy your health
                            </h3>
                            <p className="text-xs">
                            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                            </p>
                            </div>
                            <div className="flex items-end">
                            <MdOutlineArrowOutward className="text-white text-5xl p-2 rounded-full bg-[#FFC637] "/>
                            </div>
                  </div>

                </div>
            </div>
        </div>
    );
};

export default Service;