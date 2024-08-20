import { Routes, Route } from "react-router-dom"
import Blog from "./blog/Blog"
import Details from "./details/Details"
import Details2 from "./details/Details2"
import Details3 from "./details/Details3"

const RouteController = () => {
  return (
    <Routes>
        <Route path="/" element={<Blog/>}/>
        <Route path="/details/1" element={<Details/>}/>
        <Route path="/details/2" element={<Details2/>}/>
        <Route path="/details/3" element={<Details3/>}/>
    </Routes>
  )
}

export default RouteController