import React from 'react'
import Banner1 from '../../assets/images/bg_1.jpg'
import Img1 from '../../assets/images/img_1.jpg'
import { FaLightbulb, FaHandHoldingUsd, FaUsers } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import p1 from '../../assets/images/person_1.jpeg'
import p2 from '../../assets/images/person_2.jpeg'
import p3 from '../../assets/images/person_3.jpeg'
import p4 from '../../assets/images/person_4.jpeg'

function HomePage() {
  return (
    <div>
        <div className="navbar">

      </div>
        <div className="relative">
          <div className="owl-carousel loop-block-31">
            <div
              className="h-[95vh] min-[700px]: bg-fixed bg-top bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${Banner1})`}}
              data-stellar-background-ratio="0.5"
            >
              <div className="block container mx-auto px-4">
                <div className="flex justify-center items-center">
                  <div className="w-full md:w-7/12">
                    <h2 className="text-white text-4xl md:text-5xl mb-6">UpliftAid</h2>
                    <p className="inline-block">
                      <a href="#" data-fancybox>
                        {/* <span className="inline-block bg-white p-3 rounded-full shadow-lg">
                          <span className="block w-6 h-6 bg-gray-700"></span>
                        </span> */}
                        <span className="align-self-center"></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="py-16 bg-white">
        <div className="containe">
          <div className="flex justify-center flex-wrap items-center gap-16">
            {/* Image Block */}
            <div className="">
                <a href="#">
                    <img src={Img1} alt="About UpliftAid" className="w-[507px] h-[337px]" />
                </a>
            </div>

            {/* Text Block */}
            <div className="w-[570px] md-m-0 m-5">
                <h2 className=" text-gray-800 mb-4" style={{fontSize:'3.5rem',lineHeight:'1.2', fontWeight:'300'}}>Who Are We?</h2>
                <p className=" text-gray-600 text-justify mb-4" style={{fontSize:'1.25rem',fontWeight:'300'}}>
                At UpliftAid Foundation, we are a purpose-driven non-profit organization
                dedicated to making the world a better place by addressing critical issues
                and empowering individuals and communities.
                </p>
                <p className="text-gray-600 mb-6">
                Guided by compassion, collaboration, and a commitment to positive change, 
                we strive to create a brighter and more sustainable future for all.
                </p>
                <a
                href="/about"
                className="inline-block bg-[#388782] tracking-wider text-white px-5 py-2 transition duration-300"
                >
                Learn More
                </a>
            </div>
            </div>
        </div>
        </div>

        <div className="box3-section border-t py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center items-center gap-10">
                {/* Our Mission */}
                <div>
                    <div className="flex items-start space-x-4 w-[333px]">
                    <div className="text-[#388782] text-3xl mt-1">
                        <FaLightbulb />
                    </div>
                    <div>
                        <h3 className="text-xl  mb-2">Our Mission</h3>
                        <p className="text-gray-500 mb-2">
                        At UpliftAid Foundation, our mission is to empower communities, protect the environment, and advocate for the well-being of all living beings. We are dedicated to fostering sustainable development, promoting mental health awareness, and safeguarding animal rights
                        </p>
                          <a href="/about" className="text-blue-600 underline hover:text-blue-800">
                          Learn More
                        </a>
                    </div>
                    </div>
                </div>

                {/* Make Donations */}
                <div>
                    <div className="flex items-start space-x-4 w-[333px]">
                    <div className="text-[#388782] text-3xl mt-1">
                        <FaHandHoldingUsd />
                    </div>
                    <div>
                        <h3 className="text-xl  mb-2">Make Donations</h3>
                        <p className="text-gray-500 mb-2">
                        Your generosity can help us create meaningful change and make the world a better place. By donating to UpliftAid Foundation, you are contributing to a brighter future—empowering underprivileged communities, protecting the environment, promoting mental health, and caring for animals in need.
                        </p>
                        <a href="/donate" className="text-blue-600 underline hover:text-blue-800">
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>

                {/* Volunteers */}
                <div>
                    <div className="flex items-start space-x-4 w-[333px]">
                    <div className="text-[#388782] text-3xl mt-1">
                        <FaUsers />
                    </div>
                    <div>
                        <h3 className="text-xl mb-2">We Need Volunteers</h3>
                        <p className="text-gray-500 mb-2">
                        At UpliftAid Foundation, we believe that change begins with individuals who are passionate about making a difference. By volunteering with us, you can play an active role in empowering communities, advocating for mental health, protecting the environment, and caring for animals in need.
                        </p>
                        <a href="/volunteers" className="text-blue-600 underline hover:text-blue-800">
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>

                </div>
            </div>
            </div>

            <div className="site-section">
                <div className="containe">
                  <div className="row justify-center">
                      <div className="text-center">
                        <h2>Latest Fundraisers</h2>
                        <p>Every contribution, no matter the size has the power to transform lives and protect <br /> our planet.</p>
                        <p>
                          <a href="" className="text-blue-600 underline hover:text-blue-800">view all Fundraisers</a>
                        </p>
                      </div>
                  </div>
                </div>
            </div>
            <div className="site-section">
                <div className="containe">
                  <div className="row justify-center">
                      <div className="text-center">
                        <h2>Latest Donation</h2>
                        <p>Every contribution, no matter the size has the power to transform lives and protect <br /> our planet.</p>
                        <p>
                          <a href="" className="text-blue-600 underline hover:text-blue-800">view all Donation</a>
                        </p>
                      </div>
                  </div>
                </div>
            </div>

            <div className="img-box">
              <div className="site-section fund-raisers">
                <div className="container">
                  <div className="flex justify-center items-center flex-wrap md:gap-0 gap-5">
                    <div className="bord-box mb-5">
                      <div className="person-donate text-center">
                        <img
                          src={p1}
                          alt="Gaurav"
                          className="img-fluid"
                        />
                        <div className="donate-info">
                          <h2>Gaurav</h2>
                          <span className="time d-block mb-3">Donated Just now</span>
                          <p className="mt-6">
                            Donated <span className="text-success">₹252</span> <br />
                            <em>for</em>{" "}
                            <a href="#" className="link-underline fundraise-item">
                              Water Is Life. Clean Water In Urban Area
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bord-box mb-5">
                      <div className="person-donate text-center">
                        <img
                          src={p2}
                          alt="Ankit Sharma"
                          className="img-fluid"
                        />
                        <div className="donate-info">
                          <h2>Ankit Sharma</h2>
                          <span className="time d-block mb-3">Donated 1 hour ago</span>
                          <p className="mt-6">
                            Donated <span className="text-success">₹400</span> <br />
                            <em>for</em>{" "}
                            <a href="#" className="link-underline fundraise-item">
                              Children Needs Education
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bord-box mb-5">
                      <div className="person-donate text-center">
                        <img
                          src={p3}
                          alt="Mohit Kunwar"
                          className="img-fluid"
                        />
                        <div className="donate-info">
                          <h2>Mohit Kunwar</h2>
                          <span className="time d-block mb-3">Donated 4 hours ago</span>
                          <p className="mt-6">
                            Donated <span className="text-success">₹1,200</span> <br />
                            <em>for</em>{" "}
                            <a href="#" className="link-underline fundraise-item">
                              Need Shelter for Children in India
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bord-box mb-5">
                      <div className="person-donate text-center">
                        <img
                          src={p4}
                          alt="Anjali Patel"
                          className="img-fluid"
                        />
                        <div className="donate-info">
                          <h2>Anjali Patel</h2>
                          <span className="time d-block mb-3">Donated 9 hours ago</span>
                          <p className="mt-6">
                            Donated <span className="text-success">₹100</span> <br />
                            <em>for</em>{" "}
                            <a href="#" className="link-underline fundraise-item">
                              Water Is Life. Clean Water In Urban Area
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-section relative">
                <div className="containe">
                  <div className=" row justify-center">
                      <div className="text-center">
                        <h2>Success Stories</h2>
                        <p>Every story shows how our combined efforts create real change, turning challenges <br /> into successes and hope into reality</p>
                        <p>
                          <a href="" className="text-blue-600 underline hover:text-blue-800">Read More Stories</a>
                        </p>
                      </div>
                  </div>
                  <div className="btn">
                      <div className="b pre">
                      <a href=""><BsChevronLeft/></a>
                    </div>
                    <div className="b next">
                      <a href=""><BsChevronRight/></a>
                    </div>
                  </div>
                </div>
          </div>
        <div className="site-section bg-light">
          <div className="m-10">
            <div className="flex  flex-wrap mb-5">
              <div className="">
                <h2 className="latest-blogs">Latest Blogs</h2>
                <div id="blog-posts-container" className="row"></div>
              </div>
            </div>
            </div>
        </div>
            
    </div>
  )
}

export default HomePage