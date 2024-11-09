import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Section1 = () => {
  return (
    <div className="px-5 py-32 secondary-bg">
    <h2 className="text-center text-5xl font-bold text-white">More Ways to Order</h2>
    <div className="flex flex-wrap justify-between mt-20">
        <a href="" className="text-center w-1/5">
        <span><CallIcon className="text-green-600 mr-5 mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-xl font-semibold text-white">Call 1-877-208-6410</h3>
        </a>

        <a href="" className="text-center w-1/5">
        <span><ChatIcon className="text-green-600 mr-5 mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-xl font-semibold text-white">Live Chat</h3>
        </a>

        <a href="" className="text-center w-1/5">
        <span><LocationOnIcon className="text-green-600 mr-5 mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-xl font-semibold text-white">Find a location</h3>
        </a>

        <a href="" className="text-center w-1/5">
        <span><CalendarMonthIcon className="text-green-600 mr-5 mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-xl font-semibold text-white">Schedule a call back</h3>
        </a>

        <a href="" className="text-center w-1/5">
        <span><EmailIcon className="text-green-600 mr-5 mb-5 hover:text-green-950" style={{ width: '50px', height: '50px' }}  /></span>
            <h3 className="text-xl font-semibold text-white">Email our team</h3>
        </a>
        
    </div>
</div>
  )
}

export default Section1;