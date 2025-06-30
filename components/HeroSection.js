export default function HeroSection() {
  return (
    <section className="h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Discover Your Next Home
        </h1>
        <p className="text-xl md:text-2xl text-gray-200">
          ACASA — Where modern living meets timeless design
        </p>
      </div>
    </section>
  )
}
