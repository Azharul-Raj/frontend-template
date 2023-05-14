import "./TopSection.css"

import {FiSearch} from 'react-icons/fi'
import dish from '../../assets/image 1.png';
import smallDish from '../../assets/NicePng_plate-of-food-png_546030 1.png'
import leaf from '../../assets/—Pngtree—hand-painted noise green leaf element_4054582 1.png'
import check from '../../assets/Vector.png'

function TopSection() {
  return (
    <div className="relative bg-[#6B9142]/10">
        <div className="container m-auto px-6 md:px-12 lg:px-7">
            <div className="flex items-center flex-wrap px-2 md:px-0">
                <div className="relative lg:w-6/12 md:py-24 xl:py-32">
                    <div className="pt-40">
                        <div className="absolute top-8 -left-24 md:top-8 md:-left-44">
                            <img  className='leftMove h-44 w-full md:w-[90%] md:h-full lg:w-full' src={leaf} alt="" />
                        </div>
                    <h1 className="font-bold text-4xl text-primary font-merienda md:text-6xl lg:w-10/12">Order food online from your favourite local restaurants.</h1>
                    </div>
                    <div className="pt-10">
                        <p className='text-secondary text-[24px] font-[600]'>Freshly made food delivered to your door.</p>
                    </div>
                    <form action="" className="w-full mt-12">
                        <div className="relative flex p-1 rounded-full bg-transparent dark:border-gray-600 border border-secondary shadow-md md:p-0">
                            <div id="categories" className=" animate-pulse p-3 m-2 bg-yellow rounded-full bg-transparent relative md:p-4 md:flex  items-center w-12">
                                
                                
                                    
                                {/* </div> */}
                            </div>
                            <input placeholder="Enter your location" className="w-full p-4 rounded-full outline-none bg-transparent text-gray-800 dark:placeholder-disable" type="text"/>
                            <button type="button" title="Start buying" className="ml-auto flex items-center py-3 px-6 rounded-full text-center transition bg-primary text-white active:from-yellow-400 md:px-12">
                                <span className='mr-2'><FiSearch/></span>
                                <span className="hidden text-yellow-900 font-semibold md:block">
                                    Search
                                </span>
                               
                            </button>
                        </div>
                    </form>
                   
                </div>
                {/* image section */}
                <div className="ml-auto mt-16 md:mb-10 relative  lg:-mb-56 lg:w-6/12">
                    {/* small dish */}
                    
                <div className="absolute top-0 -left-10 md:-top-0 md:-left-24">
                            <img className='smallDishAnimate h-32 md:h-full md:w-full' src={smallDish} alt="" />
                        </div>
                        {/* text section */}
                        <div className="absolute animate-pulse bg-white bg-opacity-40 z-10 bg-transparent backdrop-blur-xl -top-10 left-24 md:-top-20 md:left-44 rounded-lg py-2 px-5 md:py-[18px] md:px-[32px]">
                            <div className="flex items-center">
                                <img className="md:h-full h-6 md:w-[90%]" src={check} alt="" />
                                <span className="text-yellow  font-bold ml-4 text-2xl md:text-[40px]">200k+</span>                                
                            </div>
                            <span className="text-secondary text-md md:text-[21px] font-semibold">People Delivered</span>
                        </div>
                <div className="absolute -top-10 -right-5 md:-top-32 md:right-0">
                            <img className='rightMove h-44 w-[70%] md:h-full md:w-[90%] lg:w-full' src={leaf} alt="" />
                        </div>
                    <img src={dish} className="relative w-[90%] largeDishAnimate h-auto md:h-full md:[50%] lg:w-[90%]" alt="food illustration" loading="lazy" width="100" height="450"/>
                </div>
            </div>
        </div>
    </div>

  )
}

export default TopSection;