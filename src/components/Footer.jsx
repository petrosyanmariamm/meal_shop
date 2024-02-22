import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TfiYoutube } from "react-icons/tfi";
export  function Footer() {
  const [footerInfo] = useState([{title:'Customers', descr:['How to order']},
                                                {title:'Partners', descr:['Become a delivery partner']},
                                                {title:'Company', descr:['About us', 'News', 'Career', 'Contact us']},
                                                {title:'Useful links', descr:['Terms & Conditions']}]);

  return (
    
      <div className="bg-gray-300 p-10  flex flex-col   gap-2  w-full ">
        <div className=" flex justify-evenly flex-wrap ">
            {
                footerInfo.map(el => <div key={el} className="flex flex-col w-[10rem] md:w-[25%] sm:w-[40%]">
                                          <h4 className=" text-orange-900 font-bold">{el.title}</h4>
                                          {el.descr.map(elem => <Link to={'/'} key={elem} className=" cursor-pointer  hover:text-orange-400 duration-500">{elem}</Link>)}
                                      </div>)
            }
        </div>
      
        <div className=" flex flex-col ">
          <p className=" text-orange-900 font-bold mb-2 mt-2">Follow us on social media</p>
          <div className=" flex text-2xl gap-6 cursor-pointer font-bold">
            <Link className="hover:text-orange-400 duration-500"><SlSocialFacebook /></Link>
            <Link className="hover:text-orange-400 duration-500"><SlSocialInstagram /></Link>
            <Link className="hover:text-orange-400 duration-500"><TfiYoutube /></Link>
          </div>
          
        </div>
    </div>
  
    
  )
}
