import { CiHeart } from "react-icons/ci";
import { FaClock } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import ActivityDetails from "../constants/ActivityDetails";


const Activity = () => {
  return (
        <div className="w-full shadow-md rounded bg-white p-4 grid gap-6">

            {/* Contribution */}
            <div className="grid gap-4">
                <h1 className="font-semibold text-xl md:text-2xl">Your Contributions</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">

                    <div className="flex bg-blue-500 md:w-64 px-4 py-2 items-center text-white justify-between rounded">
                        <div>
                            <p className="text-gray-200 lg:text-lg">Total Donations</p>
                            <p className="font-bold md:text-xl text-[14px]">₹2450 </p>
                        </div>
                        <div>
                            <CiHeart size={25}/>
                        </div>
                    </div>
                    <div className="flex bg-green-500 md:w-64 px-4 py-2 items-center text-white justify-between rounded">
                        <div>
                            <p className="text-gray-200 lg:text-lg">Volunteers Hours</p>
                            <p className="font-bold md:text-xl text-[14px]">124</p>
                        </div>
                        <div>
                            <FaClock size={25}/>
                        </div>
                    </div>
                    <div className="flex bg-red-600 md:w-64 px-4 py-2 items-center text-white justify-between rounded">
                        <div>
                            <p className="text-gray-200 md:text-lg">Events Attend</p>
                            <p className="font-bold md:text-xl text-[14px]">8</p>
                        </div>
                        <div>
                            <FaCalendar size={25}/>
                        </div>
                    </div>
                    <div className="flex bg-yellow-500 md:w-64 px-4 py-2 items-center text-white justify-between rounded">
                        <div>
                            <p className="text-gray-200 md:text-lg">Total Donations</p>
                            <p className="font-bold md:text-xl text-[14px]">₹2450 </p>
                        </div>
                        <div>
                            <CiHeart size={40}/>
                        </div>
                    </div>

                </div>
            </div>

            <hr className="text-gray-200 rounded"/>
            
            <div className="grid gap-4">
                <h1 className="font-semibold text-xl md:text-2xl">Recent Activity</h1>
                <div className="grid gap-4">
                    {
                        ActivityDetails.map((activity , index) => {
                            return (
                                <div className="p-4 border border-gray-200 rounded-md flex gap-5 items-center justify-between" key={activity.heading + index}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full bg-${activity.iconColor} text-white flex items-center justify-center`}>
                                            <activity.icon />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{activity.heading}</p>
                                            <p className="text-[14px] text-gray-500">{activity.date}</p>
                                        </div>
                                    </div>
                                    <p className={`font-semibold text-[18px] text-${activity.iconColor}`}>{activity.amount}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    
        </div>
  )
}

export default Activity