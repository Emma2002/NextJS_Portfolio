// 'use client';
// import  { useEffect, useRef, useState } from 'react';
// import styles from '../page.module.css'
// import Image from 'next/image';
// import Lenis from '@studio-freight/lenis'
// import { useTransform, useScroll, motion } from 'framer-motion';
// import useDimension from '../useDimension'

// const images = [
//   "1.png",
//   "2.png",
//   "3.png",
//   "4.png",
//   "5.png",
//   "6.png",
//   "7.png",
//   "8.png",
//   "9.png",
//   "10.jpg",
//   "11.jpg",
//   "12.png",
//   "13.png",
//   "14.png",
//   "15.png",
//   "16.png",
//   "17.png",
//   "18.png",
// ]


// export default function ImageGallery() {
//   const container = useRef(null);
//   const {height} = useDimension();
//   const [dimension, setDimension] = useState({width:0, height:0});

//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start end', 'end start']
//     })

//     const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
//     const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
//     const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
//     const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
//     const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5])
//     const y6 = useTransform(scrollYProgress, [0, 1], [0, height * 2.8])
    
//   useEffect( () => {
//     const lenis = new Lenis()

//     const raf = (time) => {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)
//   }, [])

//   return (
//     <main className={styles.main}>
//       <div className={styles.spacer}></div>
//       <div ref={container} className={styles.gallery}>
//         <div className={styles.galleryWrapper}>
//           <Column images={[images[0], images[1], images[2]]} y={y}/>
//           <Column images={[images[3], images[4], images[5]]} y={y2}/>
//           <Column images={[images[6], images[7], images[8]]} y={y3}/>
//           <Column images={[images[9], images[10], images[11]]} y={y4}/>
//           <Column images={[images[12], images[13], images[14]]} y={y5}/>
//           <Column images={[images[15], images[16], images[17]]} y={y6}/>
//         </div>
//       </div>
//       <div className={styles.spacer}></div>
//     </main>
//   )
// }

// const Column = ({images, column}) => {
//   return (
//     <motion.div 
//       className={styles.column}
//       >
//       {
//         images.map( (src, i) => {
//           return <div key={i} className={styles.imageContainer}>
//             <Image 
//               src={`/images/3DModelling/${src}`}
//               alt='image'
//               fill
//             />
//           </div>
//         })
//       }
//     </motion.div>
//   )
// }

'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../page.module.css'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.jpg",
  "11.jpg",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
]

export default function ImageGallery() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.25])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y6 = useTransform(scrollYProgress, [0, 1], [0, height * 1.15])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y}/>
        <Column images={[images[12], images[13], images[14]]} y={y2}/>
        <Column images={[images[15], images[16], images[17]]} y={y2}/>
        
      </div>
      <div className={styles.spacer}></div>
    </main>
  )
}

const Column = ({images, y}) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/3DModelling/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}