import { useState, useEffect, useRef } from "react"

const allImages = [
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
  "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
  "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",

  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  "https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg",
  "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg",
  "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
  "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
  "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
]

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null)
  const [visibleCount, setVisibleCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  const sectionRef = useRef(null)

  // Close lightbox on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActiveImage(null)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  const visibleImages = allImages.slice(0, visibleCount)

  const handleViewMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setVisibleCount(allImages.length)
      setIsLoading(false)
    }, 800) // realistic loading delay
  }

  const handleViewLess = () => {
    setVisibleCount(6)
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer"
              onClick={() => setActiveImage(img)}
            >
              <img
                src={img}
                alt=""
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center mt-12 gap-6">

          {visibleCount < allImages.length && (
            <button
              onClick={handleViewMore}
              disabled={isLoading}
              className="bg-[#9db3d0] text-white px-10 py-3 tracking-[0.25em] text-sm font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {isLoading ? "LOADING..." : "VIEW MORE"}
            </button>
          )}

          {visibleCount > 6 && !isLoading && (
            <button
              onClick={handleViewLess}
              className="border border-gray-400 text-gray-700 px-10 py-3 tracking-[0.25em] text-sm font-semibold hover:bg-gray-100 transition"
            >
              VIEW LESS
            </button>
          )}

        </div>
      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt=""
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute top-6 right-6 text-white text-4xl font-light"
            onClick={() => setActiveImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}
