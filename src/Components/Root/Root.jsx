import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"



const Root = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white bg-white">
    <Header />
   
  
    <div className="w-11/12 mx-auto">
      <Outlet />
    </div>
    <Footer />
  </div>
  )
}

export default Root