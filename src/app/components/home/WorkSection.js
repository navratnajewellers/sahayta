"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WorkSection = () => {
  const workPartners = [
    {
      title: "Beyond Renewables",
      description:
        "We designed and developed the website for this solar waste management startup with clean visuals and SEO-focused content.",
      websiteLink: "https://beyondrenewables.in",
    },
    {
      title: "Navratna Jewellers",
      description:
        "We designed a full price dynamic website for Jewellery Shop with clean visuals and custom functionality.",
      websiteLink: "https://navratnajewellers.in",
    },
    {
      title: "Golf Care",
      description:
        "We designed and developed the website for Jharkhand top Golf Store with all products of golf listed and seo-focused content..",
      websiteLink: "https://golfcare.in",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 ">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-gray-800 text-center mb-4 "
        >
          Our Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className=" text-lg leading-relaxed text-gray-400 mb-24 text-center "
        >
          What We’ve Done for Brands Like Yours
        </motion.p>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {workPartners.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ amount: 0.5 }}
              className="bg-white border rounded-lg p-11 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {data.title}
              </h3>
              <p className="text-sm text-gray-600">{data.description}</p>
              <a
                href={data.websiteLink}
                target="_blank"
                className="text-blue-500 text-sm mt-3 inline-block hover:underline"
              >
                Visit Site →
              </a>
            </motion.div>
          ))}
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md"
          >
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
          </motion.div> */}
          {/* Add more projects here as you complete them */}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
