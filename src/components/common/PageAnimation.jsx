import { MotionConfig, motion } from 'motion/react'
import { useLocation } from 'react-router-dom'

export default function PageAnimation({ children }) {
  const location = useLocation()

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}