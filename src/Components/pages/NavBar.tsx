import { useState } from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
  const [nav, setNav] = useState<boolean>(false)
  return (
    <header className=' w-full'>
      <div className='flex justify-between items-center  bg-[#0B0B0D] min-w-[50%]  max-sm:relative'>
        <NavLink to='/' className='Logo flex flex-col items-center bg-black py-2 text-white px-1 w-[20%] min-w-fit '>
          <div className=' w-[100px] '>
            <img src='../../../public/imgs/cmLogo.png' alt='logo' className='w-full h-full object-contain object-center' />
          </div>
          <span className=' LogoText tracking-wide textOutline'>CHINEMEREM MOTORS</span>
        </NavLink>
        <nav
          className={`w-[100%] flex justify-between items-center
            max-sm:absolute max-sm:top-20 max-sm:flex-col max-sm:bg-[#0B0B0D] max-sm:rounded-xl  max-sm:overflow-hidden ${nav ? "max-sm:h-[272px] max-sm:p-5 " : "max-sm:h-0"}
          `}>
          <ul className='flex items-center justify-evenly text-xl w-full max-sm:flex-col'>
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
            {/* <NavLink to='contact'>
              <li className='text-white hover:-translate-y-2 cursor-pointer py-4 font-semibold'>
                <span className='border-b-red-500 hover:border-b-white border-b-2'>Contact</span>
              </li>
            </NavLink> */}
          </ul>
          <button className='p-3 rounded-xl border-2 border-red-700 text-m font-bold text-white bg-red-600 mr-5 min-w-[140px] ml-6'>Join Us Today</button>
        </nav>
        <div className='hidden max-sm:block mr-4 border-2' onClick={() => setNav(!nav)}>
          <svg fill='none' height='34' viewBox='0 0 24 24' width='34' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H12Z' fill='currentColor' />
            <path d='M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z' fill='currentColor' />
            <path d='M3 18C3 17.4477 3.44772 17 4 17H12C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19H4C3.44772 19 3 18.5523 3 18Z' fill='currentColor' />
          </svg>
        </div>
      </div>
    </header>
  )
}
export default NavBar
