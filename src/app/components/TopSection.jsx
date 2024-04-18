'use client'
import Image from 'next/image'
import styles from '../page.module.css'
import { useRef, useEffect } from 'react';

export default function TopSection() {
  return (
    <main id="home" className={`${styles.main} relative flex flex-col items-center justify-center`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 filter blur-xl" style={{ transform: 'scale(1.1)' }}>
          <Image 
            src="/images/3DModelling/7.png"
            layout="fill"
            objectFit="cover"
            alt="background"
          />
        </div>
      </div>
      
{/* Hero Section */}
<div className="relative text-center z-10 mt-28"> {/* Increased margin top for the hero section */}
  {/* Use flexbox to center and align the name */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-9xl text-white font-bold">EMMA VAN&nbsp;DEN BROEK</div> {/* Increased font size to text-12xl */}
  </div>
</div>
{/* Headshot Image */}
<div className="relative z-10 mt-36"> {/* Increased margin top for the headshot image */}
  <Image
    src="/images/headshot.jpg"
    priority
    alt="Emma's headshot"
    width={245}
    height={245}
    className="w-[150px] rounded-[16px] md:w-[200px] md:rounded-[32px] lg:w-[245px] mx-auto"
  />
</div>
      
      {/* Slider Container (if needed) */}
      {/* <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>CREATIVE TECHNOLOGIST -</p>
          <p ref={secondText}>CREATIVE TECHNOLOGIST -</p>
        </div>
      </div> */}
    </main>
  )
}
