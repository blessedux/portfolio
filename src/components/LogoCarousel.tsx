"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion } from "framer-motion"
import { logos } from "./logos"

interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  // Create sets of non-repeating logos for each cycle
  const totalCycles = Math.ceil(allLogos.length / columnCount)
  const cycles: Logo[][] = []
  
  for (let i = 0; i < totalCycles; i++) {
    const shuffled = shuffleArray([...allLogos])
    cycles.push(...Array.from({ length: Math.ceil(shuffled.length / columnCount) }, (_, index) =>
      shuffled.slice(index * columnCount, (index + 1) * columnCount)
    ))
  }

  // Distribute cycles to columns
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])
  cycles.forEach((cycle) => {
    cycle.forEach((logo, j) => {
      if (columns[j]) {
        columns[j].push(logo)
      }
    })
  })

  // Ensure all columns have the same length
  const maxLength = Math.max(...columns.map(col => col.length))
  columns.forEach(col => {
    while (col.length < maxLength) {
      const remainingLogos = allLogos.filter(logo => !col.includes(logo))
      col.push(remainingLogos[Math.floor(Math.random() * remainingLogos.length)])
    }
  })

  return columns
}

const LogoColumn = React.memo<LogoColumnProps>(({ logos, index, currentTime }) => {
  const cycleInterval = 2000
  const columnDelay = index * 100 // Reduced from 200 to 100 for faster sequence
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval)
  const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

  return (
    <motion.div
      className="relative h-12 w-12 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.05,
        duration: 0.25,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${logos[currentIndex].id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0, filter: "blur(4px)" }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.25,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(4px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.15,
            },
          }}
        >
          <CurrentLogo 
            className="h-10 w-10 max-h-[80%] max-w-[80%] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" 
            width={40}
            height={40}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
})

LogoColumn.displayName = 'LogoColumn'

interface LogoCarouselProps {
  columnCount?: number
}

export const LogoCarousel: React.FC<LogoCarouselProps> = ({ columnCount = 3 }) => {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [columnCount])

  return (
    <div className="flex gap-6 items-center">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

LogoCarousel.displayName = 'LogoCarousel' 