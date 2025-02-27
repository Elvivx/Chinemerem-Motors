import Footer from "./Footer"
import NavBar from "./NavBar"

function Services() {
  return (
    <>
      <NavBar />
      <section className='text-black '>
        <div className='min-h-[500px] flex items-center justify-center mb-10 ServicesBgImage'>
          <h2 className='text-red-500 text-center text-7xl font-bold  '>Our Services</h2>
        </div>

        <div className='flex flex-col gap-[30px] max-w-[900px]  m-auto pb-[50px]'>
          <div className=' p-5 rounded-lg  text-black '>
            <div className='rounded-xl '>
              <div className='icon p-4 rounded-xl bg-red-50'>
                <svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg' height='50' width='50'>
                  <rect fill='none' height='50' width='50' />
                  <line fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8' x1='16' x2='240' y1='120' y2='120' />
                  <path d='M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8' />
                  <path d='M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8' />
                  <line fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8' x1='64' x2='80' y1='152' y2='152' />
                  <line fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8' x1='176' x2='192' y1='152' y2='152' />
                  <path d='M224,120,194.3,68a7.9,7.9,0,0,0-6.9-4H68.6a7.9,7.9,0,0,0-6.9,4L32,120v64H224Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8' />
                  <line fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8' x1='104' x2='152' y1='32' y2='32' />
                </svg>

                <h2 className='font-bold text-2xl text-red-500'>Ride sharing</h2>
              </div>
            </div>
            <div className='css-1gma6o2'>
              <p className='font-medium text-lg'>Embark on Effortless Journeys with Us.</p>
              <div className='css-2xph3x'>
                <p className='font-medium text-lg'>
                  Experience seamless urban travel with our premier ride-sharing platform. Simply tap to summon your ride, track your driver's progress in real time, and enjoy a comfortable, safe
                  journey—all at an unbeatable price
                </p>
                <p className='font-medium text-lg'>
                  At Enviable Transport, we redefine transportation convenience. Our meticulously maintained vehicles and professional drivers ensure excellence from start to finish. Say goodbye to
                  uncertainty—our intuitive service addresses your needs seamlessly, letting you focus on what matters. Whether it's work commutes, leisure trips, or city exploration, trust Enviable
                  Transport for reliability, comfort, and efficiency. Experience the pinnacle of ride-sharing—request your ride today for unmatched convenience and affordability.
                </p>
              </div>
            </div>
          </div>

          <div className=' p-5 rounded-lg  text-black '>
            <div className='rounded-xl '>
              <div className='icon p-4 rounded-xl bg-red-50'>
                <svg id='Layer_1_1_' version='1.1' viewBox='0 0 96 96' width='50' height='50'>
                  <polygon points='38.833,20 43.434,20 43.624,17 39.333,17 ' />
                  <polygon points='45.883,13 45.756,15 50.244,15 50.117,13 ' />
                  <polygon points='52.376,17 52.566,20 57.167,20 56.667,17 ' />
                  <polygon points='45.44,20 50.56,20 50.37,17 45.63,17 ' />
                  <polygon points='52.123,13 52.25,15 56.333,15 56,13 ' />
                  <polygon points='58,25 57.5,22 52.693,22 52.883,25 ' />
                  <polygon points='38,25 43.117,25 43.307,22 38.5,22 ' />
                  <polygon points='43.877,13 40,13 39.667,15 43.75,15 ' />
                  <circle cx='13' cy='13' r='5' />
                  <rect height='3' width='2' x='12' y='2' />
                  <rect height='3' width='2' x='12' y='21' />
                  <rect height='2' width='3' x='21' y='12' />
                  <rect height='2' width='3' x='2' y='12' />
                  <rect height='2' transform='matrix(0.7071 -0.7071 0.7071 0.7071 1.333 15.7826)' width='3' x='18.218' y='5.282' />
                  <rect height='2' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -12.1025 10.2174)' width='3' x='4.782' y='18.718' />
                  <rect height='3' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -8.1674 19.7178)' width='2' x='18.718' y='18.218' />
                  <rect height='3' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -2.6022 6.2822)' width='2' x='5.282' y='4.782' />
                  <path d='M10,93c0-2.761,2.239-5,5-5s5,2.239,5,5v1h8V56h-4v-4.09c2.837-0.477,5-2.938,5-5.91c-2.972,0-5.433,2.163-5.91,5h-0.18  c-0.477-2.837-2.938-5-5.91-5c0,2.972,2.163,5.433,5,5.91V56H9v-4.09c2.837-0.477,5-2.938,5-5.91c-2.972,0-5.433,2.163-5.91,5H7.91  C7.433,48.163,4.972,46,2,46c0,2.972,2.163,5.433,5,5.91V56H2v38h8V93z M18,60h5v5h-5V60z M18,69h5v5h-5V69z M18,78h5v5h-5V78z   M7,60h5v5H7V60z M7,69h5v5H7V69z M7,78h5v5H7V78z' />
                  <path d='M90,7c0-2.761-2.239-5-5-5s-5,2.239-5,5c0,0.05,0.013,0.096,0.015,0.146C79.689,7.06,79.353,7,79,7c-2.209,0-4,1.791-4,4  c0,2.209,1.791,4,4,4h11c2.209,0,4-1.791,4-4C94,8.791,92.209,7,90,7z' />
                  <path d='M94,55c-2.972,0-5.433,2.163-5.91,5h-0.18c-0.477-2.837-2.938-5-5.91-5c0,2.972,2.163,5.433,5,5.91V65H74v-4.09  c2.837-0.477,5-2.938,5-5.91c-2.972,0-5.433,2.163-5.91,5h-0.18c-0.477-2.837-2.938-5-5.91-5c0,2.972,2.163,5.433,5,5.91V65h-4v29h8  v-1c0-2.761,2.239-5,5-5s5,2.239,5,5v1h8V65h-5v-4.09C91.837,60.433,94,57.972,94,55z M78,83h-5v-5h5V83z M78,74h-5v-5h5V74z M89,83  h-5v-5h5V83z M89,74h-5v-5h5V74z' />
                  <path d='M47,88.91c-2.837-0.477-5-2.938-5-5.91c2.972,0,5.433,2.163,5.91,5h0.18c0.477-2.837,2.938-5,5.91-5  c0,2.972-2.163,5.433-5,5.91V94h14V79H33v15h14V88.91z' />
                  <path d='M49,72.91V77h14V63H33v14h14v-4.09c-2.837-0.477-5-2.938-5-5.91c2.972,0,5.433,2.163,5.91,5h0.18  c0.477-2.837,2.938-5,5.91-5C54,69.972,51.837,72.433,49,72.91z' />
                  <path d='M33,45h14v-4.09c-2.837-0.477-5-2.938-5-5.91c2.972,0,5.433,2.163,5.91,5h0.18c0.477-2.837,2.938-5,5.91-5  c0,2.972-2.163,5.433-5,5.91V45h14V30H49v-5h1.877l-0.19-3h-5.374l-0.19,3H47v5H33V45z' />
                  <path d='M33,61h14v-4.09c-2.837-0.477-5-2.938-5-5.91c2.972,0,5.433,2.163,5.91,5h0.18c0.477-2.837,2.938-5,5.91-5  c0,2.972-2.163,5.433-5,5.91V61h14V47H33V61z' />
                </svg>

                <h2 className='font-bold text-2xl text-red-500'>Inter City</h2>
              </div>
            </div>
            <div className='css-1gma6o2'>
              <div className='css-2xph3x'>
                <p className='font-medium text-lg'>
                  Bridging Distances, Connecting Cities. Travel seamlessly and reliably with us as your trusted transportation partner. Effortlessly traverse from one city to another, bridging
                  distances with ease and comfort. Our commitment is to provide you with a journey that is both seamless and dependable, ensuring you reach your destination without any hassle.
                </p>
                <p className='font-medium text-lg'>
                  At Enviable Transport, we specialize in connecting cities, making travel between them a breeze. Whether you're commuting for work or exploring a new destination, ride with us for a
                  smooth and stress-free experience. Our reliable service ensures that you travel effortlessly, allowing you to focus on enjoying the journey itself. Experience the convenience of
                  seamless travel with Enviable Transport. Let us take you to your destination, connecting cities and bridging distances with every ride.
                </p>
              </div>
            </div>
          </div>

          <div className=' p-5 rounded-lg  text-black '>
            <div className='rounded-xl '>
              <div className='icon p-4 rounded-xl bg-red-50'>
                <svg data-name='Layer 1' height='50' id='Layer_1' viewBox='0 0 32 32' width='50' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M23,17H19.4141L16,13H14l2.5859,4H10.7207L9.5,15H8l1.0569,3.3046A1,1,0,0,0,10.0094,19H23a1,1,0,0,0,0-2Z' transform='translate(0 0)' />
                  <path d='M16,30A14,14,0,1,1,30,16,14.0158,14.0158,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12.0137,12.0137,0,0,0,16,4Z' transform='translate(0 0)' />
                  <rect className='cls-1' data-name='&lt;Transparent Rectangle&gt;' height='50' id='_Transparent_Rectangle_' width='50' fill='none' />
                </svg>

                <h2 className='font-bold text-2xl text-red-500'>Airport Trips</h2>
              </div>
            </div>
            <div className='css-1gma6o2'>
              <p className='font-medium text-lg'>Elevate Your Airport Experience.</p>
              <div className='css-2xph3x'>
                <p className='font-medium text-lg'>
                  Experience stress-free travel to the skies with our premier airport transportation service. Begin your journey with unparalleled ease and reliability as we take care of your
                  transportation to and from the airport. Enjoy a seamless ride, meticulously crafted to ensure you reach your flight punctually, every time. At Enviable Transport, we understand the
                  importance of a smooth airport transfer. That's why we prioritize reliability and efficiency, guaranteeing you a hassle-free journey from start to finish. With our dedicated service,
                  you can rest assured that your airport transportation needs are in capable hands Say goodbye to travel anxieties and delays. Trust Enviable Transport to provide you with a seamless
                  ride, allowing you to embark on your journey with peace of mind. Whether you're heading off on a business trip or a well-deserved vacation, let us take care of your airport
                  transportation needs, ensuring you reach your destination on time, every time.
                </p>
              </div>
            </div>
          </div>

          <div className=' p-5 rounded-lg  text-black '>
            <div className='rounded-xl '>
              <div className='icon p-4 rounded-xl bg-red-50'>
                <svg version='1.1' viewBox='0 0 61.04 55.17' width={50} height={50}>
                  <g id='Layer_2' />
                  <g id='Layer_1' />
                  <g id='Layer_3'>
                    <g>
                      <path d='M30.52,24.89c6.86,0,12.44-5.58,12.44-12.44S37.38,0,30.52,0S18.08,5.58,18.08,12.44S23.66,24.89,30.52,24.89z M30.52,1    c6.31,0,11.44,5.13,11.44,11.44s-5.13,11.44-11.44,11.44s-11.44-5.13-11.44-11.44S24.21,1,30.52,1z' />
                      <path d='M57.08,40.34h-3.17c-4.97-8.09-13.9-13.1-23.39-13.1S12.1,32.25,7.13,40.34H3.96C1.78,40.34,0,42.12,0,44.3v4.81    c0,2.19,1.78,3.96,3.96,3.96h8.19c1.01,0,1.83-0.82,1.83-1.83v-9.08c0-1.01-0.82-1.83-1.83-1.83H8.32c0.93-1.44,2-2.77,3.17-3.99    l9.72,9.72c-0.71,0.78-1.34,1.65-1.86,2.61H14.7v2.37c0,1.52-1.24,2.75-2.75,2.75H4.73v1.37h51.59V53.8h-7.22    c-1.52,0-2.75-1.24-2.75-2.75v-2.37h-4.65c-0.52-0.96-1.14-1.83-1.86-2.61l9.72-9.72c1.18,1.22,2.24,2.55,3.17,3.99h-3.83    c-1.01,0-1.83,0.82-1.83,1.83v9.08c0,1.01,0.82,1.83,1.83,1.83h8.19c2.19,0,3.96-1.78,3.96-3.96V44.3    C61.04,42.12,59.27,40.34,57.08,40.34z M12.98,42.16v1.67h-6.7v1h6.7v3.36h-6.7v1h6.7v2.04c0,0.46-0.37,0.83-0.83,0.83H3.96    C2.33,52.07,1,50.74,1,49.11V44.3c0-1.63,1.33-2.96,2.96-2.96h8.19C12.6,41.34,12.98,41.71,12.98,42.16z M48.84,35.64l-9.72,9.72    c-2.3-2.14-5.35-3.37-8.61-3.37c-3.26,0-6.31,1.23-8.61,3.37l-9.72-9.72c4.87-4.67,11.45-7.4,18.32-7.4S43.97,30.97,48.84,35.64z     M41.08,49.67h4.26v1.37c0,1.3,0.67,2.45,1.68,3.12H14.03c1.01-0.67,1.68-1.82,1.68-3.12v-1.37h4.26l0.14-0.27    c2.01-3.96,6-6.42,10.42-6.42s8.41,2.46,10.42,6.42L41.08,49.67z M60.04,49.11c0,1.63-1.33,2.96-2.96,2.96h-8.19    c-0.46,0-0.83-0.37-0.83-0.83V49.2h6.7v-1h-6.7v-3.36h6.7v-1h-6.7v-1.67c0-0.46,0.37-0.83,0.83-0.83h8.19    c1.63,0,2.96,1.33,2.96,2.96V49.11z' />
                      <path d='M55.2,39.38l0.15,0.24h1.48V32.8l-0.21-0.15c-0.56-0.41-1.21-0.62-1.89-0.62h-0.18c-1.38,0-2.6,0.88-3.04,2.2l-0.1,0.29    l0.21,0.22C52.96,36.15,54.17,37.72,55.2,39.38z M54.55,33.03h0.18c0.39,0,0.76,0.1,1.1,0.3v5.17c-0.96-1.5-2.06-2.91-3.27-4.22    C52.93,33.52,53.7,33.03,54.55,33.03z' />
                      <path d='M5.84,39.38c1.03-1.66,2.24-3.22,3.59-4.65l0.21-0.22l-0.1-0.29c-0.44-1.31-1.67-2.2-3.04-2.2H6.31    c-0.68,0-1.33,0.21-1.89,0.62L4.22,32.8v6.81H5.7L5.84,39.38z M5.22,33.32c0.34-0.2,0.71-0.3,1.1-0.3H6.5    c0.85,0,1.62,0.49,1.99,1.25C7.27,35.58,6.17,37,5.22,38.5V33.32z' />
                    </g>
                  </g>
                </svg>

                <h2 className='font-bold text-2xl text-red-500'>Hire Driver / Car</h2>
              </div>
            </div>
            <div className='css-1gma6o2'>
              <p className='font-medium text-lg'>Elevate Your Special Occasions with Luxury Transportation.</p>
              <div className='css-2xph3x'>
                <p className='font-medium text-lg'>
                  Indulge in the luxury of professional chauffeur services or the rental of elegant vehicles for your next special event. Whether it's a wedding, anniversary, or any cherished
                  occasion, enhance your experience with our premium transportation services. Our expert drivers are dedicated to ensuring a smooth and stylish journey, allowing you to relax and focus
                  on creating unforgettable memories. At Enviable Transport, we specialise in providing unparalleled luxury transportation for your most important events. Choose from our meticulously
                  maintained fleet of vehicles, each offering comfort, sophistication, and unmatched elegance. From sleek sedans to spacious SUVs, we have the perfect vehicle to complement your style
                  and requirements. Experience the ultimate in luxury and convenience with Enviable Transport. Let us elevate your special occasions with our premium transportation services, ensuring
                  every moment is unforgettable and every journey is extraordinary.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-6 justify-center mb-10'>
          <div className='bg-red-500 text-white rounded-xl w-[400px]  p-5'>
            <h1 className='text-2xl font-bold mb-6'>Hire Purchase</h1>
            <p>We give you ownership of a tricycle or car, with low deposit/instalment till completion of the hire purchase amount</p>
          </div>

          <div className='bg-red-500 text-white rounded-xl w-[400px]  p-5'>
            <h1 className='text-2xl font-bold mb-6'>Airport Drop / Pick-Up</h1>
            <p>We provide premium transportation for airport drops and pick-ups with our executive cars and well groomed drivers</p>
          </div>
          <div className='card bg-red-500 text-white rounded-xl w-[400px]  p-5'>
            <h1 className='text-2xl font-bold mb-6'>Special / Interstate Movement within Nigeria</h1>
            <p>Our executive and premium vehicles are available and affordable for movement within Nigeria</p>
          </div>
          <div className='bg-red-500 text-white rounded-xl w-[400px]  p-5'>
            <h1 className='text-2xl font-bold mb-6'>Tricycle/Cars Investment/Management</h1>
            <p>We are a reputable vehicle management company. We are responsible for maintenance and every risk associated with management of your vehicles while you get paid</p>
          </div>
          <div className='bg-red-500 text-white rounded-xl w-[400px]  p-5'>
            <h1 className='text-2xl font-bold mb-6'>Car Rentals/Hire</h1>
            <p>Our air-conditioned fleet of cars is very comfortable for ride hailing services. Movements have been made easy with our Enviable App on the Apple store and Android play store</p>
          </div>
          <div className='bg-red-500 text-white rounded-xl w-[400px]  p-5'>
            <h1 className='text-2xl font-bold mb-6'>{`Tricycle (Keke) Spare Part Sales`}</h1>
            <p>Our range of services includes the selling of durable and original tricycles (keke) parts and tricycles at affordable rates</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Services
