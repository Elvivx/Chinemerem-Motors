import { useState } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"

function About() {
  const [more, setMore] = useState<boolean>(false)

  const More = () => {
    return (
      <>
        {!more ? (
          <>
            <h1 className='text-2xl font-bold mb-5'>A Word From The CEO</h1>
            <p className='mb-5 w-full'>Read about our team’s commitment to provide everyone on our platform with the technology that can help them move ahead.</p>
          </>
        ) : (
          <>
            <h1 className='text-2xl font-bold mb-5'>A MESSAGE FROM OUR CEO.</h1>
            <p className='mb-5 w-full'>
              Dear potential partners and stakeholders, I hope this letter finds you well. I am reaching out to you on behalf of a visionary leading player in the transportation industry, chinemerem
              motors. As the chief executive officer of our organization, it is my pleasure to extend a warm invitation to you to explore potential investment and partnership opportunities with us ,
              chinemerem motors. At chinemerem motors , we have built a solid reputation for delivering innovative transportation solutions that are sustainable, efficient and reliable. With a focus
              on technological advancement and customer satisfaction, we have positioned ourselves as a key player in the evolving landscape of transportation services in Nigeria . As we continue to
              expand our operations and launch new initiatives, we believe that forming strategic partnerships and securing investment support are crucial steps towards achieving our goals . We are
              keen to collaborating with your ideas and resources. With warm regards Igwe jude chinemerem, CEO, chinemerem motors.
            </p>
          </>
        )}
      </>
    )
  }
  return (
    <>
      <NavBar />
      <section>
        <div className='flex items-center justify-center min-h-[500px] AboutBgImage BgDark'>
          <h2 className='text-red-500 text-6xl font-bold'>About Us</h2>
        </div>

        <div className='text-black w-[1500px] m-auto '>
          <h1 className='text-center text-3xl font-bold my-5'>THE FUTURE OF TRANSPORTATION</h1>
          <p className='text-lg'>
            At chinemerem motors , we aim to be at the forefront of innovation, incorporating cutting-edge technology and sustainable practices to create a more efficient and environmentally friendly
            transportation system. We are visionaries with a passion for transforming the way people and goods are being moved from one place to another.Chinemerem motors , we envision a better
            Nigeria by aiming at being a remedy to a specific job problems. We strive to exceed the Nigerians expectation by offering reliable and efficient transport services that prioritize safety,
            convenience, and environmental stewardship. Becoming the leading transportation provider and connecting people and communities seamlessly and sustainably across Nigeria and beyond is our
            goal. Moving people and goods from point A to point B isn’t just a service we provide, it’s the essence of who we are , our passion and commitment to progress.
          </p>
        </div>

        <div className='ceo bg-black mt-10'>
          <div className='flex gap-10 items-center py-10 w-[1000px]  m-auto'>
            <div className=''>
              <More />
              <button className='py-3 px-6 rounded-xl bg-red-600 font-semibold text-sm text-white hover:bg-red-800' onClick={() => setMore(!more)}>
                Read {!more ? `More` : `Less`}...
              </button>
            </div>
            <div className={`rounded-xl border-2 border-red-500 w-[600px] h-[300px] ${more ? "hidden" : "block"} `}>
              <img src='#' alt='' />
            </div>
          </div>
        </div>

        <div className='w-[1100px] m-auto my-10 text-center'>
          <div className='flex flex-col gap-10'>
            <div className='text-black'>
              <h1 className='text-center text-2xl font-bold'>OUR MISSION</h1>
              <p className='text-lg'>
                Our mission is to create a seamless and comprehensive transportation network that connects people and communities through a variety of modes including public transit and micro-mobility
                options. We will prioritize safety, accessibility, affordability and reliability in all our services, striving to improve the quality of life for our customers and be able to reduce
                the environmental impact of transportation in Nigeria .
              </p>
            </div>
            <div className='text-black'>
              <h1 className='text-center text-2xl font-bold'>OUR VISION</h1>
              <p className='text-lg'>
                Our vision is to revolutionize the transportation industry by providing innovative, efficient and sustainable solutions that empowers people to connect and move freely in a way that is
                safe , convenient, affordable and environmentally friendly. We aim to become the leading transportation company globally, setting new standards for service quality and customer
                satisfaction.
              </p>
            </div>
          </div>

          <div className='rounded-2xl p-4 pb-10 mt-12 bg-[#1a1a21]'>
            <h1 className='text-center text-2xl font-bold'>OUR VALUES</h1>
            <div className='mt-5'>
              <h1 className='text-xl'>EMPOWERMENT STRATEGY</h1>
              <hr className='h-[2px] bg-black my-4' />
              <p className=''>
                We over the years through our micro-mobility options, has served as the last and only hope of the common man /youth interest in transportation business. Due to the deep bite of
                inflation and the decline in the Nigeria’s economy, there has been a major decrease in purchasing power, as we all know, a poor economy may reduce the over all spending power of the
                population, leading to fewer people utilizing the transport business. For this reason, at chinemerem motors, we are set to curb the raising rate of unemployment and competition among
                the Nigerian youth/common man. We are dedicated to getting more interested youths involved in the transport business through our micro-mobility option program with almost zero to no
                financial installment.
              </p>
            </div>
            <div className='mt-5'>
              <h1 className='text-xl'>SUSTAINABILITY</h1>
              <hr className='h-[2px] bg-black my-4' />
              <p className=''>
                Chinememerem motors is committing to becoming a fully inter-state and intra-state transportation organization with over 100 outlets across the Nigerian state , transporting people
                across Nigeria and goods through our logistics unit .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default About
