import React, { useState } from "react"
import { useEffect } from "react"

const Navbar = ({ appdata, logo }) => {
    const [numberstate, setNumberstate]=useState(0)
    const [stringstate, setStringstate]=useState("a")
    const [arraystate, setArraystate]=useState([
        "a",false,0
    ])
    //const [data,setData]=useState(0)
    //console.log(numberstate)
    //console.log(stringstate)
    //console.log(arraystate)


    const[count,setCount]=useState(0);
    useEffect(()=>{
      //alert('effect rendered')
      console.log("count is "+count)
    },[count])
    return (
    <>
        {/* {appdata.appname} {logo} */}
        <button className='w-[5rem] h-[5rem] bg-red-500 text-white'
        onClick={()=>{ setCount(count+1)}}>
      Count {count}
    </button>
    </>
  )
}

export default Navbar
