import { useEffect } from "react";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom"
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";

const Campgaindata = ({singleData,setData}) => {
    const {deadline,description,emailinfo,image,minDonation,title,username,type,_id} = singleData;

    
    function handleDelete(id){
           console.log(id);
           Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            

              fetch(`https://react-sports-server-site.vercel.app/campgain/${id}`,{
                method: 'DELETE',
              })
              .then(res=>res.json())
              .then(data =>{
                 if(data.deletedCount > 0){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Card has been deleted.",
                    icon: "success"
                  })
                 
                  setData(prevData => prevData.filter(d => d._id !== id));
                 }
              })
            }
          });
    }
    // function handleUpdate(id){
    //        console.log(id);
    // }

   
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
       <NavLink to={`/allcampgain/${_id}`}>
       <button className="btn btn-outline w-full" onClick={()=>handleDetails(_id)}> <BiDetail /> Details </button>
       </NavLink> 
       {/* <Link to={`/update/${_id}`}>
       <button className="btn btn-outline w-full">update</button>
       </Link>  */}
      <button className="btn btn-outline w-full" onClick={()=>handleDelete(_id)}><RiDeleteBin5Fill></RiDeleteBin5Fill> Delete</button>
    </div>
  </div>
         </div>  
    </div>
  )
}

export default Campgaindata