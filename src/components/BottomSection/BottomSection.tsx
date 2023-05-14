import {FiArrowRight} from 'react-icons/fi'
import cycle from '../../assets/cycle.png';
import "./BottomSection.css"

function BottomSection() {
    const largeScreen=window.innerWidth>900;
    console.log(largeScreen);
    
    return (
        <div className="grid grid-cols-12 pt-10 lg:pt-0 place-items-center px-[5%]">
            <div className="col-span-12 md:text-center lg:text-start lg:col-span-4 space-y-2">
                <h1 className='text-primary font-merienda text-2xl md:text-5xl'>Explore your favourite city’s food.</h1>
                <p className='tex-sm'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>
                <div className="text-center pt-4">
                <button type="button" title="Start buying" className=" flex md:justify-center mx-auto lg:m-0 items-center py-3 px-6 rounded-full text-center transition bg-primary text-white active:from-yellow-400 md:px-12">
                    <span className=" text-yellow-900 font-semibold md:block">
                        Explore
                    </span>
                    <span className='mr-2'><FiArrowRight/></span>

                </button>
                </div>
            </div>
            <div  className="col-span-12 lg:col-span-7">
            <div className={`bg-[url(https://i.ibb.co/h172xQG/image2.png)] `}>

                <img className={`${largeScreen?"largeScreenMoving":"cycleMoving pt-44 md:pt-0"}`} src={cycle} alt="" />
                </div>
            </div>
            {/* {largeScreen&&<div className="col-span-0 lg:col-span-1"></div>} */}
        </div>
    )
}
// ${largeScreen?"largeScreenMoving":"cycleMoving"}
export default BottomSection;