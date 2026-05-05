'use client';

import { motion } from 'framer-motion';

export default function AnimatedLogo() {
  return (
    <motion.a
      href='/'
      className='group flex items-center gap-3'
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.06, rotate: -2 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className='relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.18)]'
      >
        <motion.div
          animate={{ opacity: [0.25, 0.65, 0.25], scale: [1, 1.15, 1] }}
          transition={{ duration: 2.6, repeat: Infinity }}
          className='absolute inset-0 rounded-xl bg-cyan-400/20 blur-md'
        />

        <svg
          width='28'
          height='28'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='relative z-10'
        >
          <path
            d='M10 17H36C47 17 55 24 55 32C55 40 47 47 36 47H10L20 37H36C41 37 45 35 45 32C45 29 41 27 36 27H20L10 17Z'
            fill='white'
          />
          <path d='M31 20L16 38H28L23 53L48 29H35L42 20H31Z' fill='#22D3EE' />
        </svg>
      </motion.div>

      <div className='hidden text-2xl font-black tracking-tight sm:block'>
        <span className='text-white'>DEVI</span>
        <span className='text-cyan-300'>FY</span>
      </div>
    </motion.a>
  );
}
