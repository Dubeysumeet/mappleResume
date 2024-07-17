import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Button } from '@/components/ui/button';

import { NavLink, useNavigate } from "react-router-dom";


const Questions = () => {
    const navigate = useNavigate();
    const handleFreeResumeReview = () => {
      navigate("/free-resume-review");
    };
  

  return (
    <div className="px-5 py-20"> 
    <h2 className="text-center text-5xl font-bold text-black mb-16">Questions?</h2>
    <div className="w-3/4 mx-auto">
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="mb-2">
            <AccordionTrigger className="text-2xl text-black border p-6">
              How does the resume writing process work?</AccordionTrigger>
              <AccordionContent className="bg-blue-950 text-lg text-white  p-6">
              <p>
              Through an easy, step-by-step process managed by our resume writing and support team. Learn more here:
              </p>
            <Button className="mt-5 w-56 text-lg px-6 bg-green-600 hover:bg-green-700 text-white rounded-md" onClick={handleFreeResumeReview}>
          Free Resume Review
        </Button>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="mb-2">
            <AccordionTrigger className="text-2xl text-black border p-6">
              What is the difference between the Essential and Preferred package?</AccordionTrigger>
            <AccordionContent className="bg-blue-950 text-lg text-white  p-6 flex flex-wrap">
              <p className='py-3'>If you just need a professional resume, then we recommend starting with the Essential package.</p>
              <p className='py-3'>If you want to jump-start your job search and see more immediate success, we recommend the Preferred package which includes resume writing plus:</p>
              <div className="flex justify-between flex-wrap">

                <div className="flex flex-col w-1/2 p-4">
                  <p> <span className='mr-3'> <CheckRoundedIcon className="text-green-600 border-2 rounded-full border-green-600"/></span>LinkedIn Development</p>
                </div>

                <div className="flex flex-col w-1/2 p-4">
                  <p> <span className='mr-3'> <CheckRoundedIcon className="text-green-600 border-2 rounded-full border-green-600"/></span>LinkedIn Development</p>
                </div>

                <div className="flex flex-col w-1/2 p-4">
                  <p> <span className='mr-3'> <CheckRoundedIcon className="text-green-600 border-2 rounded-full border-green-600"/></span>LinkedIn Development</p>
                </div>

                <div className="flex flex-col w-1/2 p-4">
                  <p> <span className='mr-3'> <CheckRoundedIcon className="text-green-600 border-2 rounded-full border-green-600"/></span>LinkedIn Development</p>
                </div>
              
              </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="mb-2">
            <AccordionTrigger className="text-2xl text-black border p-6">
              
Do you write resumes for my industry?</AccordionTrigger>
            <AccordionContent className="bg-blue-950 text-lg text-white  p-6">
              <p>
              We have over 15 years of experience writing for all industries at all career levels! See the full list of industries we write for here:
              </p>
            <Button className="mt-5 w-56 text-lg px-6 bg-green-600 hover:bg-green-700 text-white rounded-md" onClick={handleFreeResumeReview}>
          Free Resume Review
        </Button>
            </AccordionContent>
        </AccordionItem>

    </Accordion>

    </div>
 
    </div>
  )
}

export default Questions