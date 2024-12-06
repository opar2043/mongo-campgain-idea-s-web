import { NavLink } from "react-router-dom";

const User = ({ fil }) => {
  const {
    deadline,
    description,
    emailinfo,
    image,
    minDonation,
    title,
    username,
    type,
    _id,
  } = fil;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <figure className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Mr. {username}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Title:</span> {title}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Email:</span> {emailinfo}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Minimum Donation:</span> ${minDonation}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Type:</span> {type}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Deadline:</span> {deadline}
        </p>
        <div className="mt-4 flex justify-end">
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-blue-600 transition-colors">
            View More
          </button> */}
           <NavLink to={`/allcampgain/${_id}`}>
       <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-blue-600 transition-colors" >  Details </button>
       </NavLink>
        </div>
      </div>
    </div>
  );
};

export default User;
