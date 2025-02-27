import { BrowserRouter, Route, Routes } from "react-router-dom"
import Services from "../pages/Services"
import Home from "../pages/Home"
import Invest from "../pages/Invest"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/invest' element={<Invest />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
