"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-blue-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-blue-700 mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            We blend creativity, automation, and AI to build powerful marketing
            experiences.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Website Development */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Website Development
            </h2>
            <p className="text-sm text-gray-600">
              We build fast, modern, mobile-optimized websites tailored for
              performance and SEO. From corporate sites to landing pages, we
              deliver pixel-perfect results.
            </p>
          </motion.div>

          {/* AI Call Automation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Call Automation
            </h2>
            <p className="text-sm text-gray-600">
              AI-driven outbound and inbound call agents to handle reservations,
              lead follow-ups, and support. Integrated with Twilio, Exotel, and
              ElevenLabs.
            </p>
          </motion.div>

          {/* Social Media Management */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Social Media Management
            </h2>
            <p className="text-sm text-gray-600">
              We create, post, and promote content across platforms like
              Instagram, Facebook, and LinkedIn to boost your brand visibility
              and engagement.
            </p>
          </motion.div>

          {/* AI Marketing Automation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              AI Marketing Automation
            </h2>
            <p className="text-sm text-gray-600">
              Automate WhatsApp, email marketing, chatbots, lead scoring, and
              more with custom AI workflows using tools like Make.com, Zapier,
              and Airtable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-gray-800"
          >
            Need something custom?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-gray-600"
          >
            We also provide tailored tech solutions like booking systems,
            eCommerce platforms, and CRM automations.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            href="/contact"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Let’s Talk
          </motion.a>
        </div>
      </section>
    </>
  );
}
