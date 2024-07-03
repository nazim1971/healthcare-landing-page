import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import LastH from "../LastH/LastH";
import Nav from "../Nav/Nav";
import Service from "../Service/Service";
import Solution from "../Solution/Solution";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div >
            <div className="max-w-[1160px] mx-auto">
            <Nav/>
            </div>
            <Hero/>
          <div className="max-w-[1160px] mx-auto">
         
          
          <Solution/>
          <Service/>
          <Testimonial/>
          <Faq/>
          
         
          </div>
          <LastH/>
          <Footer/>
        </div>
    );
};

export default Home;