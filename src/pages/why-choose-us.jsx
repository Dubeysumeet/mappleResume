import { Smartphone } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <>
    <div className="text-center py-24 pl-16 pr-16 mt-20 bg-gray-50">
      <h2 className="text-5xl text-black font-bold mb-8">Why Choose Us</h2>
      <p className="text-md text-gray-500 font-medium">When you choose Resume Target you don’t just get a new resume - you benefit from a proven resume writing service built around your success.</p>
    </div>
   <div className="flex p-5 mt-20">

    <div className="w-4/6 h-3/4 mr-7">
    <div className="text-start flex flex-col gap-8 my-10 bg-gray-50 px-20 py-8">
      <h1 className="text-3xl text-black font-bold ">Why Choose Us</h1>
      <h5 className="text-md text-gray-400 font-medium">When you choose Resume Target you don’t just get a new resume - you benefit from a proven resume writing service built around your success.</h5>
      <a href="#" className="text-md"><span className=" bg-white text-green-600 px-10 py-3">Lorem ipsum dolor sit amet</span></a>
    </div>

    <div className="text-start flex flex-col gap-8 my-10 bg-gray-50 px-20 py-8">
      <h1 className="text-3xl text-black font-bold ">Why Choose Us</h1>
      <h5 className="text-md text-gray-400 font-medium">When you choose Resume Target you don’t just get a new resume - you benefit from a proven resume writing service built around your success.</h5>
      <a href="#" className="text-md"><span className=" bg-white text-green-600 px-10 py-3">Lorem ipsum dolor sit amet</span></a>
    </div>

    <div className="text-start flex flex-col gap-8 my-10 bg-gray-50 px-20 py-8">
      <h1 className="text-3xl text-black font-bold ">Why Choose Us</h1>
      <h5 className="text-md text-gray-400 font-medium">When you choose Resume Target you don’t just get a new resume - you benefit from a proven resume writing service built around your success.</h5>
      <a href="#" className="text-md"><span className=" bg-white text-green-600 px-10 py-3">Lorem ipsum dolor sit amet</span></a>
    </div>

    <div className="text-start flex flex-col gap-8 my-10 bg-gray-50 px-20 py-8">
      <h1 className="text-3xl text-black font-bold ">Why Choose Us</h1>
      <h5 className="text-md text-gray-400 font-medium">When you choose Resume Target you don’t just get a new resume - you benefit from a proven resume writing service built around your success.</h5>
      <a href="#" className="text-md"><span className=" bg-white text-green-600 px-10 py-3">Lorem ipsum dolor sit amet</span></a>
    </div>

    <div className="text-start flex flex-col gap-8 my-10 bg-gray-50 px-20 py-8">
      <h1 className="text-3xl text-black font-bold ">Why Choose Us</h1>
      <h5 className="text-md text-gray-400 font-medium">When you choose Resume Target you don’t just get a new resume - you benefit from a proven resume writing service built around your success.</h5>
      <a href="#" className="text-md"><span className=" bg-white text-green-600 px-10 py-3">Lorem ipsum dolor sit amet</span></a>
    </div>

    <div className="text-start flex flex-col gap-8 my-10 bg-gray-50 px-20 py-8">
      <h1 className="text-3xl text-black font-bold ">Why Choose Us</h1>
      <h5 className="text-md text-gray-400 font-medium">When you choose Resume Target you don’t just get a new resume - you benefit from a proven resume writing service built around your success.</h5>
      <a href="#" className="text-md"><span className=" bg-white text-green-600 px-10 py-3">Lorem ipsum dolor sit amet</span></a>
    </div>

    </div>

    <div className="w-2/6 flex flex-col py-24 gap-6">

<div className="bg-blue-950 p-8">
<h1 className="text-4xl font-bold text-white mb-6">Get your resume reviewed <span className="text-green-700"> for free</span></h1>

<p className="text-base text-white">Upload your resume and a Resume Advisor will call you to review your resume.</p>

<form action="">
  <div className="my-3 flex flex-col w-3/4 gap-1">
  <label htmlFor="" className='text-base text-white'>Name:</label>
  <input type="text" placeholder="Your First and Last Name" className="mt-1 pl-4 py-3 text-sm  border bg-blue-950 border-black"/>
  </div>
  
  <div className="my-3 flex-col w-3/4 gap-1">
  <label htmlFor="" className='text-base text-white'>Email:</label>
  <input type="email" placeholder="Your Email Address" className="mt-1 pl-4 py-3 text-sm border bg-blue-950 border-black"/>
  </div>

  <div className="my-3 flex-col w-3/4 gap-1">
  <label htmlFor="" className='text-base text-white'>Phone:</label>
  <input type="tel" placeholder="222-222-222" className="mt-1 pl-4 py-3 text-sm border bg-blue-950 border-black"/>

</div>
<div className="my-2 flex-col w-3/4 gap-1">
<label htmlFor="" className='text-base text-white'>Upload</label>
  <input type="file" placeholder="Upload Docs" className="mt-1 py-2 text-sm bg-blue-950"/>
</div>

<div className="my-3 flex-col w-3/4 gap-1">
<button type="submit" className="mt-1 px-8 py-3 mb-8 text-lg bg-green-500 text-white">Submit</button>
</div>

</form>

<hr/>

<div className="my-10">
  <p className="mb-3 text-sm text-gray-300">We Respect your Privacy</p>

  <p className="mb-3 text-xs text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta harum ea beatae, amet autem nulla quae nihil quos distinctio fuga?</p>
</div>

</div>

<div className="bg-green-900 p-8">
  <h2 className="text-4xl text-white mb-8 font-bold"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

  <p className="text-sm text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel soluta iusto ducimus accusantium mollitia inventore!</p>

  <button className="p-3 bg-white mt-8" > Start quiz test</button>
</div>

<div>
  <h2 className="text-4xl text-black font-bold px-14 mt-6">We're just a phone call away</h2>
  <div className="flex flex-col my-7 gap-2 px-14">
            <p className="text-lg text-black">Just one call Away</p>
           
            <div className="flex gap-1">
            <Smartphone className="text-green-600" size={28} />
            <a
              href="tel:+1-877-208-6117"
              className="text-black text-2xl hover:underline font-bold"
            >
              {" "}
              1-877-208-6117{" "}
            </a>
            </div>
           
          </div>
</div>
    </div>
   </div>
   </>
  
  )
}

export default WhyChooseUs;