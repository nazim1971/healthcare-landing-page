import { FaCircle } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";


const Testimonial = () => {
    return (
        <div className="my-20">
           <div >
           <button className="py-[10px] px-6  border-[#4d4c7bb3] border rounded-[32px]">
            Testimonial
            </button>
            <h4 className="text-4xl font-semibold my-8">
            What they say about us
            </h4>
           </div>

           <div className="grid grid-cols-3 gap-5">
            {/* Box-1 */}
            <div className="bg-[#FFFFF5] w-[371px] h-[241px] p-7 flex flex-col justify-between ">
                <h2 className="text-[19px] font-semibold">
                Expertise and Compassion Combined
                </h2>
                <p className="text-xs text-[#4d4c7be9]">
                I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.
                </p>
                <div className="flex gap-3 items-center">
                    <img src="r-3.png" alt="" />
                    <div className="text-xs">
                        <p> <span className="font-semibold">Sarah D,</span> IT Professional</p>
                        <div className="flex gap-1 text-[#FFE03D] ">
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        </div>
                    </div>
                </div>
            </div>

            {/* Box-2 */}
            <div className="bg-[#FFFFF5] w-[371px] h-[241px] p-7 flex flex-col justify-between ">
                <h2 className="text-[19px] font-semibold">
                Life-Saving Care, Life-Changing Experience
                </h2>
                <p className="text-xs text-[#4d4c7be9]">
                My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.
                </p>
                <div className="flex gap-3 items-center">
                    <img src="r-1.png" alt="" />
                    <div className="text-xs">
                        <p> <span className="font-semibold">Michael R,</span> Business Executive</p>
                        <div className="flex gap-1 text-[#FFE03D] ">
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        </div>
                    </div>
                </div>
            </div>

            {/* Box-3 */}
            <div className="bg-[#FFFFF5] w-[371px] h-[241px] p-7 flex flex-col justify-between ">
                <h2 className="text-[19px] font-semibold">
                A Partner in Health and
Wellness
                </h2>
                <p className="text-xs text-[#4d4c7be9]">
                As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and
                </p>
                <div className="flex gap-3 items-center">
                    <img src="r-2.png" alt="" />
                    <div className="text-xs">
                        <p> <span className="font-semibold">David S,</span> Lawyer</p>
                        <div className="flex gap-1 text-[#FFE03D] ">
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        </div>
                    </div>
                </div>
            </div>
            
           </div>
           <div className="flex justify-center mt-8 gap-1">
           <FaCircle className="text-[#0200431f]" />
           <FaCircle className="text-[#FFC637] " />
           <FaCircle className="text-[#0200431f] " />
           </div>
            
        </div>
    );
};

export default Testimonial;