/* eslint-disable @next/next/no-img-element */

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-blue-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Our Portfolio
          </h1>
          <p className="text-gray-600 text-lg">
            A glimpse into some of our proudest work across websites,
            automation, and social media.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Project 1: Beyond Renewables */}
          <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition pt-4">
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
          </div>

          {/* Placeholder for future projects */}
          <div className="border border-dashed border-gray-300 rounded-xl p-6 flex items-center justify-center text-center text-gray-400">
            <div>
              <p className="text-sm">More projects coming soon...</p>
              <p className="text-xs mt-2">Your project could be here!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Ready to build something amazing?
          </h2>
          <p className="mt-2 text-gray-600">
            We’d love to feature your brand in our portfolio. Let’s get started.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Work With Us
          </a>
        </div>
      </section>
    </>
  );
}
