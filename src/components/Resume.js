import ResumePng from '../assets/Resume.png'
import Resume from '../assets/resume.pdf'

export default function About(){
    return <section id='resume' className='flex flex-col md:flex-row bg-[#AC8968] px-10 items-center justify-center py-[120px]'>
        <div className='w-72 md:w-1/3 mx-24 '>
            <img src={ResumePng} />
        </div>
        <div className=" md:w-1/2 flex flex-col justify-center items-center md:items-start mx-5 py-5">
            <h1 className='text-2xl md:text-4xl text-white border-b-4 border-[#3E362E] mb-5 w-[130px] font-bold text-center '>Resume</h1>
            <div className="md:flex text-center">
            <p className='text-white text-lg md:text-xl text-center md:text-start mb-5 md:mb-0'>You can view my resume </p>
            <a className='btn' href={Resume} download>Download</a>
            </div>
        </div>
    </section>
}