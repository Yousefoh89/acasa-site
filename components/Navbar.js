export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">ACASA</div>
      <nav className="space-x-6 hidden md:flex text-sm font-medium text-gray-600">
        <a href="#about" className="hover:text-black">About</a>
        <a href="#services" className="hover:text-black">Services</a>
        <a href="#projects" className="hover:text-black">Projects</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </nav>
    </header>
  )
}
