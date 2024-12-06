import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Campgaindata from '../Root/Campgaindata';
import { NavLink } from 'react-router-dom';
import { BiDetail } from 'react-icons/bi';
import { RiDeleteBin5Fill } from "react-icons/ri";
import User from './User';

const Allcampgain = () => {
  const userData = useLoaderData();
  const [data,setData] = useState(userData)
  
  function sortByDonation(){
    const sortData = [...data].sort((a,b) => a.minDonation - b.minDonation);
    setData(sortData)
  }


  return (
    <div className='my-8'>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-3 items-center'>
          <div></div>
      <h2 className='text-center text-2xl font-extrabold py-5'>Here Our All Campgain</h2>
      <div className='text-center'>
      <button className='btn bg-teal-500 text-white' onClick={sortByDonation}>Sort by Donation</button>

      </div>
         </div>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      {
        data.map((singleData,idx) =>  <Campgaindata key={idx} setData={setData} singleData={singleData}></Campgaindata>)
      }
      </div> 
    </div>
  )
}

export default Allcampgain