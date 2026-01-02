export default function Testimonials() {
  return (
    <section className="py-28 bg-[#f2f2f4]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="font-raleway font-thin text-4xl mb-4">
          What Our Clients Say
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-600 max-w-md mx-auto mb-16">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="flex justify-center mb-6">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                alt="Client"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <p className="italic text-gray-700 leading-relaxed">
              “Sample text. Click to select the text box. Click again or double
              click to start editing the text. Duis aute irure dolor in
              reprehenderit.”
            </p>
            <h4 className="mt-6 tracking-wide font-semibold">
              Alex Morgan
            </h4>
            <p className="text-sm text-gray-500">
              Home Owner
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="flex justify-center mb-6">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Client"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <p className="italic text-gray-700 leading-relaxed">
              “Sample text. Click to select the text box. Click again or double
              click to start editing the text. Excepteur sint occaecat cupidatat.”
            </p>
            <h4 className="mt-6 tracking-wide font-semibold">
              Sophia Lee
            </h4>
            <p className="text-sm text-gray-500">
              Interior Enthusiast
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="flex justify-center mb-6">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                alt="Client"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <p className="italic text-gray-700 leading-relaxed">
              “Sample text. Click to select the text box. Click again or double
              click to start editing the text. Ut enim ad minim veniam.”
            </p>
            <h4 className="mt-6 tracking-wide font-semibold">
              Daniel Cruz
            </h4>
            <p className="text-sm text-gray-500">
              Architect
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
