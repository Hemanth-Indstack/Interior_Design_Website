export default function Quote() {
  return (
    <section className="bg-[#e9edf3] py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">

        {/* CIRCULAR IMAGE */}
        <div className="flex justify-center">
          <div
            className="w-[280px] h-[280px] rounded-full border-[12px] border-white bg-center bg-cover"
            style={{
              backgroundImage:
                "url(https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/5a4113a422625ff99aef921f/pexels-photo-3259922.jpeg)",
            }}
          />
        </div>

        {/* TEXT */}
        <p className="mt-8 text-base italic text-gray-700 leading-relaxed">
          Material-wise, nautical decor incorporates unfinished wood in its
          tables or chairs, combined with chic linen upholstery for your lounge
          seats and sofas.
          <br />
          <br />
          Your options for decorative accents are many: seashells in clear jars,
          jute ropes, rowing oars, sailboats, navigational maps, and more!
        </p>

        {/* ARROW ICON */}
        <div className="flex justify-center mt-6">
          <svg
            width="36"
            height="36"
            viewBox="0 0 490.8 490.8"
            fill="#9db3d0"
          >
            <path d="M231.696 3.128c-4.237-4.093-10.99-3.975-15.083.262-3.992 4.134-3.992 10.687 0 14.82l227.115 227.136L216.592 472.461c-4.237 4.093-4.355 10.845-.262 15.083 4.093 4.237 10.845 4.354 15.083.262.089-.086.176-.173.262-.262l234.667-234.667c4.164-4.165 4.164-10.917 0-15.083L231.696 3.128z" />
          </svg>
        </div>

      </div>
    </section>
  )
}
