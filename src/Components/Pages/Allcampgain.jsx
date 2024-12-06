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
  // console.log(data);
  return (
    <div className='my-8'>
      <h2 className='text-center text-2xl font-extrabold'>Here Our All Campgain</h2>

        {/* table */}





       <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      {
        data.map((singleData,idx) =>  <Campgaindata key={idx} setData={setData} singleData={singleData}></Campgaindata>)
      }
      </div> 
    </div>
  )
}

export default Allcampgain