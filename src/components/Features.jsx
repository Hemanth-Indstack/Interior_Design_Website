function IconInterior() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#c9bfae"
      strokeWidth="2"
    >
      <path d="M8 56h48M16 56V28l16-12 16 12v28" />
      <path d="M28 56V40h8v16" />
    </svg>
  )
}

function IconFurniture() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#c9bfae"
      strokeWidth="2"
    >
      <path d="M8 40h48" />
      <path d="M12 40V24h40v16" />
      <path d="M16 40v8M48 40v8" />
    </svg>
  )
}

function IconLighting() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#c9bfae"
      strokeWidth="2"
    >
      <path d="M32 8v12" />
      <path d="M20 24h24l-8 16H28l-8-16z" />
      <path d="M28 40v8h8v-8" />
    </svg>
  )
}

export default function Features() {
  return (
    <section className="relative w-full">

      {/* TOP BEIGE STRIP */}
      <div className="h-[260px] bg-[#d9d2c3]" />

      {/* MAIN GREY AREA */}
      <div className="relative bg-[#f2f2f4] pt-0 pb-5">

        {/* FEATURE CARDS */}
        <div className="absolute -top-[130px] left-0 right-0">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD */}
            <div className="bg-white text-center px-12 py-16 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="flex justify-center mb-6">
                <IconInterior />
              </div>
              <h4 className="tracking-[0.35em] text-sm mb-4">
                INTERIOR
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
            </div>

            <div className="bg-white text-center px-12 py-16 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="flex justify-center mb-6">
                <IconFurniture />
              </div>
              <h4 className="tracking-[0.35em] text-sm mb-4">
                FURNITURE
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
            </div>

            <div className="bg-white text-center px-12 py-16 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="flex justify-center mb-6">
                <IconLighting />
              </div>
              <h4 className="tracking-[0.35em] text-sm mb-4">
                LIGHTING
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
            </div>

          </div>
        </div>
       
       
        <div className="mt-20 flex justify-center">
          <img
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/53226123adcd56e9b0f4d0fe/-min.jpg"
            alt="Desk"
            className="max-w-4xl "
          />
        </div>

      </div>
    </section>
  )
}
