/* eslint-disable @next/next/no-img-element */

"use client";

import { motion } from "framer-motion";

export default function PortfolioPage() {
  const workPartners = [
    {
      title: "Beyond Renewables",
      description:
        "A website for a solar waste management company focused on sustainability and innovation. Built with performance and SEO in mind.",
      websiteLink: "https://beyondrenewables.in",
      image: "/portfolio/beyond-renewables.webp",
    },
    {
      title: "Navratna Jewellers",
      description:
        "We designed a full price dynamic website for Jewellery Shop with clean visuals and custom functionality.",
      websiteLink: "https://navratnajewellers.in",
      image: "https://navratnajewellers.in/nav-jew-logo.jpg",
    },
    {
      title: "Golf Care",
      description:
        "We designed and developed the website for Jharkhand top Golf Store with all products of golf listed and seo-focused content..",
      websiteLink: "https://golfcare.in",
      image:
        "https://golfcare.in/wp-content/uploads/2024/10/Untitled-design-4.png",
    },
  ];

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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            A glimpse into some of our proudest work across websites,
            automation, and social media.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {workPartners.map((partner, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition pt-4"
            >
              <img
                src={partner.image}
                alt={`${partner.title} Website`}
                className="w-fit h-56 object-cover bg-black m-auto rounded-2xl p-4 "
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {partner.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {partner.description}
                </p>
                <a
                  href={partner.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Visit Website →
                </a>
              </div>
            </motion.div>
          ))}

          {/* Project 1: Beyond Renewables */}
          {/* <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition pt-4">
            <img
              src="/portfolio/beyond-renewables.webp"
              alt="Beyond Renewables Website"
              className="w-fit h-56 object-cover bg-black m-auto rounded-2xl p-4 "
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Beyond Renewables
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                A website for a solar waste management company focused on
                sustainability and innovation. Built with performance and SEO in
                mind.
              </p>
              <a
                href="https://beyondrenewables.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Visit Website →
              </a>
            </div>
          </div> */}

          {/* Placeholder for future projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="border border-dashed border-gray-300 rounded-xl p-6 flex items-center justify-center text-center text-gray-400"
          >
            <div>
              <p className="text-sm">More projects coming soon...</p>
              <p className="text-xs mt-2">Your project could be here!</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-gray-800"
          >
            Ready to build something amazing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-gray-600"
          >
            We’d love to feature your brand in our portfolio. Let’s get started.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            href="/contact"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Work With Us
          </motion.a>
        </div>
      </section>
    </>
  );
}
