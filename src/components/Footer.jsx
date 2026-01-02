export default function Footer() {
  return (
    <footer className="bg-[#333333] py-16 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TEXT */}
        <p className="max-w-2xl mx-auto leading-relaxed">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>

        {/* DIVIDER */}
        <div className="h-px bg-gray-600 my-10" />

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Interior Design. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
