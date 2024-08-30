'use client'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({ i, title, description, src, progress, range, targetScale }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-[60vh] lg:h-[70vh] flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className=" bg-white flex flex-col relative top-[25%] h-[350px] lg:h-[500px] rounded-[30px] origin-top border">
                <div className="grid lg:grid-cols-5 h-full gap-[50px]">
                    <div className="description relative lg:top-[10%] py-[50px] px-6 lg:pl-[50px] z-10 col-span-2">
                        <h2 className='text-[40px] leading-[45px] lg:text-[60px] lg:leading-[60px]'>{title}</h2>
                        <p className='lg:text-[20px] lg:leading-[24px] mt-4 helvetica-regular'>{description}</p>
                    </div>

                    <div className="relative rounded-[25px] overflow-hidden lg:col-span-3 h-full">
                        <motion.div className="h-full hidden lg:block">
                            <img fill src={src} alt="image" className='w-full h-full object-cover' />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Card