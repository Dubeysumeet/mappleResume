import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const HomeSection1 = () => {
  return (
    <div className="px-5 py-32">
    <h2 className="text-center text-5xl font-bold text-black">The Resume Target Method</h2>
    <h4 className="text-center text-2xl pt-5 text-black">Our proven resume-writing process holds a 98% interview success rate</h4>
    <div className="flex flex-wrap justify-between mt-20">
        <a href="" className="text-center w-1/5">
        <span><CallIcon className="text-green-600 mr-5 mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-xl font-semibold text-black">Interview with
            Resume Writer</h3>
        </a>

        <a href="" className="text-center w-1/5">
        <span><ChatIcon className="text-green-600 mr-5 mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-xl font-semibold text-black">3 business days
            for new resume</h3>
        </a>

        <a href="" className="text-center w-1/5">
        <span><LocationOnIcon className="text-green-600 mr-5 mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-xl font-semibold text-black">100% satisfaction
            review</h3>
        </a>

        <a href="" className="text-center w-1/5">
        <span><CalendarMonthIcon className="text-green-600 mr-5 mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-xl font-semibold text-black">Finalize resume
            and cover letter</h3>
        </a>

        <a href="" className="text-center w-1/5">
        <span><EmailIcon className="text-green-600 mr-5 mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-xl font-semibold text-black">Activate job
            search resources</h3>
        </a>
        
    </div>
</div>
  )
}

export default HomeSection1;