import { Link, NavLink } from "react-router-dom"
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";

const Campgain = ({fil}) => {
  const {deadline,description,emailinfo,image,minDonation,title,username,type,_id} = fil;




  return (


    <div>

    <div className="card card-compact bg-base-100  shadow-xl">
<figure>
<img
src={image}
alt="Shoes" className="h-[200px] w-full bg-cover" />
</figure>
<div className="card-body text-left">
<h2 className="card-title font-extrabold ">{username}</h2>
<p className="font-semibold "><span className="text-sm font-bold">Title: </span>{title}</p>
<p className="font-semibold "><span className="text-sm font-bold">Email: </span>{emailinfo}</p>
<p className="font-semibold "><span className="text-sm font-bold">Donate: </span>{minDonation}$</p>
<div className="grid grid-cols-1 ">
 <NavLink to={`/allcampgain/${_id}`}>
 <button className="btn btn-outline w-full" > <BiDetail></BiDetail> Details </button>
 </NavLink> 
 {/* <Link to={`/update/${_id}`}>
 <button className="btn btn-outline w-full">update</button>
 </Link>  */}
{/* <button className="btn btn-outline w-full" onClick={()=>handleDelete(_id)}><RiDeleteBin5Fill></RiDeleteBin5Fill> Delete</button> */}
</div>
</div>
   </div> 
  
</div>

  




  )
}

export default Campgain