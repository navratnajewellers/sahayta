export default function ContactPage() {
  return (
    <>
      <section className="bg-blue-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            We&apos;d love to hear from you. Whether you have a question or want
            to start a project, just drop us a message.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                <strong>Email:</strong> info@sahayta.co.in
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Office:</strong> Ranchi, Jharkhand, India
              </p>
              <p>
                <strong>Business Hours:</strong> Mon–Sat, 10am – 6pm
              </p>
              <p className="pt-4 text-gray-500 italic">
                Let’s build something remarkable together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
