'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer at Google',
    quote: 'NextHire helped me land my dream job at Google. The realistic practice and personalized feedback made a huge difference in my interview performance.',
    avatar: '👩‍💼',
  },
  {
    name: 'Alex Rodriguez',
    role: 'Product Manager at Meta',
    quote: 'As someone with great skills but low interview confidence, NextHire was transformative. I felt so prepared walking into my interviews.',
    avatar: '👨‍💼',
  },
  {
    name: 'Priya Singh',
    role: 'Data Scientist at Amazon',
    quote: 'The AI feedback was incredibly helpful. I could see exactly where I was struggling and how to improve. Highly recommend!',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Torres',
    role: 'Consultant at McKinsey',
    quote: 'NextHire made me feel confident and ready. The mock interviews felt so realistic. Best investment I made in my career.',
    avatar: '👨‍💼',
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Success Stories from Our Students
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from students who successfully landed their dream jobs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 border-l-4 border-blue-600 bg-gray-50 rounded-lg hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{testimonial.avatar}</span>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
