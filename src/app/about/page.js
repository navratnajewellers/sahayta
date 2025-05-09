export default function AboutPage() {
  return (
    <>
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Who We Are</h1>
          <p className="text-gray-600 text-lg">
            Sahayta is an AI-powered marketing agency helping businesses grow
            through intelligent automation, creative website design, and
            strategic social media management.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our mission is to empower startups and businesses with smart
              digital tools—from voice automation to engaging websites and
              optimized content strategies. We believe in using AI to reduce
              manual effort and maximize results.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become the most trusted AI marketing partner for small and
              medium enterprises across India and beyond—by simplifying growth
              through technology.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose Sahayta?
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border rounded-xl bg-white shadow hover:shadow-md">
              <h3 className="font-semibold text-blue-600 mb-2">
                AI-Powered Approach
              </h3>
              <p className="text-sm text-gray-600">
                We use cutting-edge AI tools for automation, saving time and
                improving efficiency.
              </p>
            </div>
            <div className="p-6 border rounded-xl bg-white shadow hover:shadow-md">
              <h3 className="font-semibold text-blue-600 mb-2">
                Result-Oriented
              </h3>
              <p className="text-sm text-gray-600">
                Our strategies are data-driven, designed to drive engagement,
                traffic, and conversions.
              </p>
            </div>
            <div className="p-6 border rounded-xl bg-white shadow hover:shadow-md">
              <h3 className="font-semibold text-blue-600 mb-2">
                Trusted Delivery
              </h3>
              <p className="text-sm text-gray-600">
                We’ve helped companies like Beyond Renewables establish their
                online presence and grow fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Want to work with us?</h2>
          <p className="text-white text-opacity-90 mb-6">
            We’re always excited to help brands grow. Let’s automate your
            marketing and scale your reach—together.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100"
          >
            Talk to Our Team
          </a>
        </div>
      </section>
    </>
  );
}
