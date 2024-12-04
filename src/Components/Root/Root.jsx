import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


const Root = () => {
  return (
    <div className="w-full">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root