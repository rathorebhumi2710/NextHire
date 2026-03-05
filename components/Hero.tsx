'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Master Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Job Interviews</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Practice with realistic mock interviews, get personalized feedback, and build the confidence you need to land your dream job.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:shadow-xl transition transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-8 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>5 free mock interviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Instant AI feedback</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
