'use client';

import { motion } from 'framer-motion';

export default function Benefits() {
  const benefits = [
    {
      title: 'Increased Confidence',
      description: 'Practice builds confidence. The more you practice, the more ready you\'ll feel when facing real interviews.',
      stats: '87% of users report increased confidence',
    },
    {
      title: 'Better Communication Skills',
      description: 'Learn to articulate your thoughts clearly, manage nervousness, and present yourself professionally.',
      stats: '92% improve their communication',
    },
    {
      title: 'Higher Success Rate',
      description: 'Our users receive 3x more job offers on average compared to those who don\'t practice.',
      stats: 'Average 3x more offers',
    },
    {
      title: 'Shorter Time to Hiring',
      description: 'Reduce your job search timeline with targeted practice and interview preparation strategies.',
      stats: 'Land jobs 40% faster',
    },
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Students Choose NextHire
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who have successfully prepared for their interviews
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">📊</span>
                <p className="text-sm font-semibold text-gray-700">{benefit.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
