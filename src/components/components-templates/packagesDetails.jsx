import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import VideocamIcon from '@mui/icons-material/Videocam';

const PackagesDetails = () => {
  return (
    <div className="px-5 py-20">
            <h2 className="md:text-center text-5xl font-bold text-black">* All Packages Include</h2>
            <div className="flex flex-wrap flex-col md:flex-row mt-14">
                <div className="flex flex-wrap mx-auto md:w-1/3 py-4 mb-5">
               <span><QuestionAnswerIcon className="text-green-600 mr-5" style={{ width: '60px', height: '60px' }}  /></span>
                    <h3 className="text-xl border-b border-gray-300 font-bold">Triple Promise Guarantee</h3>
                </div>

                <div className="flex flex-wrap mx-auto md:w-1/3 py-4 mb-5">
               <span><VideocamIcon className="text-green-600 mr-5" style={{ width: '60px', height: '60px' }}  /></span>
                    <h3 className="text-xl border-b border-gray-300 font-bold">90-Day Interview Guarantee</h3>
                </div>

                <div className="flex flex-wrap mx-auto md:w-1/3 py-4 mb-5">
               <span><DescriptionIcon className="text-green-600 mr-5" style={{ width: '60px', height: '60px' }}  /></span>
                    <h3 className="text-xl border-b border-gray-300 font-bold">2 Year Online Resume Storage</h3>
                </div>

                <div className="flex flex-wrap mx-auto md:w-1/3 py-4 mb-5 ">
               <span><NotificationsActiveIcon className="text-green-600 mr-5" style={{ width: '60px', height: '60px' }}  /></span>
                    <h3 className="text-xl border-b border-gray-300 font-bold">Daily Targeted Job Alerts</h3>
                </div>

                <div className="flex flex-wrap mx-auto md:w-1/3 py-4 mb-5">
               <span><DescriptionIcon className="text-green-600 mr-5" style={{ width: '60px', height: '60px' }}  /></span>
                    <h3 className="text-xl border-b border-gray-300 font-bold">20 “Thank you” Letters</h3>
                </div>

                <div className="flex flex-wrap mx-auto md:w-1/3 py-4 mb-5">
               <span><QuestionAnswerIcon className="text-green-600 mr-5" style={{ width: '60px', height: '60px' }}  /></span>
                    <h3 className="text-xl border-b border-gray-300 font-bold">Master the Interview Guide</h3>
                </div>

               
            </div>
        </div>
  )
}

export default PackagesDetails;