export default function Subscribe() {
  return (
    <section className="py-28 bg-[#e9edf3]">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="font-raleway font-thin text-4xl mb-4">
          Subscribe
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-10">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>

        {/* FORM */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[320px] px-4 py-3 text-sm border border-gray-300 outline-none focus:border-gray-500"
          />

          <button
            type="submit"
            className="bg-[#9db3d0] text-white px-8 py-3 tracking-[0.25em] text-sm font-semibold hover:opacity-90 transition"
          >
            SUBMIT
          </button>
        </form>

      </div>
    </section>
  )
}
