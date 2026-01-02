import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function About() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-40 pb-24 bg-[#f2f2f4]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-raleway font-thin mb-6">
            About Our Studio
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We create thoughtful, functional interior spaces that reflect
            personality, purpose, and modern living.
          </p>
        </div>
      </section>

      {/* TEXT CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-gray-700 leading-relaxed">

          <p>
            Our interior design studio focuses on creating spaces that are not
            only visually appealing but also practical and comfortable for
            everyday life. We believe that great design starts with understanding
            how people live, work, and relax.
          </p>

          <p>
            With a strong appreciation for clean lines, natural materials, and
            balanced proportions, our approach blends modern aesthetics with
            timeless design principles. Each project is carefully planned to
            enhance both form and function.
          </p>

          <p>
            From residential interiors to curated living spaces, we work closely
            with our clients to ensure that every detail reflects their vision.
            Our process is collaborative, transparent, and focused on delivering
            meaningful results.
          </p>

        </div>
      </section>

      {/* QUOTE / HIGHLIGHT */}
      <section className="py-24 bg-[#d9d2c3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-raleway font-light leading-relaxed">
            “Design is not just what it looks like and feels like.
            Design is how it works.”
          </p>
          <p className="mt-6 text-sm tracking-widest text-gray-700">
            — OUR DESIGN PHILOSOPHY
          </p>
        </div>
      </section>

      {/* FINAL PARAGRAPH */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed">
          <p>
            We are committed to delivering spaces that feel authentic,
            well-crafted, and enduring. Our goal is to design interiors that
            elevate everyday experiences while remaining true to simplicity
            and elegance.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
