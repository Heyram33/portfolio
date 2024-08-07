import Heroimg from '../assets/Hero.png'
import { FaLinkedin} from "react-icons/fa";

export default function Hero(){

    return <section id='hero' className='flex flex-col md:flex-row p-5 py-[120px] bg-secondary justify-center items-center'>
        <div className=' md:w-1/2 flex-col'>
        <h1 className='text-white text-6xl font-hero-font'>
        Hi, <br /> Im Heyram
        <br /><p className='text-4xl'>Im a Fresher</p>
        </h1>
        <div className=" text-3xl py-10 text-blue-500">
            <a href="https://www.linkedin.com/in/heyram-m-232554254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='hover:text-white' /></a>
        </div>
        </div>
        <img className='w-72 md:w-1/3' src={Heroimg} alt="" />
    </section>
}