import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "../FadeInSection";

const FeaturesSection2 = () => {
  const features = [
    {
      title: "Custom Websites & Web Apps",
      description:
        "We craft responsive, fast, and beautiful websites tailored to your business goals. Beautiful, fast, SEO-ready websites tailored for your business.",
      image:
        "https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?semt=ais_hybrid&w=740",
    },
    {
      title: "Call & Workflow Automation",
      description:
        "Automate repetitive tasks and communications using AI-powered solutions. AI voice agents for outbound/inbound calls, lead follow-up & more.",
      image:
        "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg",
    },
    {
      title: "Social Media Management (SMM)",
      description:
        "Boost your brand visibility with AI-enhanced social media scheduling and content. Targeted content, engagement tracking, and campaign automation.",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-illustration-people-with-smartphone-marketing_52683-66659.jpg",
    },
    {
      title: "AI Automation",
      description:
        "Custom AI workflows for leads, sales, support & marketing tasks.",
      image:
        "https://cdn.prod.website-files.com/67e11cd84eea9244ba6752c7/67e3bfe5da30d4393aeb4bcb_img2.webp",
    },
  ];

  return (
    <section className=" py-20 px-5 ">
      <div className=" text-center mb-28 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-2 text-gray-500 leading-relaxed "
        >
          Smart digital marketing solutions powered by AI
        </motion.p>
      </div>
      <div>
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className=" grid md:grid-cols-2 items-center gap-5 mb-28 overflow-hidden "
            >
              <FadeInSection
                direction="left"
                once={false}
                className={` ${isEven ? "md:order-1" : "md:order-2"} `}
              >
                <div className=" relative m-auto h-[350px] w-[90%] ">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="  rounded-2xl object-cover "
                  />
                </div>
                {/* <Image
                    src={feature.image}
                    alt={feature.title}
                    height={350}
                    width={400}
                    className="  rounded-2xl object-cover "
                  /> */}
              </FadeInSection>
              <FadeInSection
                direction="right"
                once={false}
                className={` ${isEven ? "md:order-2" : "md:order-1"} px-7 `}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
                  {feature.title}
                </h2>
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
};

export default FeaturesSection2;
