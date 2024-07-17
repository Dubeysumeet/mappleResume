import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PackagesDetails from '@/components/components-templates/packagesDetails';
import Section1 from '@/components/components-templates/section1';
import Questions from '@/components/components-templates/questions';
import TestimonialCarousel from '@/components/components-templates/testimonialCarousel';
import Faqs from '@/components/components-templates/faqs';
import NavCategory from '@/components/components-templates/navCategory';
import TopRatedResumeService from '@/components/components-templates/topRatedService';
import PricingSection from '@/components/components-templates/pricingCard';

const MidLevel = () => {

  const packages = [
    {
      title: 'Essential',
      subtitle: '45 Minute Phone Interview +\nCustom Resume\n& Cover Letter',
      price: '$299.95',
      paymentPlan: '$74.99',
      details: [
        'Phone Interview With Writer - 45 Minutes',
        'Custom Resume',
        'Custom Cover Letter',
        '3 Business Day Turnaround',
      ],
      link: '#',
    },
    {
      title: 'Advanced',
      subtitle: 'Essential + \nLinkedIn Optimization\nor Resume Distribution',
      price: '$449.95',
      paymentPlan: '$112.49',
      details: [
        'Phone Interview With Writer - 45 Minutes',
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
      price: '$599.95',
      paymentPlan: '$149.99',
      details: [
        'Phone Interview With Writer - 45 Minutes',
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
              <h1 className="text-5xl text-black font-bold">Mid-Career Resume
Writing Services</h1>
              <p className="py-9 text-xl font-bold text-green-600">2+ years experience seeking up to $70k</p>
              <p className="pb-5 text-xl leading-8">The Mid-Career Resume Service will convince your future employer you are a perfect fit for the job. Our professional resume writer will leverage the value of your specialized, hands-on experience to set your resume apart in a competitive job market.</p>
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
  
  export default MidLevel;
  