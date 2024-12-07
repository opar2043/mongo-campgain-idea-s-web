import { useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const navigate = useNavigate()
   const {upid} = useParams();
   const userData = useLoaderData();
   const newData = userData?.find((user) => user._id === upid) || [];

//    console.log(newData,'newuser');
//    console.log(newData.title);
 

    const handleUpdate = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const title = e.target.title.value;
        const type = e.target.type.value;
        const description = e.target.description.value;
        const minDonation=e.target.minDonation.value;
        const deadline=e.target.deadline.value;
        const emailinfo = e.target.emailinfo.value;
        const username=e.target.username.value;
    
    
        const userData = {
            username,
            emailinfo,
            title,
            image,
            type,
            description,
            minDonation,
            deadline
        }
    
        fetch(`https://react-sports-server-site.vercel.app/campgain/${upid}`,{
          method: "PATCH",
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log('data added',data);
          if(data.modifiedCount){
            Swal.fire({
                title: 'success!',
                text: 'Updated',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              navigate('/allcampgain')
            }
        })
    
        console.log(userData);
      };


  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-indigo-200 flex items-center justify-center p-8 my-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update Your Campgain
        </h2>
        <hr />
        <form className="space-y-2 text-left mt-8" onSubmit={handleUpdate}>
           Image/Thumbnail
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Thumbnail (URL)
            </label>
            <input
              type="url"
              id="image"
              name="image"
              defaultValue={newData.image}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Campaign Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Campaign Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={newData.title}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter campaign title"
              required
            />
          </div>

          {/* Campaign Type */}
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Campaign Type
            </label>
            <select
              id="type"
              name="type"
              defaultValue={newData.type}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="personal-issue">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative-ideas">Creative Ideas</option>
              <option value="Ai">Ai </option>
              <option value="Digital Project">Digital Project </option>
              <option value="Food Court">Food Court</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={newData.description}
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter campaign description"
              required
            ></textarea>
          </div>

          {/* Minimum Donation Amount */}
          <div>
            <label
              htmlFor="minDonation"
              className="block text-sm font-medium text-gray-700"
            >
              Minimum Donation Amount
            </label>
            <input
              type="number"
              id="minDonation"
              name="minDonation"
              defaultValue={newData.minDonation}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter minimum amount"
              required
            />
          </div>

          {/* Deadline */}
          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              defaultValue={newData.deadline}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* User Email (Read Only) */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User Email
            </label>
            <input
              type="email"
              id="email"
              name="emailinfo"
              
              defaultValue={newData.email}
              className="mt-1 cursor-not-allowed block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 "
              
            />
          </div>

          {/* User Name (Read Only) */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={newData.displayName}
              className="mt-1 cursor-not-allowed block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 "
              
            />
          </div>

          {/* Add Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Campaign Data
            </button>
          </div>
        </form>
      </div> 
    </div>
    // <div>
    //    <h1>update details</h1>
    // </div>
  )
}

export default Update