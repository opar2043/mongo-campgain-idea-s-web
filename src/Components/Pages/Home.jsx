import food from '../../assets/food.jpg'
import sports from '../../assets/sports.jpeg'
import bgns from '../../assets/busniess-food.webp'
import aiii from '../../assets//ai.webp'
import Contuct from './Contuct'
import WorkUs from './WorkUs'
const Home = () => {
  return (
        <div className='my-6'>
          <div className="carousel w-full  ">
            {/* image 01==================== */}
  <div id="item1" className="carousel-item w-full">
  <div className="hero min-h-screen">
  <img src={food} alt="" className='w-full bg-cover h-full' />  
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Start A Food Court?</h1>
      <p className="mb-5">
        Make a food court busniess by collaborationg us! Surely you will get a better guidline than any other platfrom!
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
  </div>

  {/* sloder 02 =============== */}

  <div id="item2" className="carousel-item w-full">
    <div className="hero min-h-screen">
  <img src={bgns} alt="" className='w-full h-full' />  
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Lets Make A Home Made Restaurent....</h1>
      <p className="mb-5">
        a Home made food buisness is a good idea for make self development! You will  get a good oppotunity to show your hidden talent . its a good startup too!
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
  </div>

  {/* slider 03 ====================== */}
  <div id="item3" className="carousel-item w-full">
  <div className="hero min-h-screen">
  <img src={sports} alt="" className='w-full h-full' />  
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Wanna Start A sports Shop?</h1>
      <p className="mb-5">
        sports is a very popular and demandable goods in yopung generation. so Why not start a busniess?
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
  </div>
  {/* slider 04 =============== */}
  <div id="item4" className="carousel-item w-full">
  <div className="hero min-h-screen">
  <img src={aiii} alt="" className='w-full h-full' />  
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Build Your Knowladge by AI..</h1>
      <p className="mb-5">
        In digital world AI (Artificial Intilegency) is a good and very strong platfrom to show and make the betterment to grow a socity. lets serve the socity! 
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>

<Contuct></Contuct>
<WorkUs></WorkUs>
        </div>
  )
}

export default Home