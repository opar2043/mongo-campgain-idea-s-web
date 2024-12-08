import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Campgain from './Campgain'

const Sixcamp = () => {
  const [data , setData] = useState([])

   useEffect(()=>{
    fetch('https://react-sports-server-site.vercel.app/campgain')
    .then(res=>res.json())
    .then(data=>{
      setData(data)
    })
   },[])

   console.log(data);

  return (
    <div className="md:my-14 my-5">
      
 <div className=" my-7 grid grid-cols-1 md:grid-cols-3 justify-between">
  <p></p>
  <h2 className="text-4xl font-extrabold">Our Campgain</h2>
<NavLink to={'/allcampgain'}><button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-10 text-white">Show All Campgain</button> </NavLink>

    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {
    data.slice(0, 6).map(fil => <Campgain key={fil._id} fil={fil}></Campgain>)
  }

  </div>
   
    </div>
  );
};

export default Sixcamp;
