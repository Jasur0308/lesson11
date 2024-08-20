import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import RouteController from "./routes/RouteController"

function App() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])
  
  return (
    <>
      <RouteController/>
    </>
  )
}

export default App
