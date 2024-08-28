import Lenis from 'lenis';
import React, { useEffect } from 'react'

import Logo from "../../assets/images/Logo.svg"
import GoogleIcon from "../../assets/images/icons/googleIcon.svg"
import AppleIcon from "../../assets/images/icons/AppleIcon.svg"
import Hero from "../../assets/images/illustrations/heroImage.png"
import CardsComponent from './components/cards/CardsComponent';

const HomePage = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    useEffect(() => {
        const lenis = new Lenis();
        lenis.on('scroll', (e) => {
            console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className='py-4 flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <img src={Logo} alt="" />
                    <p className='uppercase text-xl'>Piggy Points</p>
                </div>
                <div>
                    <button class="relative px-8 py-3 text-white font-bold rounded-full bg-gradient-to-r from-[#EAC870] via-[#DEA81E] to-[#BF8D10] hover:from-[#BF8D10] hover:to-[#EAC870]">
                        <span class="absolute inset-0 bg-gradient-to-r from-[#EAC870] via-[#DEA81E] to-[#BF8D10] opacity-75 blur-sm rounded-full"></span>
                        <span class="relative z-10">Join Waiting List</span>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-2 items-center mt-20'>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase'>Piggy Points App</p>
                    <p className='text-[60px] helvetica-bold leading-[60px]'>
                        <span className='text-[#A6A6A6] helvetica-bold'> Making </span> Everyday Habits {" "}
                        <span className='text-[#A6A6A6] helvetica-bold'>Fun for </span> Kids.
                    </p>
                    <p className='helvetica-regular text-[16px] leading-[24px]'>Make good habits fun with our point-based system that rewards kids for completing tasks and reaching their goals. Every achievement earns your child points that can be redeemed for games, toys and more!</p>
                    <p className='text-[16px] leading-[24px] uppercase mt-8'>Available Soon On:</p>
                    <div className='flex gap-6'>
                        <button class="relative px-8  text-white font-bold rounded-full bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] hover:from-[#4F8DA1] hover:to-[#9AC7D5] transform hover:scale-105 transition-all duration-300">
                            <span class="absolute inset-0 bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] opacity-75 blur-sm rounded-full"></span>
                            <img src={GoogleIcon} alt="" className='relative z-20' />
                        </button>
                        <button class="relative px-8 py-3.5 text-white font-bold rounded-full bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] hover:from-[#4F8DA1] hover:to-[#9AC7D5] transform hover:scale-105 transition-all duration-300">
                            <span class="absolute inset-0 bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] opacity-75 blur-sm rounded-full"></span>
                            <img src={AppleIcon} alt="" className='relative z-20' />
                        </button>
                    </div>
                </div>
                <div>
                    <img src={Hero} alt="" />
                </div>
            </div>

            <section className='py-64'>
                <div>
                    <p className='uppercase text-center'>Why use PiggyPoints App:</p>
                    <p className='text-[60px] helvetica-bold leading-[60px] text-center w-2/3 mx-auto'>
                        <span className='text-[#A6A6A6] helvetica-bold'> There are</span> 1000 reasons  {" "}
                        <span className='text-[#A6A6A6] helvetica-bold'>why, but only have space for these </span>
                    </p>
                </div>
                <CardsComponent />
            </section>
            <section className='py-32'>

            </section>
        </div>
    )
}

export default HomePage