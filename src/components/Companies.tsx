import logo1 from '../assets/l1.png'
import logo2 from '../assets/l2.png'
import logo3 from '../assets/l3.png'
import logo4 from '../assets/l4.png'
import logo5 from '../assets/l5.png'
import avatar from '../assets/avatar.png'
import {AiFillStar} from 'react-icons/ai'


const Companies = () => {
  return (
    <div className='w-[800px] flex flex-col mx-auto my-5 '>
        <div className='h-36 w-full my-5 flex justify-between items-center'>
            <img className='max-h-36 scale-75' src={logo1} alt="logo" />
            <img className='max-h-36 scale-75' src={logo2} alt="logo" />
            <img className='max-h-36 scale-75' src={logo3} alt="logo" />
            <img className='max-h-36 scale-75' src={logo4} alt="logo" />
            <img className='max-h-36 scale-75' src={logo5} alt="logo" />
        </div>
        <div className='flex flex-col justify-between w-full h-[400px] bg-white rounded text-center p-16 '>
            <h3 className='text-4xl'>What Client Say.</h3>
            <p className='text-sm text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque modi commodi atque! Placeat dignissimos minus eos culpa voluptatibus dolores soluta quibusdam ipsum voluptatem? A tenetur animi nemo vel reiciendis odit non, laborum minus provident inventore eos ipsum molestiae est.</p>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-14 h-14 mb-3' src={avatar} alt="avatar" />
                <div className='w-full flex justify-center items-center'>
                    <span className='text-sm text-zinc-900'>Adam Levine : </span>
                    <span className='flex'>
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                        <AiFillStar className='text-yellow-500' />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Companies