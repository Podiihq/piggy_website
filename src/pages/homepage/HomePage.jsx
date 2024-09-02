import Lenis from 'lenis';
import React, { useEffect } from 'react'

import Logo from "../../assets/images/Logo.svg"
import GoogleIcon from "../../assets/images/icons/googleIcon.svg"
import AppleIcon from "../../assets/images/icons/AppleIcon.svg"
import Hero from "../../assets/images/illustrations/heroImage.png"
import CardsComponent from './components/cards/CardsComponent';

import Bento1 from "../../assets/images/illustrations/Bento1.png"
import Bento2 from "../../assets/images/illustrations/Bento2.png"
import Video from "../../assets/video/videosample.png"

import { FaPlay } from "react-icons/fa6";

import FunIcon1 from "../../assets/images/fun/cursor.png"
import FunIcon2 from "../../assets/images/fun/Group 5.png"
import FunIcon3 from "../../assets/images/fun/Layer_1.png"
import FunIcon4 from "../../assets/images/fun/path-1.png"
import FunIcon5 from "../../assets/images/fun/path-2.png"
import FunIcon6 from "../../assets/images/fun/path.png"
import FunIcon7 from "../../assets/images/fun/smiley.png"
import FunIcon8 from "../../assets/images/fun/squiggle.png"
import FunIcon9 from "../../assets/images/fun/Vector-1.png"
import FunIcon10 from "../../assets/images/fun/Vector.png"
import { MouseImageTrail } from './components/MouseTrail';
import { FiMousePointer } from "react-icons/fi";

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
        <div className='text-[#171717] px-4'>
            <div className='py-4 flex justify-between items-center max-w-screen-lg mx-auto'>
                <div className='flex items-center gap-1'>
                    <img src={Logo} alt="" />
                    <p className='text-xl helvetica-bold text-[#171717]'>Piggy Points</p>
                </div>
                <div>
                    <button class="relative px-6 py-2.5 lg:px-8 lg:py-3.5 text-white font-bold rounded-full bg-gradient-to-r from-[#EAC870] via-[#DEA81E] to-[#BF8D10] hover:from-[#BF8D10] hover:to-[#EAC870] transform hover:scale-105 transition-all duration-300">
                        <span class="absolute inset-0 bg-gradient-to-r from-[#EAC870] via-[#DEA81E] to-[#BF8D10] opacity-75 blur-sm rounded-full"></span>
                        <span class="relative z-10">Join Waiting List</span>
                    </button>
                </div>
            </div>
            <section>
                <div className='grid lg:grid-cols-2 items-center mt-20 lg:mt-32 max-w-screen-lg mx-auto'>
                    <div className='flex flex-col gap-2 md:w-4/5 lg:w-full mx-auto'>
                        <p className='uppercase text-center lg:text-left'>Mobile App</p>
                        <p className='text-[50px] leading-[55px] text-center lg:text-left lg:text-[60px] helvetica-bold lg:leading-[60px]'>
                            <span className='text-[#A6A6A6] helvetica-bold'> Making </span> Everyday Habits {" "}
                            <span className='text-[#A6A6A6] helvetica-bold'>Fun for </span> Kids.
                        </p>
                        <p className='helvetica-regular text-[16px] leading-[24px] text-center lg:text-left'>Make good habits fun with our point-based system that rewards kids for completing tasks and reaching their goals. Every achievement earns your child points that can be redeemed for games, toys and more!</p>
                        <p className='text-[16px] leading-[24px] uppercase mt-8 text-center lg:text-left'>Available Soon On:</p>
                        <div className='flex gap-3 justify-center lg:justify-start'>
                            <button class="relative px-6 py-2.5 lg:px-8 lg:py-3.5 text-white font-bold rounded-full bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] hover:from-[#4F8DA1] hover:to-[#9AC7D5] transform hover:scale-105 transition-all duration-300">
                                <span class="absolute inset-0 bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] opacity-75 blur-sm rounded-full"></span>
                                <img src={GoogleIcon} alt="" className='relative z-20 w-32' />
                            </button>
                            <button class="relative px-6 py-2.5 lg:px-8 lg:py-3.5 text-white font-bold rounded-full bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] hover:from-[#4F8DA1] hover:to-[#9AC7D5] transform hover:scale-105 transition-all duration-300">
                                <span class="absolute inset-0 bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] opacity-75 blur-sm rounded-full"></span>
                                <img src={AppleIcon} alt="" className='relative z-20 w-28' />
                            </button>
                        </div>
                    </div>
                    <div className='mt-20 lg:mt-0 hidden lg:block'>
                        <img src={Hero} alt="" />
                    </div>
                </div>
            </section>
            <section className='pt-20 lg:pt-72 pb-32 cursor-pointer max-w-screen-lg mx-auto'>
                <div className='w-full lg:h-[600px] bg-[#f4f4f4] border-[#f9f9f9] border-8 rounded-[30px] relative'>
                    <FaPlay className='absolute inset-0 mx-auto my-auto text-6xl z-10 text-white' />
                    <div className='w-full h-full absolute inset-0 bg-[#000] opacity-30 rounded-[30px]' />
                    <img src={Video} alt="" className='w-full h-full object-cover rounded-[30px]' />
                </div>
            </section>

            <section className='py-16 lg:py-32 max-w-screen-lg mx-auto'>
                <div>
                    <p className='uppercase text-center'>Why use PiggyPoints App:</p>
                    <p className='text-[50px] leading-[55px] lg:text-[60px] helvetica-bold lg:leading-[60px] text-center lg:w-2/3 mx-auto'>
                        <span className='text-[#A6A6A6] helvetica-bold'> There are</span> 1000 reasons  {" "}
                        <span className='text-[#A6A6A6] helvetica-bold'>why, but only have space for these </span>
                    </p>
                </div>
                <CardsComponent />
            </section>


            <section className='pb-32 max-w-screen-lg mx-auto'>
                <p className='text-[50px] leading-[55px] lg:text-[60px] helvetica-bold lg:leading-[60px] lg:w-2/3'>
                    <span className='text-[#A6A6A6] helvetica-bold'> Our Main </span> Features
                </p>
                <div className='mt-8'>
                    <div className='grid lg:grid-cols-5 gap-[10px]'>
                        <div className='lg:col-span-3'>
                            <div className='flex gap-2 bg-[#f9f9f9] rounded-[30px] px-6 pt-6 lg:h-[400px] pb-6 lg:pb-0'>
                                <div className=''>
                                    <h2 className='text-[32px] leading-[32px lg:text-[48px] lg:leading-[48px]'>Set Good Habits</h2>
                                    <p className='text-[16px] leading-[20px] mt-4 helvetica-regular'>Our platform is dedicated to fostering a supportive environment where your child can thrive and grow through encouragement and recognition of their accomplishments.</p>
                                </div>
                                <img src={Bento1} alt="" className='w-1/2 object-cover hidden lg:block' />
                            </div>
                            <div className='mt-[10px] grid lg:grid-cols-2 gap-[10px]'>
                                <div className='bg-[#f9f9f9] p-6 rounded-[30px]'>
                                    <h2 className='text-[32px] leading-[32px]'>Review completed task</h2>
                                    <p className='text-[16px] leading-[20px] mt-4 helvetica-regular'>Stay connected to your child's development and progress, no matter your location. Review photo evidence of completed tasks and award well-deserved points.</p>
                                </div>
                                <div className='bg-[#f9f9f9] p-6 rounded-[30px]'>
                                    <h2 className='text-[32px] leading-[32px]'>Buy and redeem points</h2>
                                    <p className='text-[16px] leading-[20px] mt-4 helvetica-regular'>If the reward is monetary - put your money where our mouth is, set aside an amount equivalent to points allocated by buying points. The money is still yours and is redeemable for cash or the reward once the child has accumulated the points and unlocked the reward.</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#f9f9f9] rounded-[30px] px-6 pt-6 lg:col-span-2 flex flex-col pb-6 lg:pb-0'>
                            <div className='mb-auto'>
                                <h2 className='text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px]'>Reward Good Behavior</h2>
                                <p className='text-[16px] leading-[20px] mt-4 helvetica-regular'>We've designed PiggyPoints to make tracking progress and earning rewards effortless. Features like (tracking, point adjustments) empower you to actively support your child's development and celebrate achievements together</p>
                            </div>
                            <img src={Bento2} alt="" className='w-full hidden lg:block' />
                        </div>
                    </div>
                    <div className='mt-8'>
                        <p className='text-[16px] leading-[24px] uppercase mt-8 text-center'>Available Soon On:</p>
                        <div className='flex gap-3 justify-center mt-4'>
                            <button class="relative px-6 py-2.5 lg:px-8 lg:py-3.5 text-white font-bold rounded-full bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] hover:from-[#4F8DA1] hover:to-[#9AC7D5] transform hover:scale-105 transition-all duration-300">
                                <span class="absolute inset-0 bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] opacity-75 blur-sm rounded-full"></span>
                                <img src={GoogleIcon} alt="" className='relative z-20 w-32' />
                            </button>
                            <button class="relative px-6 py-2.5 lg:px-8 lg:py-3.5 text-white font-bold rounded-full bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] hover:from-[#4F8DA1] hover:to-[#9AC7D5] transform hover:scale-105 transition-all duration-300">
                                <span class="absolute inset-0 bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] opacity-75 blur-sm rounded-full"></span>
                                <img src={AppleIcon} alt="" className='relative z-20 w-28' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <MouseImageTrail
                renderImageBuffer={50}
                rotationRange={25}
                images={[
                    FunIcon1,
                    FunIcon2,
                    FunIcon3,
                    FunIcon4,
                    FunIcon5,
                    FunIcon6,
                    FunIcon7,
                    FunIcon8,
                    FunIcon9,
                    FunIcon10,
                ]}
            >
                <section className='py-16 lg:py-32'>
                    <div className='px-6 py-16  bg-[#f9f9f9] rounded-[30px] w-full max-w-screen-lg mx-auto '>
                        <div>
                            <img src={Logo} alt="" className='mx-auto w-28' />
                            <p className='text-[50px] leading-[55px] lg:text-[60px] helvetica-bold lg:leading-[70px] text-center lg:w-2/3 mx-auto'>
                                <span className='text-[#A6A6A6] helvetica-bold'> Help Your </span> Child  {" "}
                                <span className='text-[#A6A6A6] helvetica-bold'> Build </span> Positive
                                <span className='text-[#A6A6A6] helvetica-bold'> Habits </span>
                            </p>
                            <div className='flex justify-center pt-10'>
                                <button class="relative px-8 py-3 text-white font-bold rounded-full bg-gradient-to-r from-[#EAC870] via-[#DEA81E] to-[#BF8D10] hover:from-[#BF8D10] hover:to-[#EAC870] transform hover:scale-105 transition-all duration-300">
                                    <span class="absolute inset-0 bg-gradient-to-r from-[#EAC870] via-[#DEA81E] to-[#BF8D10] opacity-75 blur-sm rounded-full"></span>
                                    <span class="relative z-10">Join Waiting List</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </MouseImageTrail>

            <footer>
                <p className='text-center mb-8 text-sm helvetica-regular'>©️ Copyright Piggy Points App 2024 | All Rights Reserved</p>
            </footer>
        </div >
    )
}

export default HomePage