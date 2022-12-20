import { BsArrowRightShort } from "react-icons/bs";
import family1 from '../assets/family1.jpg'
import family2 from '../assets/family2.jpg'
import family3 from '../assets/family3.jpg'

const Tips = () => {
  return (
    <div className="w-[800px] mx-auto mt-10 mb-36 ">
        <h3 className="text-3xl my-6 ml-8">Tips & Tricks</h3>
        <div className="flex justify-between">
            <div className="shadow-xl flex flex-col w-[250px] bg-white rounded overflow-hidden ">
                <img src={family1} alt="f" />
                <div className="p-5 flex flex-col gap-3">
                    <p className="text-xs text-gray-400">Lorem, ipsum.</p>
                    <p className="text-sm underline">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-xs text-yellow-400 flex items-center gap-2">continue reading <BsArrowRightShort /></p>
                </div>
            </div>
            <div className="flex flex-col w-[250px] bg-white rounded overflow-hidden ">
                <img src={family2} alt="f" />
                <div className="p-5 flex flex-col gap-3">
                    <p className="text-xs text-gray-400">Lorem, ipsum.</p>
                    <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-xs text-gray-400 flex items-center gap-2">continue reading <BsArrowRightShort /></p>
                </div>
            </div>
            <div className="flex flex-col w-[250px] bg-white rounded overflow-hidden ">
                <img src={family3} alt="f" />
                <div className="p-5 flex flex-col gap-3">
                    <p className="text-xs text-gray-400">Lorem, ipsum.</p>
                    <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-xs text-gray-400 flex items-center gap-2">continue reading <BsArrowRightShort /></p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Tips