import Lenis from 'lenis';
import React, { useEffect } from 'react'

import Logo from "../../assets/images/Logo.svg"
import GoogleIcon from "../../assets/images/icons/googleIcon.svg"
import AppleIcon from "../../assets/images/icons/AppleIcon.svg"
import Hero from "../../assets/images/illustrations/heroImage.png"
import CardsComponent from './components/cards/CardsComponent';

import Bento1 from "../../assets/images/illustrations/Bento1.png"
import Bento2 from "../../assets/images/illustrations/Bento2.png"

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
                    <button class="relative px-8 py-3 text-white font-bold rounded-full bg-gradient-to-r from-[#EAC870] via-[#DEA81E] to-[#BF8D10] hover:from-[#BF8D10] hover:to-[#EAC870] transform hover:scale-105 transition-all duration-300">
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
                    <div className='flex gap-3'>
                        <button class="relative px-8 text-white font-bold rounded-full bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] hover:from-[#4F8DA1] hover:to-[#9AC7D5] transform hover:scale-105 transition-all duration-300">
                            <span class="absolute inset-0 bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] opacity-75 blur-sm rounded-full"></span>
                            <img src={GoogleIcon} alt="" className='relative z-20 w-32' />
                        </button>
                        <button class="relative px-8 py-3.5 text-white font-bold rounded-full bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] hover:from-[#4F8DA1] hover:to-[#9AC7D5] transform hover:scale-105 transition-all duration-300">
                            <span class="absolute inset-0 bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] opacity-75 blur-sm rounded-full"></span>
                            <img src={AppleIcon} alt="" className='relative z-20 w-28' />
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
            <section className='pb-32'>
                <p className='text-[60px] helvetica-bold leading-[60px] w-2/3'>
                    <span className='text-[#A6A6A6] helvetica-bold'> Our Main </span> Features
                </p>
                <div className='mt-8'>
                    <div className='grid grid-cols-5 gap-[10px]'>
                        <div className='col-span-3'>
                            <div className='flex gap-2 bg-[#f5f5f5] rounded-2xl px-6 pt-6 h-[400px]'>
                                <div className=''>
                                    <h2 className='text-[48px] leading-[48px]'>Set Good Habits</h2>
                                    <p className='text-[16px] leading-[20px] mt-4 helvetica-regular'>Our platform is dedicated to fostering a supportive environment where your child can thrive and grow through encouragement and recognition of their accomplishments.</p>
                                </div>
                                <img src={Bento1} alt="" className='w-1/2 object-cover' />
                            </div>
                            <div className='mt-[10px] grid grid-cols-2 gap-[10px]'>
                                <div className='bg-[#f5f5f5] p-6 rounded-2xl'>
                                    <h2 className='text-[32px] leading-[32px]'>Review completed task</h2>
                                    <p className='text-[16px] leading-[20px] mt-4 helvetica-regular'>Stay connected to your child's development and progress, no matter your location. Review photo evidence of completed tasks and award well-deserved points.</p>
                                </div>
                                <div className='bg-[#f5f5f5] p-6 rounded-2xl'>
                                    <h2 className='text-[32px] leading-[32px]'>Buy and redeem points</h2>
                                    <p className='text-[16px] leading-[20px] mt-4 helvetica-regular'>If the reward is monetary - put your money where our mouth is, set aside an amount equivalent to points allocated by buying points. The money is still yours and is redeemable for cash or the reward once the child has accumulated the points and unlocked the reward.</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#f5f5f5] rounded-2xl px-6 pt-6 col-span-2 flex flex-col'>
                            <div className='mb-auto'>
                                <h2 className='text-[48px] leading-[48px]'>Reward Good Behavior</h2>
                                <p className='text-[16px] leading-[20px] mt-4 helvetica-regular'>We've designed PiggyPoints to make tracking progress and earning rewards effortless. Features like (tracking, point adjustments) empower you to actively support your child's development and celebrate achievements together</p>
                            </div>
                            <img src={Bento2} alt="" className='w-full' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage