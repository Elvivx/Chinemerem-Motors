import Footer from "./Footer"
import NavBar from "./NavBar"
// import
function Invest() {
  return (
    <section>
      <NavBar />
      <div className='flex items-center justify-center min-h-[500px] InvestBgImage'>
        <h2 className='text-red-500 text-6xl font-bold'>Invest With Us</h2>
      </div>
      <div className='text-black text-center my-20'>
        <h1 className='font-bold text-2xl'>
          Discover Lucrative Investment <br /> And Grow With Us
        </h1>
        <p>Grow your wealth with strategic investments. Join us in creating a prosperous future with high-yield opportunities tailored for you.</p>
      </div>
      <div className='flex flex-wrap gap-5 w-[1000px] m-auto my-12'>
        <div className='w-[300px] bg-red-500 p-5 rounded-xl flex flex-col'>
          <div className='border-2 border-red-400 w-full h-[200px]'>
            <img src='../../public/imgs/sedan.jpg' alt='#' className='object-cover object-center w-full h-full' />
          </div>
          <h1 className='font-bold text-2xl my-5'>Car Purchase</h1>
          <p> Explore our premium selection of vehicles at unbeatable prices. Drive home your dream car with flexible financing options and hassle-free purchases.</p>
          <button className='p-3 rounded-lg font-bold text-black bg-white w-full mt-auto'>Get Started</button>
        </div>

        <div className='w-[300px] bg-red-500 p-5 rounded-xl'>
          <div className='border-2 border-red-400 w-full h-[200px]'>
            <img src='#' alt='#' className='object-cover object-center w-full h-full' />
          </div>
          <h1 className='font-bold text-2xl my-5'>Bus Purchase</h1>
          <p>
            Enjoy competitive pricing, flexible financing options, and expert guidance throughout the buying process. Take the next step in your transport journey—browse our collection and make a
            smart investment today!
          </p>
          <button className='p-3 rounded-lg font-bold text-black bg-white w-full mt-5'>Get Started</button>
        </div>

        <div className='w-[300px] bg-red-500 p-5 rounded-xl flex flex-col'>
          <div className='border-2 border-red-400 w-full h-[200px]'>
            <img src='../../../public/imgs/keke.jpg' alt='#' className='object-cover object-center w-full h-full' />
          </div>
          <h1 className='font-bold text-2xl my-5'>Tricycle Purchase</h1>
          <p> Affordable, durable, and fuel-efficient—perfect for personal or business use. Get yours now and start riding towards success!</p>
          <button className='p-3 rounded-lg font-bold text-black bg-white w-full mt-auto'>Get Started</button>
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default Invest
