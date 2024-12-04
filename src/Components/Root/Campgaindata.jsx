
const Campgaindata = ({singleData}) => {
    const {deadline,description,emailinfo,image,minDonation,title,username,type} = singleData;
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
    <div className="card-actions ">
      <button className="btn btn-outline w-full">Show Details</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Campgaindata