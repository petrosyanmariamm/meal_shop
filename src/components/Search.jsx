
export  function Search({search}) {
  return (
    <div className=" text-center">
        <input className=" outline-0 border-b-2 border-orange-600 p-2 my-2 w-[30%]" type="text" placeholder="Search Here" onChange={(e)=> search(e.target.value)}/>
    </div>
  )
}
