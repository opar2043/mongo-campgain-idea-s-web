import { useContext } from "react"
import { AuthContex } from "../Provider/AuthProvider"
import Donation from "./Donation";


const Mydonation = () => {
    const {donate,setDonate}= useContext(AuthContex) || {}
    // console.log(donate);
  return (
    <div className="md:py-8 p-4">
         <h2 className="text-center text-2xl font-extrabold my-3">My donation</h2> 

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {
                    donate.map(det=><Donation key={det._id} det={det}></Donation>)
                }
          </div>
            
                
      
         
    </div>
  )
}

export default Mydonation