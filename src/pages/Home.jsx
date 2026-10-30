import { useOutletContext } from "react-router-dom"
import Hero from "../Component/Home/Hero"
import FeaturedProducts from "../Component/Home/FeaturedProducts"

const Home = () => {
  const { searchTerm } = useOutletContext()
  return (
    <>
      <Hero />
      <FeaturedProducts searchTerm={searchTerm} />

    </>
  )
}

export default Home
