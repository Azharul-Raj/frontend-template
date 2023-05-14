
import {FiChevronDown} from 'react-icons/fi'
import {HiShoppingCart} from 'react-icons/hi'

function Nav() {
  return (
    <nav className="fixed z-10 backdrop-blur-sm w-full bg-transparent border-b py-2 md:absolute md:bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden"/>
                <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
                    <a href="#" aria-label="logo" className="flex space-x-2 items-center">
                        <span className="text-2xl font-bold font-merienda text-[#396C03]">FoodTime</span>
                    </a>

                    <div className="flex items-center lg:hidden max-h-10">
                        <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative w-10 h-auto p-2">
                            <div id="line"
                                className="m-auto h-0.5 w-6 rounded bg-primary transition duration-300"></div>
                            <div id="line2"
                                className="m-auto mt-2 h-0.5 w-6 rounded bg-primary transition duration-300">
                            </div>
                        </label>
                    </div>
                </div>

                <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white  lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12">
                    <div className="text-gray-600 text-center lg:pr-4 w-full">
                        <ul  className="tracking-wide font-medium text-white  text-sm 
                        flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
                            <li>
                                <a href="#"  className="block md:px-4 font-poppins transition text-gray-800">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block md:px-4 transition text-gray-800">
                                    <span>Blog</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block md:px-4 transition text-gray-800">
                                    <span>About Us</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block md:px-4 transition text-gray-800">
                                    <span className='flex justify-center items-center'>En <FiChevronDown/></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-[30px] flex items-center min-w-max space-y-2 
                    border-yellow-200 lg:space-y-0 sm:w-max ">                        
                        <button type="button" title="Start buying" className="w-full py-3 px-7 text-center rounded-full transition bg-[#396C03] sm:w-max">
                            <span className="block text-white font-normal text-sm">
                                Login
                            </span>
                        </button>
                        <button type="button" title="Start buying" className="w-full relative p-2 ml-4 text-center rounded-full transition bg-[#396C03] ">
                            <span className="block text-white font-normal text-sm">
                                <HiShoppingCart size={25}/>
                            </span>
                            <div className="absolute animate-pulse duration-[5s] px-2 -top-2 -right-2 rounded-full bg-[#FF8B00]">
                                <span className='text-white text-sm'>2</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav;