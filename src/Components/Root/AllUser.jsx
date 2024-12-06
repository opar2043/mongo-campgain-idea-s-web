import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";
import User from "../Pages/User";

const AllUser = () => {
    const userData = useLoaderData();
    const [data,setData] = useState(userData)

    // const {deadline,description,emailinfo,image,minDonation,title,username,type,_id} = singleData;


  return (
    <div className="my-10">
                <div className="overflow-x-auto w-11/12 mx-auto">
  <table className="table">
    {/* head */}
    <thead className=''>
      <tr>
        <th>index</th>
        <th>Name</th>
        <th>Email</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      
      
      {
        data.map((single,idx)=> 
            <tr>
  <th>{idx +1}</th>
        <td>{single.username}</td>
        <td>{single?.emailinfo}</td>
        <td>{single.type}</td>
        <td>
        <NavLink to={`/allcampgain/${single._id}`}>
       <button className="btn btn-info w-full" > <BiDetail /> Details </button>
       </NavLink> 
            
        </td>
  </tr>
        )
      }
   
     
       
   
    </tbody>
  </table>
</div>
    </div>
  )
}

export default AllUser