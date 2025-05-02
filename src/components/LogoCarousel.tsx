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
  img: React.ComponentType<{ width?: number; height?: number; className?: string }>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
  currentLogos: Logo[]
  setCurrentLogos: React.Dispatch<React.SetStateAction<Logo[]>>
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
    // Ensure each cycle has exactly columnCount unique logos
    const cycle = shuffled.slice(0, columnCount)
    cycles.push(cycle)
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

  return columns
}

const LogoColumn = React.memo<LogoColumnProps>(({ logos, index, currentTime, currentLogos, setCurrentLogos }) => {
  const cycleInterval = 2000 // Halved from 4000 to 2000 for faster transitions
  const columnDelay = index * 100 // Halved from 200 to 100 for faster sequence
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval)
  
  const CurrentLogo = useMemo(() => {
    const logo = logos[currentIndex]
    // Update the current logos array when this column changes
    setCurrentLogos((prev: Logo[]) => {
      const newLogos = [...prev]
      newLogos[index] = logo
      return newLogos
    })
    return logo.img
  }, [logos, currentIndex, index, setCurrentLogos])

  return (
    <motion.div
      className="relative h-12 w-12 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.05, // Halved from 0.1 to 0.05
        duration: 0.25, // Halved from 0.5 to 0.25
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
              duration: 0.25, // Halved from 0.5 to 0.25
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(4px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.15, // Halved from 0.3 to 0.15
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
  const [currentLogos, setCurrentLogos] = useState<Logo[]>([])

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100) // Halved from 200 to 100 for faster animations
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100) // Halved from 200 to 100
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
    setCurrentLogos(new Array(columnCount).fill(logos[0]))
  }, [columnCount])

  // Enhanced check to prevent duplicate logos
  useEffect(() => {
    if (currentLogos.length < 2) return

    const hasDuplicates = currentLogos.some((logo, index) => 
      logo && currentLogos.findIndex(l => l && l.id === logo.id) !== index
    )

    if (hasDuplicates) {
      const availableLogos = logos.filter(logo => !currentLogos.some(l => l && l.id === logo.id))
      if (availableLogos.length > 0) {
        const newLogoSets = logoSets.map((column, colIndex) => {
          // Get current logos from other columns
          const otherColumnLogos = currentLogos.filter((_, idx) => idx !== colIndex)
          // Filter out logos that are currently shown in other columns
          const availableForColumn = column.filter(logo => 
            !otherColumnLogos.some(l => l && l.id === logo.id)
          )
          // If we have enough unique logos, use them, otherwise shuffle the original column
          return availableForColumn.length >= column.length ? 
            availableForColumn : 
            shuffleArray([...column])
        })
        setLogoSets(newLogoSets)
      }
    }
  }, [currentLogos, logoSets])

  return (
    <div className="flex gap-6 items-center">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
          currentLogos={currentLogos}
          setCurrentLogos={setCurrentLogos}
        />
      ))}
    </div>
  )
}

LogoCarousel.displayName = 'LogoCarousel' 