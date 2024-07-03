

const Faq = () => {
    return (
        <div className='my-20'>
             <button className="py-[10px] px-6 border-[#4d4c7bba] border  rounded-[32px] font-semibold">Faq</button>
             <h2 className="text-4xl my-10 font-semibold  ">
             Frequntly Asked Question
             </h2>
<div className="space-y-3  ">
    
<div className="collapse bg-[#fffff5]  collapse-arrow ">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium"> What are your office hours?</div>
  <div className="collapse-content">
    <p className="text-sm">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How can I schedule an appointment?</div>
  <div className="collapse-content">
    <p className="text-sm">To schedule an appointment, please follow these steps: <br />

1. Visit our website and navigate to the "Appointments" section. <br />
2. Select your desired service and preferred date and time. <br />
3. Fill in your contact information and any additional details. <br />
4. Confirm your appointment by clicking "Schedule." <br />

You will receive a confirmation email with your appointment details.</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
  <div className="collapse-content">
    <p className="text-sm">Yes, we accept most major insurance plans. Please contact our office or check our website for a list of accepted providers. If you have specific questions about your coverage, feel free to reach out to our billing department for assistance.</p>
  </div>
</div>


<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What should I bring to my appointment?</div>
  <div className="collapse-content">
    <p className="text-sm" >For your appointment, please remember to bring the following items: <br />

Identification: Such as a driver's license or ID card. <br />
Insurance Card: If you plan to use insurance coverage. <br />
Referral Forms: If required by your insurance provider. <br />
List of Medications: Including dosage and frequency. <br />
Medical Records: Relevant to your current condition or treatment. <br />
Payment: Co-payments or fees not covered by insurance. <br />
Having these items ready will help ensure a smooth and efficient appointment.</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you offer telemedicine appointments?</div>
  <div className="collapse-content">
    <p className="text-sm" >Yes, we offer telemedicine appointments. Please contact our office to schedule a telemedicine appointment and for instructions on how to connect for your virtual visit.</p>
  </div>
</div>
</div>
        </div>
    );
};

export default Faq;