export default function Partners() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="font-raleway font-thin text-4xl mb-4">
          Information partners
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-600 max-w-md mx-auto mb-12">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>

        {/* LOGOS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">

          <img
            src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/b26eaa96084b5d63a1b8d98d/5.png"
            alt="Partner 1"
            className="mx-auto h-20 object-contain"
          />

          <img
            src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/303f208dbbed58b0ad91b352/3.png"
            alt="Partner 2"
            className="mx-auto h-20 object-contain"
          />

          <img
            src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/edcb21a5c3ce51d686ceb941/4.png"
            alt="Partner 3"
            className="mx-auto h-20 object-contain"
          />

          <img
            src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/f152870f5c9d5ab28268fb89/2.png"
            alt="Partner 4"
            className="mx-auto h-20 object-contain"
          />

          <img
            src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/8cf263ed39d95b719e7321a1/6.png"
            alt="Partner 5"
            className="mx-auto h-20 object-contain"
          />

        </div>
      </div>
    </section>
  )
}
