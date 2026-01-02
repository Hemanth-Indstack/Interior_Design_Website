export default function Hero() {
  return (
    <section className="bg-[#d7e0ec] text-center py-28">
      
      {/* Title */}
      <h2 className="font-raleway font-thin text-4xl md:text-5xl max-w-xl mx-auto">
        Interior Design Ideas for Your Modern Home
      </h2>

      {/* Circle Image */}
      <div
        className="
          w-[340px] h-[340px]
          md:w-[480px] md:h-[480px]
          rounded-full
          border-[20px] border-white
          bg-center bg-cover
          mx-auto mt-10
        "
        style={{
          backgroundImage:
            "url(https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/8dadc69023f250bb9946b2de/pexels-photo-7425185.jpeg)",
        }}
      />

      {/* Subtitle */}
      <p className="text-gray-700 max-w-md mx-auto mt-10">
        Sample text. Click to select the text box. Click again or double click to
        start editing the text.
      </p>
    </section>
  )
}
