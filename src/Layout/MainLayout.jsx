import { useState } from "react"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
    <Header
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    />
    <Outlet context={{searchTerm}}/>
    <Footer/>
      
    </>
  )
}

export default MainLayout
