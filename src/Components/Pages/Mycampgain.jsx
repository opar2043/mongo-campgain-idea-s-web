import React, { useContext, useEffect, useState } from 'react'
import { AuthContex } from '../Provider/AuthProvider'
import { useLoaderData } from 'react-router-dom';
import Campgaindata from '../Root/Campgaindata';
import User from './User';

const Mycampgain = () => {
  const { user } = useContext(AuthContex); // Get the logged-in user
  const emailData = useLoaderData(); // Load campaign data
  const [data, setData] = useState([]);

  // Filter data based on the user's email
  useEffect(() => {
    if (emailData && user?.email) {
      const filteredData = emailData.filter(d => d.emailinfo === user.email);
      console.log(filteredData);
      setData(filteredData);
    }
  }, [emailData, user])
  
  return (
    <div className='my-14'>

     <h2 className='text-center text-3xl font-bold p-4'>My Added Campgain Data ..........</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-8'>   
      {
        data.map(fil => <User key={fil._id} fil={fil}></User>)
      }
    </div>
    </div>
  )
}

export default Mycampgain