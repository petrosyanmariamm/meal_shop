
import { useState } from "react";
import { NavLink as Link } from "react-router-dom";

export  function Header() {
  const [links, setLinks] = useState([{path:'/', title:'Home'},
                                      {path:'/about', title:'About'},
                                      {path:'/contact', title:'Contact'}])

  return (
    <nav className="mx-auto bg-gray-300 p-2 md:text-[3rem] sm:text-[2.5rem]  flex justify-center items-center gap-4 text-orange-800 fixed w-full">
      {
        links.map(el=> <Link className=' hover:text-orange-300 duration-1000' to={el.path}>{el.title}</Link>)
      }
     
    </nav>
  )
}
