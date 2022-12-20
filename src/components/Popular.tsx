import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'
import {TbManualGearbox} from 'react-icons/tb'
import {IoPricetagsOutline} from 'react-icons/io5'
import {SiDoordash, SiSpeedtest} from 'react-icons/si'

const Popular = () => {
  return (
    <div className="w-full h-[80vh] flex gap-[3px] mb-5">
      {/* --------------LEFT SECTION----------------- */}
      <div className="bg-white w-2/5 p-20 ">
        <div className=" text-gray-300 flex text-xs gap-3 font-semibold ">
          <p className="text-gray-900">TOP POPULAR</p>
          <p>|</p>
          <p>NEW CARS</p>
          <p>|</p>
          <p>SALE OFF</p>
        </div>

        <div className="mt-16">
          <div className='bg-gray-200 flex gap-5 h-24 p-2 rounded'>
            <div className='w-28 bg-yellow-500 relative overflow-hidden ' >
              <img src={car1} className='absolute scale-150 -top-2 -left-10 ' alt="car" />
            </div>
            <div className='flex flex-col h-full justify-between py-1 '>
              <h6 className='text-sm'>Black Car Sport 2012</h6>
              <p className='text-xs text-zinc-400'>subtitle</p>
              <p className='text-base '>$479.00</p>
            </div>
          </div>
          <div className='bg-white flex gap-5 h-24 p-2 rounded'>
            <div className='w-28 bg-teal-100 relative overflow-hidden ' >
              <img src={car2} className='absolute scale-150  -scale-x-150 bottom-4 -left-10 ' alt="car" />
            </div>
            <div className='flex flex-col h-full justify-between py-1 '>
              <h6 className='text-sm'>Green Car Sport 2020</h6>
              <p className='text-xs text-zinc-400'>subtitle</p>
              <p className='text-base '>$739.00</p>
            </div>
          </div>
          <div className='bg-white flex gap-5 h-24 p-2 rounded'>
            <div className='w-28 bg-orange-200 relative overflow-hidden ' >
              <img src={car3} className='absolute scale-150  -scale-x-150 bottom-4 -left-10 ' alt="car" />
            </div>
            <div className='flex flex-col h-full justify-between py-1 '>
              <h6 className='text-sm'>Red Car Sport 2018</h6>
              <p className='text-xs text-zinc-400'>subtitle</p>
              <p className='text-base '>$699.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* --------------RIGHT SECTION----------------- */}
      <div className="bg-white w-3/5 p-20 flex flex-col justify-between items-center">
        <h3 className='text-xl font-semibold'>Black Car Sport 2012</h3>
        <div className='bg-yellow-500 w-1/2 h-[200px] relative'>
            <img src={car1} alt="car" className='scale-150 absolute -top-[70px]' />
        </div>
        <div className='flex w-full justify-around text-zinc-400 text-sm'>
            <span className='flex items-center gap-2'> <TbManualGearbox /> 5 Gear</span>
            <span className='flex items-center gap-2'> <SiDoordash /> 2 Door</span>
            <span className='flex items-center gap-2'> <SiSpeedtest /> Top Speed</span>
            <span className='flex items-center gap-2'> <IoPricetagsOutline /> price $ <span className='text-red-400 font-semibold'>479.00</span></span>
        </div>
      </div>
    </div>
  );
};

export default Popular;
