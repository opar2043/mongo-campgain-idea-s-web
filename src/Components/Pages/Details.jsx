import { useLoaderData, useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { MdSystemUpdateAlt} from "react-icons/md";
import { LiaDonateSolid } from "react-icons/lia";

const Details = ({}) => {
    const {id} = useParams();
    const details = useLoaderData();
    const oneDetails = details?.find(user => user._id == id) || []
    // console.log(oneDetails);
    const {deadline,description,emailinfo,image,minDonation,title,username,type,_id} = oneDetails;

  return (
    <div className="w-10/12 mx-auto my-10">
<div className="card card-compact bg-base-200 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" 
      className="w-1/4 rounded-lg"/>
  </figure>
  <div className="card-body text-left">
    <h2 className="card-title text-2xl md:text-4xl">{title} Category</h2>
    <p className="text-lg pb-0.5"><span className="text-lg font-bold  ">Name: </span> {username}</p>
    <p className="text-lg pb-0.5"><span className="text-lg font-bold  ">Email: </span> {emailinfo}</p>
    <p className="text-lg pb-0.5"><span className="text-lg font-bold">Type: </span> {type}</p>
    <p className="text-lg pb-0.5"><span className="text-lg font-bold">minDonation: </span> {minDonation}</p>
    <p className="text-lg pb-0.5"><span className="text-lg font-bold">Deadline: </span> {deadline}</p>
    <p className="text-lg pb-0.5"><span className="text-lg font-bold">Description: </span> {description}</p>
    <div className="card-actions w-full grid grid-cols-2">
      {/* <button className="btn btn-outline">Buy Now</button> */}
      <Link to={`/update/${_id}`} className="w-full">
       <button className="btn btn-outline w-full"><MdSystemUpdateAlt></MdSystemUpdateAlt> Update Data</button>
       </Link>
       <button className="btn btn-warning w-full"> <LiaDonateSolid></LiaDonateSolid> Donate</button>
    </div>
  </div>
</div>
</div>
   
  )
}

export default Details