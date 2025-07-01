import { FaKey } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Settings = () => {
  return (
        <div className="w-full shadow-md rounded bg-white p-4 grid gap-6">

            <div className="grid gap-6">
                <h1 className="font-semibold text-xl md:text-2xl">Settings and Preferences</h1>
                <div className="grid gap-3">
                    <p className="font-semibold text-[18px]">Notifications</p>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="email" id="email" className="w-4 h-4"/>
                        <label htmlFor="email">Email notifications for new updates</label>
                    </div>
                    {/* <div className="flex items-center gap-2">
                        <input type="checkbox" name="sms" id="sms" className="w-4 h-4"/>
                        <label htmlFor="sms">Sms updates for urgent campaigns</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="report" id="report" className="w-4 h-4"/>
                        <label htmlFor="report">Weekly impact reports</label>
                    </div> */}
                </div>
                <div className="grid gap-3">
                    <p className="font-semibold text-[18px]">Privacy</p>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="contribution" id="contribution" className="w-4 h-4"/>
                        <label htmlFor="contribution">Show my contributions publicy</label>
                    </div>
                    {/* <div className="flex items-center gap-2">
                        <input type="checkbox" name="permission" id="permission" className="w-4 h-4"/>
                        <label htmlFor="permission">Allow other volunteers to contact me</label>
                    </div> */}
                </div>
            </div>

            <hr className="text-gray-200 rounded"/>

            <div className="flex gap-4">
                <button className="cursor-pointer p-2 rounded hover:bg-[#E69F00] bg-[#FFB204] hover:text-white flex items-center gap-2">
                    <FaKey />    
                    Change Password
                </button>

                <button className="cursor-pointer p-2 rounded hover:bg-[#E69F00] bg-[#FFB204] hover:text-white flex items-center gap-2">
                    <IoMdSettings size={20} />
                    <p>Logout</p>
                </button>
            </div>

        
    
        </div>
  )
}

export default Settings