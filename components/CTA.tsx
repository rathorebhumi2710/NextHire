'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center text-white"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Master Your Interviews?
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of students who have transformed their interview confidence and landed their dream jobs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-lg hover:shadow-xl transition"
          >
            Start Your Free Trial
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Schedule a Demo
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-sm opacity-80"
        >
          <p>No credit card required • Start practicing in minutes • 5 free interviews included</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
