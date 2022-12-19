import car from '../assets/mission.png'
import { BsArrowRightShort } from "react-icons/bs";


const Introduction = () => {
  return (
    <div className="h-[90vh] py-40 relative flex flex-col items-center justify-center w-full">
      <h1 className="-z-10 absolute font-bold text-[11rem] tracking-[7rem] -left-10 top-32 text-zinc-400 opacity-50">
        TURBO
      </h1>
      <div className="w-[800px]">
        <div className="mt-20 relative w-[700px] h-[350px] p-5 flex bg-white rounded shadow-2xl ">
            <span className="absolute h-[2px] w-24 bg-zinc-400 left-0 top-24 " />
          <div className="w-[400px] h-full flex flex-col justify-between p-5 ">
            <h3 className="text-3xl font-semibold text-zinc-500 ">Our Mission.</h3>
            <p className="text-zinc-400">Lorem ipsum dolor sit amet,  facilis saepe ea consequatur expedita voluptatem facere eveniet culpa! Tenetur natus minus harum error in adipisci ducimus tempore, dicta, eligendi provident reiciendis!</p>
            <p className="text-zinc-400"> <span className="text-zinc-700 font-semibold">Lorem ipsum</span> dolor sit amet.</p>
          </div>
          <div className="w-[300px] h-full bg-yellow-500 relative">
            <img src={car} alt="car" className='scale-150 absolute left-9 bottom-10' />
          </div>
        </div>

        <div className='flex justify-between items-end mt-12'>
          <h4 className='text-gray-800 ml-9 text-3xl'>Top Our Cars.</h4>
          <p className='flex items-center'>
            show all cars
            <BsArrowRightShort />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
