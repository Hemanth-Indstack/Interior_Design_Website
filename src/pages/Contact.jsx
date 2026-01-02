import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 bg-[#f2f2f4]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-raleway font-thin mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or a question about our services?
            We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT INFO */}
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="tracking-[0.3em] text-sm mb-3">
                ADDRESS
              </h3>
              <p>
                123 Interior Street<br />
                Design City, DC 45678
              </p>
            </div>

            <div>
              <h3 className="tracking-[0.3em] text-sm mb-3">
                PHONE
              </h3>
              <p>
                +1 (234) 567-8900
              </p>
            </div>

            <div>
              <h3 className="tracking-[0.3em] text-sm mb-3">
                EMAIL
              </h3>
              <p>
                hello@interiordesign.com
              </p>
            </div>

            <div>
              <h3 className="tracking-[0.3em] text-sm mb-3">
                WORKING HOURS
              </h3>
              <p>
                Monday – Friday<br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-gray-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-gray-500"
              />

              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-gray-500"
              />

              <button
                type="submit"
                className="bg-[#9db3d0] text-white px-10 py-3 tracking-[0.25em] text-sm font-semibold hover:opacity-90 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* OPTIONAL MAP / IMAGE STRIP */}
      <section className="py-24 bg-[#f2f2f4]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            We work with clients across residential and commercial projects,
            delivering thoughtful interiors tailored to every space.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
