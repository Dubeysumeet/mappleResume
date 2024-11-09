import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Button } from '@/components/ui/button';

import { NavLink, useNavigate } from "react-router-dom";


const Faqs = () => {
    const navigate = useNavigate();
    const handleFreeResumeReview = () => {
      navigate("/free-resume-review");
    };
  

  return (
    <div className="px-5 py-20 secondary-bg"> 
    <h2 className="text-center text-5xl font-bold text-black mb-16">More FAQs</h2>
    <div className="w-3/4 mx-auto">
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="mb-2">
            <AccordionTrigger className="text-2xl text-black border p-6">
              How do I schedule the interview with a Resume Writer?</AccordionTrigger>
              <AccordionContent className="tag-card text-white text-base font-normal p-6">
              <p>
              We will schedule the 1-on-1 interview with your Resume Writer after you have signed up for a resume service. Our Resume Advisor will work with you to select an interview time that works best for your schedule.
              </p>
              <p className="mt-3">
              After you have registered for a resume service, you will receive an email invite to book your interview time with your writer. If you require any assistance with this, please call our support team or reach them through our live chat.
              </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="mb-2">
            <AccordionTrigger className="text-2xl text-black border p-6">
              Do you offer rush or expedited services?</AccordionTrigger>
              <AccordionContent className="tag-card text-white text-base font-normal p-6">
              <p>
              We do! We offer 24 and 48 hour rush services to help you hit your deadline. Let our Resume Advisor know your deadline when speaking to our team or select the Rush Service add-on when purchasing online.
              </p>
              
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="mb-2">
            <AccordionTrigger className="text-2xl  text-black border p-6">
              Do you offer a guarantee on your service?</AccordionTrigger>
            <AccordionContent className="tag-card text-lg text-white  p-6 flex flex-wrap">
              <p className='py-3'>Our Triple Promise Guarantee is featured on all resume writing service which includes:</p>
              <div className="flex justify-between flex-wrap">

                <div className="flex flex-col w-1/2 p-4">
                  <p> <span className='mr-3'> <CheckRoundedIcon className="text-green-700 border-2 rounded-full border-green-800"/></span>90-Day Interview Guarantee</p>
                </div>

                <div className="flex flex-col w-1/2 p-4">
                  <p> <span className='mr-3'> <CheckRoundedIcon className="text-green-700 border-2 rounded-full border-green-800"/></span>3 Business Day Turnaround</p>
                </div>

                <div className="flex flex-col w-1/2 p-4">
                  <p> <span className='mr-3'> <CheckRoundedIcon className="text-green-700 border-2 rounded-full border-green-800"/></span>100% Satifsaction Guarantee</p>
                </div>

            
              </div>
              <Button className="mt-5 w-auto text-lg px-6 bg-green-700 hover:bg-green-800 text-white rounded-md" onClick={handleFreeResumeReview}>
          See Our Triple Promise Guarantee
        </Button>
            </AccordionContent>
        </AccordionItem>


    </Accordion>

    </div>
 
    </div>
  )
}

export default Faqs