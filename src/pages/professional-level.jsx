import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PackagesDetails from '@/components/components-templates/packagesDetails';
import Section1 from '@/components/components-templates/section1';
import Questions from '@/components/components-templates/questions';
import TestimonialCarousel from '@/components/components-templates/testimonialCarousel';
import Faqs from '@/components/components-templates/faqs';
import NavCategory from '@/components/components-templates/navCategory';
import TopRatedResumeService from '@/components/components-templates/topRatedService';
import PricingSection from '@/components/components-templates/pricingCard';

const ProfessionalLevel = () => {

  const packages = [
    {
      title: 'Essential',
      subtitle: '60 Minute Phone Interview +\nCustom Resume\n& Cover Letter',
      price: '$399.95',
      paymentPlan: '$99.99',
      details: [
        'Phone Interview With Writer - 20 Minutes',
        'Custom Resume',
        'Custom Cover Letter',
        '3 Business Day Turnaround',
      ],
      link: '#',
    },
    {
      title: 'Advanced',
      subtitle: 'Essential + \nLinkedIn Optimization\nor Resume Distribution',
      price: '$549.95',
      paymentPlan: '$137.49',
      details: [
        'Phone Interview With Writer - 60 Minutes',
        'Custom Resume',
        'Custom Cover Letter',
        '3 Business Day Turnaround',
        'Choice of: (pick one)',
        'LinkedIn Optimization or Resume Distribution',
      ],
      link: '#',
      mostPopular: true,
    },
    {
      title: 'Ultimate',
      subtitle: 'Essential +\nLinkedIn Optimization\n& Resume Distribution',
      price: '$699.95',
      paymentPlan: '$174.99',
      details: [
        'Phone Interview With Writer - 60 Minutes',
        'Custom Resume',
        'Custom Cover Letter',
        '3 Business Day Turnaround',
        'Includes Both:',
        'LinkedIn Optimization',
        'Resume Distribution',
      ],
      link: '#',
    },
  ];

    return (
      <>
      <NavCategory/>
        <div className="px-5 py-28 bg-gray-50">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col w-full md:w-2/3">
              <h1 className="text-5xl text-black font-bold">Professional Resume
Writing Services</h1>
              <p className="py-9 text-xl font-bold text-green-600">5+ years experience seeking or earning up to $85k</p>
              <p className="pb-5 text-xl leading-8">The Professional Resume Service will help you secure senior level or manager roles earning up to $85k per year. Our professional resume writer will leverage your career accomplishments to show how you will add immense value in your next position.</p>
              <span>
              <a href="#packages" className="text-lg font-semibold hover:underline">  <ExpandCircleDownIcon className="text-green-600 mr-5" style={{ width: '40px', height: '40px' }}  /> Show Packages</a>
              </span>
                
            
            </div>
            <div className=" md:w-1/3">
              <TopRatedResumeService/>
            </div>
          </div>
        </div>
        <PricingSection packages={packages}/>

<PackagesDetails/>
       
      <Section1/>

       <Questions/>

<TestimonialCarousel/>

<Faqs/>
      
      </>
    );
  };
  
  export default ProfessionalLevel;
  