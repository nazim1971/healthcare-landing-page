import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[442px]  flex items-center   bg-[#020043]">

       <div className="max-w-[1160px] w-full mx-auto ">
       <div className="mb-6 ml-7" >
        <img className="w-[128px] h-[33px] " src="logo light.png" alt="" />
        </div>

      <div className=" grid grid-cols-4 justify-items-center  text-[#FFFFF5] font-semibold ">
        {/* Box-1 */}
        <div className="flex flex-col justify-between font-normal ">
       
          <p>
            123 Main Street Anytown, USA <br /> Postal Code: 12345
          </p>
          <p>
            Support: support@oyolloo.com <br /> (Available : 10:00am to 07:00pm)
          </p>
        </div>

        {/* Box-2 */}
        <div className="space-y-3 text-sm">
          <p>Home</p>
          <p>About us</p>
          <p>Success Page</p>
          <p>Terms and condition</p>
        </div>

        {/* Box-3 */}
        <div className="space-y-3 text-sm">
            <p>Services
            </p>
            <p>Scheduling</p>
            <p>Contact Us</p>
            <p>Patient Portal</p>
        </div>

        {/* Box-4 */}
        <div className="space-y-6 text-sm">
          <div className="space-y-2">
          <p>Follow Us</p>
            <p className="flex gap-6 text-2xl">
                <FaFacebook/>
                <BsInstagram/>
                <FaYoutube/>
                <img src="Vector.png" alt="" />
            </p>
          </div>
            <p className="font-normal">@docplus 2024</p>
        </div>
      </div>
       </div>
    </div>
  );
};

export default Footer;
