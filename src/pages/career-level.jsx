import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PackagesDetails from '@/components/components-templates/packagesDetails';
import Section1 from '@/components/components-templates/section1';
import Questions from '@/components/components-templates/questions';
import TestimonialCarousel from '@/components/components-templates/testimonialCarousel';
import Faqs from '@/components/components-templates/faqs';
import NavCategory from '@/components/components-templates/navCategory';

const CareerLevel = () => {

    return (
      <>
      <NavCategory/>
        <div className="px-5 py-28 bg-gray-50">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col w-full md:w-1/2">
              <h1 className="text-5xl text-black font-bold">Entry Resume Writing Services</h1>
              <p className="py-9 text-xl font-bold text-green-600">2+ years experience seeking up to $70k</p>
              <p className="pb-5 text-xl leading-8">The Mid-Career Resume Service will convince your future employer you are a perfect fit for the job. Our professional resume writer will leverage the value of your specialized, hands-on experience to set your resume apart in a competitive job market.</p>
              <span>
              <a href="#" className="text-lg font-semibold hover:underline">  <ExpandCircleDownIcon className="text-green-600 mr-5" style={{ width: '40px', height: '40px' }}  /> Show Packages</a>
              </span>
                
            
            </div>
            <div className="bg-green-500 w-full md:w-1/2">
              gfgfg
            </div>
          </div>
        </div>

<PackagesDetails/>
       
      <Section1/>

       <Questions/>

<TestimonialCarousel/>

<Faqs/>
      
      </>
    );
  };
  
  export default CareerLevel;
  