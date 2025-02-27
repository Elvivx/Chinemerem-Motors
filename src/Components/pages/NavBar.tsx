import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <header className=' w-full'>
      <div className='flex justify-between items-center  bg-[#0B0B0D] min-w-[50%] overflow-hidden'>
        <NavLink to='/' className='logo flex flex-col items-center bg-black py-2 text-white px-1 w-[20%] '>
          <div className='w-[100px] '>
            <img src='../../../public/imgs/cmLogo.png' alt='logo' className='w-full h-full object-contain object-center' />
          </div>
          <span className=' tracking-wide textOutline '>CHINEMEREM MOTORS</span>
        </NavLink>
        <nav className='w-[60%]'>
          <ul className='flex items-center justify-evenly text-xl'>
            <NavLink to='/services'>
              <li className='text-white hover:-translate-y-2 cursor-pointer py-4 font-semibold'>
                <span className='border-b-red-500 hover:border-b-white border-b-2'>Services</span>
              </li>
            </NavLink>
            <NavLink to='/invest'>
              <li className='text-white hover:-translate-y-2 cursor-pointer py-4 font-semibold'>
                <span className='border-b-red-500 hover:border-b-white border-b-2'>Invest</span>
              </li>
            </NavLink>
            <NavLink to='/about'>
              <li className='text-white hover:-translate-y-2 cursor-pointer py-4 font-semibold'>
                <span className='border-b-red-500 hover:border-b-white border-b-2'>About</span>
              </li>
            </NavLink>
            <NavLink to='contact'>
              <li className='text-white hover:-translate-y-2 cursor-pointer py-4 font-semibold'>
                <span className='border-b-red-500 hover:border-b-white border-b-2'>Contact</span>
              </li>
            </NavLink>
          </ul>
        </nav>
        <button className='p-3 rounded-xl border-2 border-red-700 text-m font-bold text-white bg-red-500 mr-5'>Join Us Today</button>
      </div>
    </header>
  )
}
export default NavBar
