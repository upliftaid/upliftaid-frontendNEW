import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import VolunteersDetails from "../constants/Volunteers";

const Volunteers = () => {
  return (
    <div className="lg:w-full grid gap-20 lg:p-6 min-w-[320px] place-items-center justify-center">
      <div className="grid gap-1 text-center">
        <h1 className="text-[36px]">MEET OUR VOLUNTEER</h1>
        <div className="bg-[#00733C] w-16 h-[2.5px] mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8 p-4 md:grid-cols-3 grid-cols-1">
        {VolunteersDetails.map((data, index) => {
          return (
            <div className="grid lg:w-[350px] gap-14" key={data.name + index}>
              <div className="lg:w-[350px] h-[188px] grid place-items-center">
                <img src={data.image} alt="" />
              </div>
              <div className="text-center grid gap-4">
                <div className="grid gap-1 text-center">
                  <h1 className="text-[18px]">{data.name}</h1>
                  <div className="bg-[#00733C] w-8 h-[2.5px] mx-auto"></div>
                </div>
                <h1>{data.post}</h1>
                <p>{data.description}</p>
                <div className="flex items-center justify-center gap-8">
                  <Link to={data.faceBookUrl}>
                    <FaFacebookF />
                  </Link>
                  <Link to={data.twitterUrl}>
                    <FaTwitter />
                  </Link>
                  <Link to={data.linkedinUrl}>
                    <FaLinkedinIn />
                  </Link>
                  <Link to={data.googleUrl}>
                    <FaGoogle />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Volunteers;
