import {  Smartphone} from "lucide-react"

const TopHeader = () => {
    return (
        <div className="flex top-nav-contact bg-blue-950 h-9 px-5 justify-end items-center">
          <Smartphone className="text-green-600" size={24}/>
          <span className="mx-2"></span>
          <a href="tel:+1-877-208-6117" className="text-white text-lg hover:underline font-bold"> 1-877-208-6117 </a>
        </div>    
      )
}

export default TopHeader