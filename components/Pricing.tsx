'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for getting started',
    features: [
      '5 free mock interviews',
      'Basic AI feedback',
      'Question library access',
      'Interview tips',
      'Community support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$29',
    period: '/month',
    description: 'Most popular for students',
    features: [
      'Unlimited mock interviews',
      'Advanced AI feedback with video review',
      'Full question library (10,000+)',
      'Interview tips & strategies',
      'Progress analytics',
      'Priority email support',
      'Resume optimization',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$99',
    period: '/month',
    description: 'For serious career builders',
    features: [
      'Everything in Professional',
      '1-on-1 coaching sessions (4/month)',
      'Company-specific interview prep',
      'Salary negotiation guide',
      'Career roadmap planning',
      '24/7 priority support',
      'LinkedIn profile optimization',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-xl border-2 relative ${
                plan.highlighted
                  ? 'border-blue-600 bg-white shadow-2xl scale-105'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && <span className="text-gray-600">{plan.period}</span>}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 bg-blue-50 rounded-xl border border-blue-200 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a team plan?</h3>
          <p className="text-gray-600 mb-4">
            Perfect for colleges and coding bootcamps. Get special pricing for groups of 10+.
          </p>
          <button className="px-6 py-2 text-blue-600 font-semibold hover:text-blue-700">
            Contact Sales →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
