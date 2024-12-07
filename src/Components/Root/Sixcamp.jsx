import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Campgain from "./Campgain";
import Campgaindata from "./Campgaindata";

const Sixcamp = () => {
  const userData = useLoaderData();
    
  
  // Initialize state with a safe fallback
  const [data, setData] = useState([]);
  console.log(data);

  // Update state only if `userData` changes
  useEffect(() => {
    if (userData && Array.isArray(userData)) {
      setData(userData);
    } else {
      setData([]); // Ensure data is always an array
    }
  }, [userData]);

  return (

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
  {data.length > 0 ? (
    data.map((singleData) => (
      <Campgaindata
        key={singleData.id} // Use a unique identifier
        setData={setData}
        singleData={singleData}
      />
    ))
  ) : (
    <p>No campaigns available.</p>
  )}
    </div>
  );
};

export default Sixcamp;
