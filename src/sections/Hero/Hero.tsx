import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
} from 'lucide-react'

import { GradientMesh } from '@/components/backgrounds/GradientMesh'
import { Button } from '@/components/ui/Button'

const ease = [0.16, 1, 0.3, 1] as const

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 sm:pt-28"
    >
      <GradientMesh />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-content px-6"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface/60 px-3.5 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-impact/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-impact" />
          </span>

          <span className="font-mono text-xs text-ink-muted">
            Currently building a SaaS product
            <span className="ml-0.5 animate-blink text-signal">_</span>
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl"
        >
          Mateus Gomes Barros
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 font-mono text-base text-signal sm:text-lg"
        >
          Frontend Software Engineer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-muted"
        >
          Frontend Software Developer with 5 years of experience building
          scalable SaaS applications using React, TypeScript, JavaScript, and
          Node.js. Contributed to a platform serving more than 10,000 customers
          worldwide and passionate about building products that solve
          real-world problems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button
            href="/Mateus_Gomes_Resume.pdf"
            variant="primary"
            icon={<ArrowUpRight size={16} />}
          >
            View Resume
          </Button>

          <Button
            href="https://github.com/mateus-gomes-barros"
            variant="secondary"
            icon={<Code2 size={16} />}
          >
            GitHub
          </Button>

          <Button
            href="https://www.linkedin.com/in/mateus-gomes-barros-b90863206/"
            variant="secondary"
            icon={<BriefcaseBusiness size={16} />}
          >
            LinkedIn
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}