import AboutImg from '../assets/about.png'

export default function About(){
    return <section id='contact' className='flex flex-col md:flex-row bg-secondary px-5 items-center justify-center py-20'>
        <div className="flex flex-col justify-center text-center text-white items-center">
            <h1 className='text-2xl md:text-4xl mb-5 font-bold text-center border-b-4 border-[#3E362E] w-[130px]'>Contact</h1>
            <p className='text-lg md:text-xl pb-5'>If you want discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email : </span>heyram334@gmail.com</p>
            <p className='py-2'><span className='font-bold'>Phone : </span>+91 934 -------</p>
            
        </div>
    </section>
}