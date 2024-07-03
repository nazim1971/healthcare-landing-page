import { MdOutlineArrowOutward } from "react-icons/md";


const Nav = () => {
    return (
        <div className="my-8">
            <div className="flex justify-between">
                <div>
                <img className="w-[124px] h-[33px] " src="logo dark.png" alt="" />
                </div>
                <div className="flex gap-6 text-[#020043]">
                    <p>Home</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>About us</p>
                </div>
                <button className=" flex gap-1 items-center px-[24px] py-[10px] border-[#343268ce] border rounded-2xl font-medium"> Appoinment <MdOutlineArrowOutward /> </button>
            </div>
        </div>
    );
};

export default Nav;