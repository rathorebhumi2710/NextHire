'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎥',
    title: 'Realistic Mock Interviews',
    description: 'AI-powered interviews that simulate real job interview scenarios across different industries and roles.',
  },
  {
    icon: '📊',
    title: 'Personalized Feedback',
    description: 'Get detailed feedback on your communication, body language, and technical responses instantly.',
  },
  {
    icon: '💡',
    title: 'Smart Guidance',
    description: 'Receive actionable tips to improve your answers, energy level, and overall interview performance.',
  },
  {
    icon: '🎯',
    title: 'Question Library',
    description: 'Access thousands of curated interview questions from real companies with detailed answers.',
  },
  {
    icon: '📈',
    title: 'Progress Tracking',
    description: 'Track your improvement over time with detailed analytics and performance metrics.',
  },
  {
    icon: '🌍',
    title: 'Multiple Industries',
    description: 'Practice interviews for tech, finance, consulting, marketing, and many other fields.',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features to Transform Your Interview Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to prepare for success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 border border-gray-200 rounded-xl hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
