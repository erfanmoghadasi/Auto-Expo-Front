import headerImg from "../assets/family_car.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${headerImg})`,
      }}
      className="w-full h-[95vh] bg-cover bg-bottom relative "
    >
      <div className="backdrop-brightness-[60%] h-full flex gap-12 flex-col items-center justify-center">
        <div className="text-white text-center  ">
          <h2 className="text-4xl font-semibold">Turbo helps you</h2>
          <p className="mt-1 text-lg">
            Rent car to move from local hosts in 190+ countries.
          </p>
        </div>

        <div className="w-[800px] h-12 bg-white rounded shadow-2xl overflow-hidden">
          <ul className="flex w-full h-full ">
            <li className="w-full flex flex-col justify-center pl-5 relative leading-3">
              <h6 className="text-yellow-600 text-sm">Car</h6>
              <p className="text-slate-500 ">lorem</p>
              <IoIosArrowDown className="absolute right-5 bottom-2 text-slate-400 " />
              <span className="bg-slate-200 absolute right-2 top-2 h-7 w-[1px]"></span>
            </li>
            <li className="w-full flex flex-col justify-center pl-5 relative leading-3">
              <h6 className="text-yellow-600 text-sm">Car</h6>
              <p className="text-slate-500 ">lorem</p>
              <IoIosArrowDown className="absolute right-5 bottom-2 text-slate-400 " />
              <span className="bg-slate-200 absolute right-2 top-2 h-7 w-[1px]"></span>
            </li>
            <li className="w-full flex flex-col justify-center pl-5 relative leading-3">
              <h6 className="text-yellow-600 text-sm">Car</h6>
              <p className="text-slate-500 ">lorem</p>
              <IoIosArrowDown className="absolute right-5 bottom-2 text-slate-400 " />
              <span className="bg-slate-200 absolute right-2 top-2 h-7 w-[1px]"></span>
            </li>
            <li className="w-full flex flex-col justify-center pl-5 relative leading-3">
              <h6 className="text-yellow-600 text-sm">Car</h6>
              <p className="text-slate-500 ">lorem</p>
              <IoIosArrowDown className="absolute right-5 bottom-2 text-slate-400 " />
            </li>
            <li className="min-w-[230px]  flex justify-center items-center gap-3 bg-yellow-500 text-white ">
              <button className="text-sm font-semibold">SEARCH</button>
              <BsArrowRightShort className="scale-125 font-semibold" />
            </li>
          </ul>
        </div>

        <div className="w-[500px] justify-between flex mt-16 text-white">
          <div className=" flex flex-col items-center ">
            <h4 className="text-3xl text-gray-200">12,460</h4>
            <p className="text-xs text-gray-300">User Access</p>
          </div>
          <div className=" flex flex-col items-center ">
            <h4 className="text-3xl text-gray-200">8,960</h4>
            <p className="text-xs text-gray-300">Cars</p>
          </div>
          <div className=" flex flex-col items-center ">
            <h4 className="text-3xl text-gray-200">10,360</h4>
            <p className="text-xs text-gray-300">Reviews</p>
          </div>
        </div>

        <div className="bg-neutral-800 flex justify-center h-16 w-full absolute bottom-0 text-gray-300">
          <div className="w-[800px] h-full flex justify-between items-center ">
            <div className="flex items-center h-full">
              <h1 className="text-lg">Turbo.</h1>
            </div>
            <div>
              <ul className="flex text-xs gap-5">
                <li className="flex items-center gap-2 text-yellow-600">
                  <p>HOME</p>
                  <IoIosArrowDown />
                </li>
                <li className="flex items-center gap-2">
                  <p>ULTIMATE</p>
                  <IoIosArrowDown />
                </li>
                <li className="flex items-center gap-2">
                  <p>BLOG</p>
                </li>
                <li className="flex items-center gap-2">
                  <p>RACE</p>
                  <IoIosArrowDown />
                </li>
                <li className="flex items-center gap-2">
                  <p>ELEMENTS</p>
                </li>
              </ul>
            </div>
            <div>
            <ul className="flex text-xs gap-5">
                <li className="flex items-center gap-2 ">
                  <AiOutlineLock />
                  <p>LOGIN</p>
                  <span className="w-[1px] h-5 bg-neutral-600" />
                </li>
                <li className="flex items-center gap-2">
                  <p>ENG</p>
                  <IoIosArrowDown />
                  <span className="w-[1px] h-5 bg-neutral-600" />
                </li>
                <li className="flex items-center gap-2">
                  <p>USD</p>
                  <IoIosArrowDown />
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
