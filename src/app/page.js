"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-blue-100 py-28 text-center relative z-0 "
      >
        <Image
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="section1-bg"
          fill
          className=" -z-10 object-cover "
        />
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
          >
            AI-Powered Marketing <br />
            for the Digital Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg text-gray-300"
          >
            Websites, Calls, and Social Media—Automated and Optimized.
          </motion.p>
          <div className="mt-7 flex justify-center space-x-4">
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Get a Free Consultation
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              href="/portfolio"
              className="border border-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-100 hover:text-black "
            >
              View Our Work
            </motion.a>
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-2 text-gray-500">
            Smart digital marketing solutions powered by AI
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Website Development
              </h3>
              <p className="text-gray-600 text-sm">
                Beautiful, fast, SEO-ready websites tailored for your business.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Call Automation
              </h3>
              <p className="text-gray-600 text-sm">
                AI voice agents for outbound/inbound calls, lead follow-up &
                more.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">SMM</h3>
              <p className="text-gray-600 text-sm">
                Targeted content, engagement tracking, and campaign automation.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                AI Automation
              </h3>
              <p className="text-gray-600 text-sm">
                Custom AI workflows for leads, sales, support & marketing tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Our Work
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Beyond Renewables
              </h3>
              <p className="text-sm text-gray-600">
                We designed and developed the website for this solar waste
                management startup with clean visuals and SEO-focused content.
              </p>
              <a
                href="https://beyondrenewables.in"
                target="_blank"
                className="text-blue-500 text-sm mt-3 inline-block hover:underline"
              >
                Visit Site →
              </a>
            </div>
            {/* Add more projects here as you complete them */}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.5 }}
        className="py-16 bg-blue-600 text-white text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold"
          >
            Ready to Automate Your Growth?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-white text-opacity-90"
          >
            Let Sahayta craft your digital presence with AI-powered solutions.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            href="/contact"
            className="mt-6 inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-100"
          >
            Contact Us Now
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}
