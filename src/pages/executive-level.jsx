import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PackagesDetails from '@/components/components-templates/packagesDetails';
import Section1 from '@/components/components-templates/section1';
import Questions from '@/components/components-templates/questions';
import TestimonialCarousel from '@/components/components-templates/testimonialCarousel';
import Faqs from '@/components/components-templates/faqs';
import NavCategory from '@/components/components-templates/navCategory';
import TopRatedResumeService from '@/components/components-templates/topRatedService';
import PricingSection from '@/components/components-templates/pricingCard';

const ExecutiveLevel = () => {

  const packages = [
    {
      title: 'Essential',
      subtitle: '90 Minute Phone Interview +\nCustom Resume\n& Cover Letter',
      price: '$749.95',
      paymentPlan: '$187.49',
      details: [
        'Phone Interview With Writer - 90 Minutes',
        'Custom Resume',
        'Custom Cover Letter',
        '3 Business Day Turnaround',
      ],
      link: '#',
    },
    {
      title: 'Advanced',
      subtitle: 'Essential + \nLinkedIn Optimization\nor Resume Distribution',
      price: '$899.95',
      paymentPlan: '$224.99',
      details: [
        'Phone Interview With Writer - 90 Minutes',
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
      price: '$1049.95',
      paymentPlan: '$262.49',
      details: [
        'Phone Interview With Writer - 90 Minutes',
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
        <div className="px-5 py-28 secondary-bg">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col w-full md:w-2/3">
              <h1 className="text-5xl text-black font-bold">Executive Resume
Writing Services</h1>
              <p className="py-9 text-xl font-bold text-green-700">Seeking or earning 125k+ at executive level</p>
              <p className="pb-5 text-xl leading-8">We partner you with a professional resume writer who holds extensive experience working with our executive clients. Our resume writer speaks your executive language and will distill complex, long-term initiatives into a resume that will launch the next phase of your executive career.

</p>
              <span>
              <a href="#packages" className="text-lg font-semibold hover:underline">  <ExpandCircleDownIcon className="text-green-700 mr-5" style={{ width: '40px', height: '40px' }}  /> Show Packages</a>
              </span>
                
            
            </div>
            {/* <div className=" md:w-1/3">
              <TopRatedResumeService/>
            </div> */}
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
  
  export default ExecutiveLevel;
  