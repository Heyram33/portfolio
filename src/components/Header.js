import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const [toggleMenu,setToggleMenu]= useState(false);

    return <header className="flex justify-between px-5 bg-primary py-2 fixed w-full">
        <a className="font-bold text-white text-3xl" href="#">Heyram</a>
        <nav className="hidden md:block text-2xl">
            <ul className="flex text-white">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden text-2xl">
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-6' /></button>
    </header>
}