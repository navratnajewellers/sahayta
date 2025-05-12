import Image from "next/image";
import FadeInSection from "../FadeInSection";
import { motion } from "framer-motion";

const features = [
  {
    title: "Custom Websites & Web Apps",
    description:
      "We craft responsive, fast, and beautiful websites tailored to your business goals.",
    image:
      "https://cdn.prod.website-files.com/67e11cd84eea9244ba6752c7/67e3bfe5da30d4393aeb4bcb_img2.webp",
  },
  {
    title: "Call & Workflow Automation",
    description:
      "Automate repetitive tasks and communications using AI-powered solutions.",
    image:
      "https://cdn.prod.website-files.com/67e11cd84eea9244ba6752c7/67e3bfe5da30d4393aeb4bcb_img2.webp",
  },
  {
    title: "Social Media Management (SMM)",
    description:
      "Boost your brand visibility with AI-enhanced social media scheduling and content.",
    image:
      "https://cdn.prod.website-files.com/67e11cd84eea9244ba6752c7/67e3bfe5da30d4393aeb4bcb_img2.webp",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-800"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-2 text-gray-500"
        >
          Smart digital marketing solutions powered by AI
        </motion.p>
      </div>
      <div className=" w-full px-4">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={feature.title}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <FadeInSection
                direction={isEven ? "left" : "right"}
                once={false}
                className={` ${isEven ? "order-1" : "order-2"} `}
              >
                <div
                  className={`relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg `}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeInSection>

              {/* Text */}
              <FadeInSection
                direction={isEven ? "right" : "left"}
                once={false}
                className={`${isEven ? "order-2" : "order-1"}`}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </FadeInSection>
            </div>
          );
        })}
      </div>
    </section>
  );
}
