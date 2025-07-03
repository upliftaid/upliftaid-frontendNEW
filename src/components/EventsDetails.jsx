import { useState } from "react";

const EventDetail = () => {

const [formData , setFormData] = useState({
  fullName : '',
  phone: '',
  email : '',
  message : ''
})

const handleSubmit = (e) => {
  e.preventDefault()
  console.log("fromData", formData)
  setFormData({
      fullName : '',
  email : '',
  message : ''
  })
}

  return (
    <div className="w-full p-4 grid gap-4 h-fit">
        <h1 className="font-medium text-[26px]">FEED A HUNGRY CHILD</h1>
          <div className="min-w-[288px] min-h-[153px] md:w-[736px] md:h-[392px]">
            <img src="https://zozothemes.com/html/the-charity/img/sections/blog/single-blog.jpg" alt="image" className="w-full h-full"/>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h1 className="text-[24px] font-medium">EVENT DESCRIPTION</h1>
              <p className="text-justify text-[14px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolores similique voluptas recusandae! Natus beatae eum quo quisquam expedita, est ratione vero qui officia dolores ad facere a aut. Nemo sint, iste dolorum blanditiis nam sapiente fugiat temporibus accusantium ipsum minus libero nesciunt ducimus unde cum deleniti suscipit inventore nobis.</p>
            </div>
            <div className="grid">
              <p className="font-medium text-[24px]">EVENT CONTENT</p>
              <ul className="list-disc p-4 px-6 text-[14px] grid gap-2">
                <li>100 volunteers needed for this charity activity.</li>
                <li>We aggregate in the city center at 8:00 pm.</li>
                <li>Everyone will get items and we divided into 2 group to start to 2 directions.</li>
                <li>We will go to the place where homeless usually stay and give items for them.</li>
                <li>Every group has a leader and a secretary to note important problems what we will ask for help from nonprofits organization or NGOs.</li>
                <li>NOTE: Everyone ensure safety and punctuality.</li>
              </ul>
            </div>
            <hr className="text-gray-300 rounded"/>
            <div className="grid gap-4">
              <h1 className="font-medium text-[24px]">Leave A Reply</h1>
              <form action="" className="grid gap-4 place-items-start" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    id="fullName" 
                    placeholder="Full Name"
                    value={formData.fullName} 
                    onChange={(e) => setFormData({...formData , fullName:e.target.value})}
                    className="border border-gray-300 rounded p-2 outline-none text-[14px] lg:w-[800px] min-w-70 md:w-[700px]"
                  />
                  </div>
                  <div>
                    <input 
                        type="text" 
                        name="phone" 
                        id="phone" 
                        placeholder="Phone"
                        value={formData.phone} 
                        onChange={(e) => setFormData({...formData , phone:e.target.value})}
                        className="border border-gray-300 rounded p-2 outline-none text-[14px] lg:w-[800px] min-w-70 md:w-[700px]"
                    />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Email"
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData , email :e.target.value})}
                    className="border border-gray-300 rounded p-2 outline-none text-[14px] lg:w-[800px] min-w-70 md:w-[700px]"
                  />
                </div>
                <div>
                  <textarea 
                    type="text" 
                    name="message" 
                    id="message" 
                    placeholder="Message"
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData , message :e.target.value})}
                    className="border border-gray-300 rounded p-2 outline-none text-[14px] lg:w-[800px] md:w-[700px] min-w-70"
                  />
                </div>
                <button className="hover:bg-[#E69F00] rounded hover:text-white cursor-pointer px-4 py-2 bg-[#FFB204] ">Book Now</button>
              </form>
            </div>

          </div>
        </div>
  )
}

export default EventDetail