import React from 'react'

const Donation = ({det}) => {

  const {deadline,description,emailinfo,image,minDonation,title,username,type,_id} = det;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border">
  <figure>
    <img
      src={image}
      alt="Movie"
      className='w-1/2' />
  </figure>
  <div className="card-body text-left">
    <h2 className="card-title font-bold">CateGory: {title}</h2> <hr />
    <p className='flex justify-left gap-2 items-center'> <span className="text-xs font-bold">User Name: </span> {username}</p> 
    <p className='flex justify-left gap-2 items-center'> <span className="text-xs font-bold">Type: </span> {type}</p>
    <p className='flex justify-left gap-2 items-center'> <span className="text-xs font-bold">Email: </span> {emailinfo}</p>
    <p className='flex justify-left gap-2 items-center'> <span className="text-xs font-bold">minDonation: </span> {minDonation}</p>
    <p className='flex justify-left gap-2 items-center'> <span className="text-xs font-bold">Description: </span> {description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-neutral w-full">{deadline}</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Donation