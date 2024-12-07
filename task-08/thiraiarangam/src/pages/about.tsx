

export default function About() {
  return (
<div className="flex items-center justify-center gap-10 p-6">
      {/* Image Section */}
      <div className="flex-1">
        <img
          src="/images/profile.jpg"
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl leading-relaxed">
          Welcome to our About page! Our mission is to deliver excellence in
          every aspect of what we do. Learn more about our team, vision, and the
          impact we're making.
        </p>
      </div>
    </div>
  )
}

