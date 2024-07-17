import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PackagesDetails from '@/components/components-templates/packagesDetails';
import Section1 from '@/components/components-templates/section1';
import Questions from '@/components/components-templates/questions';
import TestimonialCarousel from '@/components/components-templates/testimonialCarousel';
import Faqs from '@/components/components-templates/faqs';
import NavCategory from '@/components/components-templates/navCategory';
import TopRatedResumeService from '@/components/components-templates/topRatedService';
import PricingSection from '@/components/components-templates/pricingCard';

const EntryLevel = () => {

  const packages = [
    {
      title: 'Essential',
      subtitle: '20 Minute Phone Interview +\nCustom Resume\n& Cover Letter',
      price: '$199.95',
      paymentPlan: '$49.99',
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
      price: '$349.95',
      paymentPlan: '$87.49',
      details: [
        'Phone Interview With Writer - 20 Minutes',
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
      price: '$499.95',
      paymentPlan: '$124.99',
      details: [
        'Phone Interview With Writer - 20 Minutes',
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
              <h1 className="text-5xl text-black font-bold">Student / Entry Resume Writing Services</h1>
              <p className="py-9 text-xl font-bold text-green-600">Recent graduates or 0-2 years experience</p>
              <p className="pb-5 text-xl leading-8">The Student and Entry Resume Service will help you land a new role with limited or zero work experience. Our professional resume writers will leverage your academic skills to show your future employer you are ready to add value in the working world.</p>
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
  
  export default EntryLevel;
  