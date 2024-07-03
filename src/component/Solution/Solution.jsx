import { MdOutlineArrowOutward } from "react-icons/md";

const Solution = () => {
    return (
        <div className="my-40">
            <div className="grid grid-cols-2">

                {/* help */}
                <div className="space-y-8">
                <button className="py-[10px] px-6  border-[#4d4c7bb3] border rounded-[30px]">
            Who we are
            </button>
                   <div className="space-y-2 w-[85%]">
                   <h2 className="text-[36px] font-semibold">
                    We Help To Get <br /> Soultions
                    </h2>
                    <p className="text-[#4d4c7bc6] ">
                    We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve. 
                    </p>
                   </div>
                    <button className=" flex gap-1 items-center py-[10px] px-[24px]  rounded-[12px] font-medium bg-[#FFC637] "> Learn more <MdOutlineArrowOutward /> </button>
                </div>

                {/* Image */}
                <div className='w-[568px] h-[415px] rounded-[32px] relative' style={{backgroundImage: 'url("Rectangle 24.png")'}}>
                  <div className="absolute -bottom-10 -left-10 text-white w-[395px] h-[210px] rounded-[32px] bg-[#343268]  p-9 flex justify-between flex-col ">
                            <h3 className="text-[26px] font-medium ">
                            Our mission is simple
                            </h3>
                            <p className="text-[#ffffffd5]">
                            To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
                            </p>
                  </div>

                </div>
            </div>
        </div>
    );
};

export default Solution;