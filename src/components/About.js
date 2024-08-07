import AboutImg from '../assets/about.png'

export default function About(){
    return <section id='about' className='flex flex-col md:flex-row bg-[#93785B] px-5 items-center justify-center py-5'>
        <div className='w-72 md:w-1/2 mx-5'>
            <img src={AboutImg} />
        </div>
        <div className=" md:w-1/2 flex flex-col justify-center items-center md:items-start mx-5 py-5">
            <h1 className='text-2xl md:text-4xl text-white border-b-4 mb-5  border-[#3E362E] md:w-[180px] font-bold text-center '>About Me</h1>
            <p className='text-white text-lg md:text-xl'>I am a recent B.Sc. Computer Science graduate from Ramakrishna Mission Vivekananda College,  I have a foundational understanding of programming.  I  am eager to secure an entry-level software development role where I can apply and expand my skills, contribute effectively to projects, and advance my professional career.</p>
        </div>
    </section>
}