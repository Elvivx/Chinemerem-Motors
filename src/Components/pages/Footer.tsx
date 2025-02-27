function Footer() {
  return (
    <footer className='bg-[#1a1a21] p-[50px]'>
      <div className='footer-content'>
        <h2 className='text-2xl font-bold mb-5'>
          <span>CM</span>
          <br />
          <span>CHINEMEREM MOTORS</span>
        </h2>
        <div>
          <div className='flex justify-evenly'>
            <div className=''>
              <h2 className='text-2xl font-bold text-red-500'>Enviable for</h2>
              <div className='flex flex-col gap-3'>
                <a target='_blank' className='' href='https://web.enviabletransport.com/schedule_trip?tab=trip'>
                  Ride share
                </a>
                <a target='_blank' className='' href='https://web.enviabletransport.com/airport_trip'>
                  Airport trips
                </a>
                <a target='_blank' className='' href='https://web.enviabletransport.com/hire_car'>
                  Hire a car
                </a>
                <a target='_blank' className='' href='https://web.enviabletransport.com/hire_driver'>
                  Hire a driver
                </a>
                <a target='_self' className='' href='/invest'>
                  Invest
                </a>
              </div>
            </div>
            <div className=''>
              <h2 className='text-2xl font-bold text-red-500'>Resources</h2>
              <div className='css-2xph3x'>
                <a target='_blank' className='chakra-link css-15oampj' href='mailto:info@enviabletransport.com.ng'>
                  Get a demo
                </a>
              </div>
            </div>
            <div className=''>
              <h2 className='text-2xl font-bold text-red-500'>Company</h2>
              <div className='css-2xph3x'>
                <a target='_self' className='chakra-link css-15oampj' href='/about'>
                  About us
                </a>
                <a target='_blank' className='chakra-link css-15oampj' href='mailto:info@enviabletransport.com.ng'>
                  Contact us
                </a>
              </div>
            </div>
            <div className=''>
              <h2 className='text-2xl font-bold text-red-500'>Terms for</h2>
              <div className='css-2xph3x'>
                <a target='_self' className='chakra-link css-15oampj' href='/legal'>
                  Legal
                </a>
              </div>
            </div>
          </div>
          <div className=''>
            <div className=' flex items-center justify-center gap-5'>
              <a target='_blank' href='https://twitter.com/enviable_trans'>
                <svg width={30} height={30} stroke='red' fill='red' strokeWidth='0' viewBox='0 0 16 16' focusable='false' className='chakra-icon css-167j8ub'>
                  <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'></path>
                </svg>
              </a>
              <a target='_blank' href='https://www.linkedin.com/company/enviabletransport/'>
                <svg width={30} height={30} stroke='red' fill='red' strokeWidth='0' version='1.1' viewBox='0 0 16 16' focusable='false' className='chakra-icon css-167j8ub'>
                  <path d='M6 6h2.767v1.418h0.040c0.385-0.691 1.327-1.418 2.732-1.418 2.921 0 3.461 1.818 3.461 4.183v4.817h-2.885v-4.27c0-1.018-0.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255v4.344h-2.883v-9z'></path>
                  <path d='M1 6h3v9h-3v-9z'></path>
                  <path d='M4 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z'></path>
                </svg>
              </a>
              <a target='_blank' href='https://www.instagram.com/enviable_transport'>
                <svg width={30} height={30} stroke='red' fill='red' strokeWidth='0' viewBox='0 0 448 512' focusable='false' className='chakra-icon css-167j8ub'>
                  <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
