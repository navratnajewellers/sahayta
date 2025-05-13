"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      className=" bg-linear-120 from-0% from-blue-100 to-60% to-gray-50 py-28"
      id="about"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Sahayta</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sahayta is an AI-powered marketing agency that blends creativity
            with cutting-edge automation. From building stunning websites to
            running intelligent call workflows and managing social media, we
            help brands automate growth. With smart tech at the core, we turn
            ideas into scalable digital solutions.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 px-7 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              🚀 Vision
            </h4>
            <p className="text-gray-600">
              To empower businesses through intelligent automation and AI-driven
              growth strategies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              💡 Mission
            </h4>
            <p className="text-gray-600">
              Deliver impactful digital experiences by combining AI technology
              with creative thinking.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              🤝 What We Value
            </h4>
            <p className="text-gray-600">
              Innovation, transparency, results — and building long-term
              partnerships that scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
