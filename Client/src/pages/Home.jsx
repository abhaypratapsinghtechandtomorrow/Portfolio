import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"/>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"/>

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-gray-400 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
          Available for work
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Hi, I'm <span className="gradient-text">Abhay</span>
          <br/>
          Full Stack Developer
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I build modern web apps and create tech content on YouTube.
          Passionate about clean code, great design, and creator tools.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/portfolio"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 glow"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full glass glass-hover font-semibold"
          >
            Get In Touch
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 max-w-lg mx-auto">
          {[
            { value: '10+', label: 'Projects Built' },
            { value: '2+', label: 'Years Experience' },
            { value: '1K+', label: 'YouTube Subs' },
          ].map(stat => (
            <div key={stat.label} className="glass p-4 text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
