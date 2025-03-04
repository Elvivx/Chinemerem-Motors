import Footer from "./Footer"
import NavBar from "./NavBar"

function Invest() {
  return (
    <section>
      <NavBar />
      <div className='flex items-center justify-center min-h-[500px] InvestBgImage BgDark'>
        <h2 className='text-red-500 text-6xl font-bold'>Invest With Us</h2>
      </div>

      <div className='text-black text-center my-20'>
        <h1 className='font-bold text-2xl'>
          Discover Lucrative Investment <br /> And Grow With Us
        </h1>
        <p>Grow your wealth with strategic investments. Join us in creating a prosperous future with high-yield opportunities tailored for you.</p>
      </div>

      <div className='flex flex-wrap gap-10 max-w-[1300px] m-auto my-12 max-sm:p-4'>
        <div className='w-full bg-[#1a1a21] p-5 rounded-xl flex gap-5 max-sm:flex-col'>
          <div className='border-2 border-red-400 w-[100%] h-[300px] rounded-lg overflow-hidden darken '>
            <img src='../../public/imgs/sedan.jpg' alt='#' className='object-cover object-center w-full h-full' />
          </div>
          <div className=' flex flex-col w-[100%]'>
            <h1 className='font-bold text-4xl my-5 max-sm:text-2xl'>Car Purchase</h1>
            <p className='text-xl max-sm:text-lg'>
              {" "}
              Explore our premium selection of vehicles at unbeatable prices. Drive home your dream car with flexible financing options and hassle-free purchases.
            </p>
            <button className='p-3 rounded-lg font-bold text-black bg-white w-full mt-auto max-sm:mt-5'>Get Started</button>
          </div>
        </div>

        <div className='w-full bg-[#1a1a21] p-5 rounded-xl flex gap-5 max-sm:flex-col'>
          <div className='border-2 border-red-400 w-full h-[300px] rounded-lg overflow-hidden order-2  darken '>
            <img src='../../../public/imgs/costa.jpg' alt='#' className='object-cover object-center w-full h-full' />
          </div>
          <div className=' flex flex-col  w-[100%] max-sm:order-3'>
            <h1 className='font-bold text-4xl my-5 max-sm:text-2xl '>Bus Purchase</h1>
            <p className='text-xl max-sm:text-lg'>
              Enjoy competitive pricing, flexible financing options, and expert guidance throughout the buying process.Browse our collection and make a smart investment today!
            </p>
            <button className='p-3 rounded-lg font-bold text-black bg-white w-full mt-auto max-sm:mt-5'>Get Started</button>
          </div>
        </div>

        <div className='w-full bg-[#1a1a21] p-5 rounded-xl flex gap-5 max-sm:flex-col'>
          <div className='border-2 border-red-400 w-full h-[300px] rounded-lg overflow-hidden darken '>
            <img src='../../../public/imgs/kekes.jpg' alt='#' className='object-cover object-center w-full h-full' />
          </div>
          <div className=' flex flex-col w-[100%]'>
            <h1 className='font-bold text-4xl my-5 max-sm:text-2xl'>Tricycle Purchase</h1>
            <p className='text-xl max-sm:text-lg'> Affordable, durable, and fuel-efficient—perfect for personal or business use. Get yours now and start riding towards success!</p>
            <button className='p-3 rounded-lg font-bold text-black bg-white w-full mt-auto max-sm:mt-5'>Get Started</button>
          </div>
        </div>
      </div>

      <div className='text-black text-center max-w-[1000px] m-auto p-4'>
        <h1 className='text-2xl font-bold'>Why Invest With Us</h1>
        <p className=''>
          Invest in Vehicle Ownership and Reap Returns: Join us in investment and enjoy lucrative ROI. Invest in a vehicle with us and unlock the potential for substantial returns on your investment
          and unlock the potential for substantial returns on your investment.
        </p>
        <button className='rounded-full py-4 px-8 font-bold text-xl bg-red-500 my-6 text-white'>Book a call with Us</button>
      </div>
      <Footer />
    </section>
  )
}
export default Invest
