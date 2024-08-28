'use client';
import { projects } from './data';
import Card from './Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function CardsComponent() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <main ref={container} className="main">
            {
                projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                })
            }
        </main>
    )
}