import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


const Root = () => {
  return (
    <div>
        <Header></Header>
        <div  className="w-11/12 mx-auto">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Root