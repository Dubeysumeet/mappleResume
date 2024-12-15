import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const HomeSection1 = () => {
  return (
    <div className="px-5 py-12">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-black">The Resume Target Method</h2>
    <h4 className="text-center text-md md:text-xl pt-3 text-black">Our proven resume-writing process holds a 98% interview success rate</h4>
    <div className="flex flex-wrap flex-col md:flex-row justify-between mt-10">
        <a href="" className="text-center md:w-1/5 mb-5 md:mb-0">
        <span><CallIcon className="text-green-600 mr-5 md:mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-md md:text-xl font-semibold text-black">Interview with
            Resume Writer</h3>
        </a>

        <a href="" className="text-center md:w-1/5 mb-5 md:mb-0">
        <span><ChatIcon className="text-green-600 mr-5 md:mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-md md:text-xl font-semibold text-black">3 business days
            for new resume</h3>
        </a>

        <a href="" className="text-center md:w-1/5 mb-5 md:mb-0">
        <span><LocationOnIcon className="text-green-600 mr-5 md:mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-md md:text-xl font-semibold text-black">100% satisfaction
            review</h3>
        </a>

        <a href="" className="text-center md:w-1/5 mb-5 md:mb-0">
        <span><CalendarMonthIcon className="text-green-600 mr-5 md:mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-md md:text-xl font-semibold text-black">Finalize resume
            and cover letter</h3>
        </a>

        <a href="" className="text-center md:w-1/5 mb-5 md:mb-0">
        <span><EmailIcon className="text-green-600 mr-5 md:mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-md md:text-xl font-semibold text-black">Activate job
            search resources</h3>
        </a>
        
    </div>
</div>
  )
}

export default HomeSection1;